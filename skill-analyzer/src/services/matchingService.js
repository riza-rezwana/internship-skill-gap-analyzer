const fs = require('fs');
const path = require('path');
const { normalizeSkillName, displayStudentName, displayCompanyName } = require('./skillUtils');

const DEFAULT_DB_PATH = path.join(__dirname, '../../prisma/dev.db');

function getSqliteDbPath() {
  const url = process.env.DATABASE_URL || '';
  if (url.startsWith('file:')) {
    const raw = url.replace(/^file:/, '');
    if (path.isAbsolute(raw)) return raw;
    return path.resolve(__dirname, '../../prisma', raw);
  }
  return DEFAULT_DB_PATH;
}

function getDatabaseSync() {
  try {
    return require('node:sqlite').DatabaseSync;
  } catch (error) {
    return null;
  }
}

const DEMO_SKILLS = [
  'HTML', 'CSS', 'CSS/Tailwind', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Express.js', 'Python', 'SQL', 'MySQL', 'Git', 'REST APIs', 'Docker', 'Figma',
  'Data Analysis'
];

const DEMO_STUDENTS = [
  {
    id: 1,
    name: 'Ayesha Rahman',
    department: 'CSE',
    skills: ['HTML', 'CSS', 'CSS/Tailwind', 'JavaScript', 'Git', 'REST APIs'].map((name, index) => ({
      id: index + 1,
      skill: { id: index + 1, name },
    })),
  },
  {
    id: 2,
    name: 'Siam Ahmed',
    department: 'CSE',
    skills: ['JavaScript', 'Node.js', 'Express.js', 'SQL', 'MySQL', 'Git', 'REST APIs', 'Docker'].map((name, index) => ({
      id: index + 1,
      skill: { id: index + 1, name },
    })),
  },
  {
    id: 3,
    name: 'Nabila Hasan',
    department: 'CSE',
    skills: ['Python', 'SQL', 'MySQL', 'Git', 'Data Analysis', 'Figma'].map((name, index) => ({
      id: index + 1,
      skill: { id: index + 1, name },
    })),
  },
  {
    id: 4,
    name: 'Wasif Mahtab Hannan',
    department: 'CSE',
    skills: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MySQL', 'Git', 'REST APIs', 'TypeScript'].map((name, index) => ({
      id: index + 1,
      skill: { id: index + 1, name },
    })),
  },
  {
    id: 5,
    name: 'Sara Ahmed',
    department: 'EEE',
    skills: ['Python', 'Git', 'JavaScript'].map((name, index) => ({
      id: index + 1,
      skill: { id: index + 1, name },
    })),
  },
];

function requiredSkillRows(names) {
  return names.map((name, index) => ({
    id: index + 1,
    skillId: index + 1,
    skill: { id: index + 1, name },
  }));
}

const DEMO_INTERNSHIPS = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    companyName: 'TechCorp BD',
    company: { id: 1, companyName: 'TechCorp BD' },
    department: 'Engineering',
    location: 'Dhaka',
    workMode: 'On-site',
    requiredSkills: requiredSkillRows(['JavaScript', 'React', 'CSS/Tailwind', 'Git', 'REST APIs']),
  },
  {
    id: 2,
    title: 'Backend Developer Intern',
    companyName: 'DataMinds Ltd',
    company: { id: 2, companyName: 'DataMinds Ltd' },
    department: 'Engineering',
    location: 'Remote',
    workMode: 'Remote',
    requiredSkills: requiredSkillRows(['Node.js', 'MySQL', 'REST APIs', 'Git', 'Docker', 'JavaScript']),
  },
  {
    id: 3,
    title: 'Data Analyst Intern',
    companyName: 'AI Nexus',
    company: { id: 3, companyName: 'AI Nexus' },
    department: 'Data Science',
    location: 'Dhaka',
    workMode: 'Hybrid',
    requiredSkills: requiredSkillRows(['Python', 'SQL', 'Data Analysis', 'Git', 'JavaScript']),
  },
  {
    id: 4,
    title: 'Full Stack Web Developer Intern',
    companyName: 'ByteForge',
    company: { id: 4, companyName: 'ByteForge' },
    department: 'Product Engineering',
    location: 'Dhaka',
    workMode: 'Hybrid',
    requiredSkills: requiredSkillRows(['JavaScript', 'React', 'Node.js', 'Express.js', 'MySQL', 'Git']),
  },
  {
    id: 5,
    title: 'UI/UX Design Intern',
    companyName: 'PixelCraft Studio',
    company: { id: 5, companyName: 'PixelCraft Studio' },
    department: 'Design',
    location: 'Remote',
    workMode: 'Remote',
    requiredSkills: requiredSkillRows(['Figma', 'CSS', 'Git']),
  },
];

