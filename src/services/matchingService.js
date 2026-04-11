// ============================================================
// FILE: src/services/matchingService.js
// Feature: Module 2, Feature 4 — Skill-Based Internship Matching
// ============================================================
//
// ALGORITHM (simple to explain in viva):
//
//   Step 1: Normalize all skill names (lowercase + trim)
//   Step 2: Deduplicate both sides
//   Step 3: For each required skill, check if student has it
//   Step 4: matchPercentage = (matchedCount / totalRequired) * 100
//
// Edge cases:
//   - 0 required skills   => 100% (open internship)
//   - student has 0 skills => 0%
//   - null/empty names    => silently skipped
//   - duplicate skills    => deduplicated before compare
// ============================================================

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Normalize: "  React.JS " => "react.js"
function normalize(name) {
  if (!name || typeof name !== 'string') return '';
  return name.trim().toLowerCase();
}

// ── Core match calculation (pure function, no DB calls) ─────
// Used by getRankedStudents and can be unit-tested independently
function calculateMatch(student, internship) {
  const requiredSkills = internship.requiredSkills ?? [];

  // Edge: open internship — no skill filter
  if (requiredSkills.length === 0) {
    return {
      studentId:       student.id,
      studentName:     student.name,
      department:      student.department ?? '',
      internshipId:    internship.id,
      internshipTitle: internship.title,
      matchPercentage: 100,
      matchedCount:    0,
      requiredCount:   0,
      matchedSkills:   [],
      missingSkills:   [],
      explanation:     'No specific skills required — all students qualify.',
    };
  }

  // Student skill set (normalized, deduplicated)
  const studentSkillSet = new Set(
    (student.skills ?? [])
      .map(ss => normalize(ss.skill?.name))
      .filter(n => n.length > 0)
  );

  // Required skill list (normalized, deduplicated)
  const seen = new Set();
  const uniqueRequired = [];
  for (const rs of requiredSkills) {
    const norm = normalize(rs.skill?.name);
    if (!norm || seen.has(norm)) continue;
    seen.add(norm);
    uniqueRequired.push({ original: rs.skill.name, normalized: norm });
  }

  const matchedSkills = [];
  const missingSkills = [];

  for (const req of uniqueRequired) {
    if (studentSkillSet.has(req.normalized)) {
      matchedSkills.push(req.original);
    } else {
      missingSkills.push(req.original);
    }
  }

  const matchedCount    = matchedSkills.length;
  const requiredCount   = uniqueRequired.length;
  const matchPercentage = Math.round((matchedCount / requiredCount) * 1000) / 10; // 1 decimal

  // Human-readable explanation for the UI / viva demo
  let explanation;
  if (matchPercentage === 100) {
    explanation = `Perfect match — has all ${requiredCount} required skills.`;
  } else if (matchPercentage >= 75) {
    explanation = `Strong match — ${matchedCount}/${requiredCount} skills present. Missing: ${missingSkills.join(', ')}.`;
  } else if (matchPercentage >= 50) {
    explanation = `Good match — ${matchedCount}/${requiredCount} skills present. Missing: ${missingSkills.join(', ')}.`;
  } else if (matchPercentage >= 25) {
    explanation = `Partial match — only ${matchedCount}/${requiredCount} skills present.`;
  } else if (matchPercentage > 0) {
    explanation = `Low match — only ${matchedCount}/${requiredCount} skills present.`;
  } else {
    explanation = `No match — none of the ${requiredCount} required skills found on profile.`;
  }

  return {
    studentId:       student.id,
    studentName:     student.name,
    department:      student.department ?? '',
    internshipId:    internship.id,
    internshipTitle: internship.title,
    matchPercentage,
    matchedCount,
    requiredCount,
    matchedSkills,   // array of skill name strings
    missingSkills,   // array of skill name strings
    explanation,
  };
}

// ── Get ALL students ranked for a given internship ──────────
// Returns { internship, rankedStudents[], stats }
async function getRankedStudents(internshipId) {
  const id = parseInt(internshipId, 10);
  if (isNaN(id)) throw new Error('Invalid internship ID');

  const internship = await prisma.internship.findUnique({
    where:   { id },
    include: { requiredSkills: { include: { skill: true } } },
  });
  if (!internship) throw new Error(`Internship #${id} not found`);

  const students = await prisma.student.findMany({
    include: { skills: { include: { skill: true } } },
  });

  // Calculate match for every student
  const results = students.map(s => calculateMatch(s, internship));

  // Rank: highest % first; alphabetical tie-break
  results.sort((a, b) =>
    b.matchPercentage !== a.matchPercentage
      ? b.matchPercentage - a.matchPercentage
      : a.studentName.localeCompare(b.studentName)
  );

  // Assign rank numbers (tied students share rank)
  let rank = 1;
  for (let i = 0; i < results.length; i++) {
    if (i > 0 && results[i].matchPercentage < results[i - 1].matchPercentage) rank = i + 1;
    results[i].rank = rank;
  }

  // Summary stats for the UI dashboard strip
  const stats = {
    totalStudents: results.length,
    perfectMatch:  results.filter(r => r.matchPercentage === 100).length,
    strongMatch:   results.filter(r => r.matchPercentage >= 75 && r.matchPercentage < 100).length,
    goodMatch:     results.filter(r => r.matchPercentage >= 50 && r.matchPercentage < 75).length,
    partialMatch:  results.filter(r => r.matchPercentage >= 25 && r.matchPercentage < 50).length,
    lowMatch:      results.filter(r => r.matchPercentage < 25).length,
    averageMatch:  results.length
      ? Math.round(results.reduce((s, r) => s + r.matchPercentage, 0) / results.length * 10) / 10
      : 0,
  };

  return { internship, rankedStudents: results, stats };
}

// ── Optional: top-N matches only ───────────────────────────
async function getTopMatches(internshipId, limit = 5) {
  const data = await getRankedStudents(internshipId);
  return { ...data, rankedStudents: data.rankedStudents.slice(0, limit) };
}

module.exports = { calculateMatch, getRankedStudents, getTopMatches, normalize };
