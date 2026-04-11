// ============================================================
// FILE: seed/matchingSeed.js
// Feature: Module 2, Feature 4 — Skill-Based Internship Matching
// ============================================================
// Run:  node seed/matchingSeed.js
//
// Seeds ONLY the data needed for this feature:
//   Skills, Students, StudentSkills, Internships, InternshipSkills
// Does NOT touch User auth, Applications, Feedback, etc.
// ============================================================

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding M2F4 data...\n');

  // ── 1. Skills ─────────────────────────────────────────────
  const skillNames = [
    'javascript', 'react.js', 'node.js', 'express.js',
    'python',     'django',   'mysql',   'mongodb',
    'html/css',   'tailwind css', 'git', 'rest api',
    'machine learning', 'data analysis', 'figma',
    'java',       'spring boot', 'typescript',
  ];

  const skills = {};
  for (const name of skillNames) {
    const skill = await prisma.skill.upsert({
      where:  { name },
      update: {},
      create: { name },
    });
    skills[name] = skill;
  }
  console.log(`✅ ${skillNames.length} skills ready`);

  // ── 2. Internships ────────────────────────────────────────
  const internshipData = [
    {
      title:       'Full Stack Web Developer Intern',
      companyName: 'TechCorp Bangladesh',
      reqSkills:   ['javascript', 'react.js', 'node.js', 'express.js', 'mysql', 'git', 'html/css'],
    },
    {
      title:       'Data Science & ML Intern',
      companyName: 'DataVision Analytics',
      reqSkills:   ['python', 'machine learning', 'data analysis', 'mysql', 'git'],
    },
    {
      title:       'Frontend Developer Intern',
      companyName: 'WebCraft Studio',
      reqSkills:   ['html/css', 'javascript', 'tailwind css', 'react.js', 'figma', 'git'],
    },
    {
      title:       'Backend Java Intern',
      companyName: 'Enterprise Solutions Ltd',
      reqSkills:   ['java', 'spring boot', 'mysql', 'rest api', 'git'],
    },
    {
      title:       'Open Internship (No Skill Filter)',
      companyName: 'Community NGO',
      reqSkills:   [],   // edge case: no required skills
    },
  ];

  const internships = {};
  for (const i of internshipData) {
    // Delete old requiredSkills to allow re-seeding safely
    const existing = await prisma.internship.findFirst({ where: { title: i.title } });
    if (existing) {
      await prisma.internshipSkill.deleteMany({ where: { internshipId: existing.id } });
    }

    const intern = await prisma.internship.upsert({
      where:  existing ? { id: existing.id } : { id: -1 }, // force create if not found
      update: { companyName: i.companyName },
      create: { title: i.title, companyName: i.companyName },
    }).catch(async () => {
      // fallback: just create
      return prisma.internship.create({ data: { title: i.title, companyName: i.companyName } });
    });

    for (const skillName of i.reqSkills) {
      if (!skills[skillName]) continue;
      await prisma.internshipSkill.upsert({
        where:  { internshipId_skillId: { internshipId: intern.id, skillId: skills[skillName].id } },
        update: {},
        create: { internshipId: intern.id, skillId: skills[skillName].id },
      });
    }
    internships[i.title] = intern;
  }
  console.log(`✅ ${internshipData.length} internships ready`);

  // ── 3. Students ───────────────────────────────────────────
  const studentData = [
    {
      name: 'Tayeba Tabassum Mridula', studentId: '22201275', department: 'CSE',
      skills: ['javascript', 'react.js', 'node.js', 'html/css', 'git', 'express.js', 'tailwind css'],
    },
    {
      name: 'Rezwana Rouf Riza', studentId: '22201272', department: 'CSE',
      skills: ['python', 'machine learning', 'data analysis', 'mysql', 'git'],
    },
    {
      name: 'Md Nayeem Shahriar', studentId: '22299334', department: 'CSE',
      skills: ['javascript', 'node.js', 'express.js', 'mysql', 'git', 'rest api'],
    },
    {
      name: 'Wasif Mahtab Hannan', studentId: '23301705', department: 'CSE',
      skills: ['javascript', 'react.js', 'html/css', 'tailwind css', 'figma', 'typescript', 'git'],
    },
    {
      name: 'Sara Ahmed', studentId: '22200100', department: 'EEE',
      skills: ['python', 'git'],  // sparse profile
    },
    {
      name: 'Abdul Karim', studentId: '22200200', department: 'CSE',
      skills: [],  // edge case: no skills at all
    },
  ];

  for (const s of studentData) {
    const existing = await prisma.student.findUnique({ where: { studentId: s.studentId } });
    if (existing) {
      await prisma.studentSkill.deleteMany({ where: { studentId: existing.id } });
    }

    const student = await prisma.student.upsert({
      where:  { studentId: s.studentId },
      update: { name: s.name, department: s.department },
      create: { name: s.name, studentId: s.studentId, department: s.department },
    });

    for (const skillName of s.skills) {
      if (!skills[skillName]) continue;
      await prisma.studentSkill.upsert({
        where:  { studentId_skillId: { studentId: student.id, skillId: skills[skillName].id } },
        update: {},
        create: { studentId: student.id, skillId: skills[skillName].id },
      });
    }
  }
  console.log(`✅ ${studentData.length} students ready`);
  console.log('\n🎉 M2F4 seed complete!');
  console.log('\nTest the feature:');
  console.log('  JSON API:  GET /api/internships/1/matches');
  console.log('  HTML page: GET /matching/1');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