function demoData() {
  return {
    internships: DEMO_INTERNSHIPS,
    students: DEMO_STUDENTS,
    source: 'built-in demo data',
  };
}

function groupRows(rows, keyField) {
  const grouped = new Map();
  for (const row of rows) {
    const key = row[keyField];
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(row);
  }
  return grouped;
}

function loadFromSqlite() {
  const DatabaseSync = getDatabaseSync();
  const dbPath = getSqliteDbPath();
  if (!DatabaseSync || !fs.existsSync(dbPath)) return demoData();

  let db;
  try {
    db = new DatabaseSync(dbPath, { readOnly: true });

    const internshipRows = db.prepare(`
      SELECT
        i.*,
        c.id AS companyRelationId,
        c.companyName AS companyRelationName,
        c.email AS companyEmail
      FROM internship i
      LEFT JOIN company c ON c.id = i.companyId
      ORDER BY i.id ASC
    `).all();

    const requiredRows = db.prepare(`
      SELECT
        rel.internshipId,
        rel.skillId,
        s.name AS skillName,
        s.category AS skillCategory,
        s.description AS skillDescription
      FROM (
        SELECT internshipId, skillId FROM internship_skills
        UNION
        SELECT internshipId, skillId FROM internship_skill_requirements
      ) rel
      INNER JOIN skill s ON s.id = rel.skillId
      ORDER BY rel.internshipId ASC, s.name ASC
    `).all();

    const studentRows = db.prepare(`
      SELECT
        st.*,
        ss.id AS studentSkillId,
        ss.skillId AS studentSkillSkillId,
        ss.level AS studentSkillLevel,
        ss.score AS studentSkillScore,
        ss.chatScore AS studentSkillChatScore,
        ss.isCompleted AS studentSkillCompleted,
        sk.name AS studentSkillName,
        sk.category AS studentSkillCategory
      FROM student st
      LEFT JOIN student_skills ss ON ss.studentId = st.id
      LEFT JOIN skill sk ON sk.id = ss.skillId
      ORDER BY st.id ASC, sk.name ASC
    `).all();

    const requiredByInternship = groupRows(requiredRows, 'internshipId');
    const internships = internshipRows.map((row) => {
      const requiredSkills = (requiredByInternship.get(row.id) || []).map((skillRow, index) => ({
        id: index + 1,
        internshipId: row.id,
        skillId: skillRow.skillId,
        skill: {
          id: skillRow.skillId,
          name: skillRow.skillName,
          category: skillRow.skillCategory,
          description: skillRow.skillDescription,
        },
      }));

      return {
        ...row,
        companyName: row.companyName || row.companyRelationName,
        company: row.companyRelationId ? {
          id: row.companyRelationId,
          companyName: row.companyRelationName,
          email: row.companyEmail,
        } : null,
        requiredSkills,
      };
    });

    const studentMap = new Map();
    for (const row of studentRows) {
      if (!studentMap.has(row.id)) {
        studentMap.set(row.id, {
          id: row.id,
          name: row.name,
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          department: row.department,
          skills: [],
        });
      }

      if (row.studentSkillId && row.studentSkillName) {
        studentMap.get(row.id).skills.push({
          id: row.studentSkillId,
          studentId: row.id,
          skillId: row.studentSkillSkillId,
          level: row.studentSkillLevel,
          score: row.studentSkillScore,
          chatScore: row.studentSkillChatScore,
          isCompleted: Boolean(row.studentSkillCompleted),
          skill: {
            id: row.studentSkillSkillId,
            name: row.studentSkillName,
            category: row.studentSkillCategory,
          },
        });
      }
    }

    const students = Array.from(studentMap.values());
    if (!internships.length || !students.length) return demoData();

    return { internships, students, source: 'local SQLite database' };
  } catch (error) {
    console.warn('[matchingService] SQLite matching data fallback used:', error.message);
    return demoData();
  } finally {
    try {
      if (db) db.close();
    } catch (error) {
      // Ignore close errors; the next request can reopen the local DB.
    }
  }
}

function calculateMatch(student, internship) {
  const requiredSkills = internship.requiredSkills || [];
  const requiredNames = requiredSkills.map((row) => row.skill && row.skill.name).filter(Boolean);

  if (requiredNames.length === 0) {
    return {
      studentId: student.id,
      studentName: displayStudentName(student),
      department: student.department || '',
      internshipId: internship.id,
      internshipTitle: internship.title,
      matchPercentage: 100,
      matchedCount: 0,
      requiredCount: 0,
      matchedSkills: [],
      missingSkills: [],
      explanation: 'No specific skills are required, so every student qualifies.',
    };
  }

  const studentSkillSet = new Set((student.skills || [])
    .map((row) => normalizeSkillName(row.skill && row.skill.name))
    .filter(Boolean));

  const uniqueRequired = [];
  const seen = new Set();
  for (const name of requiredNames) {
    const normalized = normalizeSkillName(name);
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    uniqueRequired.push({ original: name, normalized });
  }

  const matchedSkills = [];
  const missingSkills = [];
  for (const required of uniqueRequired) {
    if (studentSkillSet.has(required.normalized)) matchedSkills.push(required.original);
    else missingSkills.push(required.original);
  }

  const matchedCount = matchedSkills.length;
  const requiredCount = uniqueRequired.length;
  const matchPercentage = requiredCount > 0
    ? Math.round((matchedCount / requiredCount) * 1000) / 10
    : 100;

  let explanation;
  if (matchPercentage === 100) explanation = `Perfect match: has all ${requiredCount} required skills.`;
  else if (matchPercentage >= 75) explanation = `Strong match: ${matchedCount}/${requiredCount} skills present. Missing: ${missingSkills.join(', ')}.`;
  else if (matchPercentage >= 50) explanation = `Good match: ${matchedCount}/${requiredCount} skills present. Missing: ${missingSkills.join(', ')}.`;
  else if (matchPercentage >= 25) explanation = `Partial match: only ${matchedCount}/${requiredCount} required skills present.`;
  else if (matchPercentage > 0) explanation = `Low match: only ${matchedCount}/${requiredCount} required skills present.`;
  else explanation = `No match: none of the ${requiredCount} required skills are on the profile.`;

  return {
    studentId: student.id,
    studentName: displayStudentName(student),
    department: student.department || '',
    internshipId: internship.id,
    internshipTitle: internship.title,
    matchPercentage,
    matchedCount,
    requiredCount,
    matchedSkills,
    missingSkills,
    explanation,
  };
}

async function listInternships() {
  const { internships } = loadFromSqlite();
  return internships.map((internship) => ({
    ...internship,
    companyName: displayCompanyName(internship),
  }));
}

async function getRankedStudents(internshipId) {
  const id = parseInt(internshipId, 10);
  if (Number.isNaN(id)) throw new Error('Invalid internship ID');

  const { internships, students, source } = loadFromSqlite();
  const internship = internships.find((row) => Number(row.id) === id);
  if (!internship) throw new Error(`Internship #${id} not found`);

  const rankedStudents = students.map((student) => calculateMatch(student, internship));
  rankedStudents.sort((a, b) => {
    if (b.matchPercentage !== a.matchPercentage) return b.matchPercentage - a.matchPercentage;
    return a.studentName.localeCompare(b.studentName);
  });

  let rank = 1;
  for (let i = 0; i < rankedStudents.length; i += 1) {
    if (i > 0 && rankedStudents[i].matchPercentage < rankedStudents[i - 1].matchPercentage) rank = i + 1;
    rankedStudents[i].rank = rank;
  }

  const stats = {
    totalStudents: rankedStudents.length,
    perfectMatch: rankedStudents.filter((row) => row.matchPercentage === 100).length,
    strongMatch: rankedStudents.filter((row) => row.matchPercentage >= 75 && row.matchPercentage < 100).length,
    goodMatch: rankedStudents.filter((row) => row.matchPercentage >= 50 && row.matchPercentage < 75).length,
    partialMatch: rankedStudents.filter((row) => row.matchPercentage >= 25 && row.matchPercentage < 50).length,
    lowMatch: rankedStudents.filter((row) => row.matchPercentage < 25).length,
    averageMatch: rankedStudents.length
      ? Math.round((rankedStudents.reduce((sum, row) => sum + row.matchPercentage, 0) / rankedStudents.length) * 10) / 10
      : 0,
    dataSource: source,
  };

  return {
    internship: {
      ...internship,
      companyName: displayCompanyName(internship),
    },
    rankedStudents,
    stats,
  };
}

async function getTopMatches(internshipId, limit = 5) {
  const data = await getRankedStudents(internshipId);
  return { ...data, rankedStudents: data.rankedStudents.slice(0, limit) };
}

async function getFirstInternshipId() {
  const internships = await listInternships();
  return internships.length ? internships[0].id : null;
}

module.exports = {
  calculateMatch,
  getRankedStudents,
  getTopMatches,
  listInternships,
  getFirstInternshipId,
};
