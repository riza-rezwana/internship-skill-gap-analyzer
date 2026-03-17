// prisma/seed.js
// Run with:  node prisma/seed.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ── 1. CREATE SKILLS ────────────────────────────────────────────────────────
  const skillsData = [
    { name: "JavaScript",  category: "Programming" },
    { name: "Node.js",     category: "Framework"   },
    { name: "React",       category: "Framework"   },
    { name: "MySQL",       category: "Database"    },
    { name: "Git",         category: "Tool"        },
    { name: "REST APIs",   category: "Concept"     },
    { name: "Python",      category: "Programming" },
    { name: "TypeScript",  category: "Programming" },
    { name: "Docker",      category: "Tool"        },
    { name: "CSS/Tailwind",category: "Styling"     },
    { name: "MongoDB",     category: "Database"    },
  ];

  const skills = {};
  for (const s of skillsData) {
    const created = await prisma.skill.upsert({
      where:  { name: s.name },
      update: {},
      create: s,
    });
    skills[s.name] = created;
  }
  console.log("✅ Skills created");

  // ── 2. CREATE STUDENTS ──────────────────────────────────────────────────────
  const student1 = await prisma.student.upsert({
    where:  { email: "wasif@bracu.ac.bd" },
    update: {},
    create: { name: "Wasif Mahtab Hannan", email: "wasif@bracu.ac.bd", department: "CSE", semester: 8 },
  });

  const student2 = await prisma.student.upsert({
    where:  { email: "tayeba@bracu.ac.bd" },
    update: {},
    create: { name: "Tayeba Tabassum Mridula", email: "tayeba@bracu.ac.bd", department: "CSE", semester: 8 },
  });

  const student3 = await prisma.student.upsert({
    where:  { email: "nayeem@bracu.ac.bd" },
    update: {},
    create: { name: "Md Nayeem Shahriar", email: "nayeem@bracu.ac.bd", department: "CSE", semester: 7 },
  });
  console.log("✅ Students created");

  // ── 3. STUDENT SKILLS ───────────────────────────────────────────────────────
  // Student 1 — Wasif (strong frontend, weaker backend/devops)
  const student1Skills = [
    { skillName: "JavaScript",  level: 4 },
    { skillName: "React",       level: 4 },
    { skillName: "CSS/Tailwind",level: 5 },
    { skillName: "Node.js",     level: 2 },
    { skillName: "MySQL",       level: 3 },
    { skillName: "Git",         level: 4 },
    { skillName: "REST APIs",   level: 2 },
  ];

  // Student 2 — Tayeba (strong backend, weaker frontend)
  const student2Skills = [
    { skillName: "Python",      level: 4 },
    { skillName: "MySQL",       level: 5 },
    { skillName: "REST APIs",   level: 4 },
    { skillName: "Node.js",     level: 3 },
    { skillName: "Git",         level: 4 },
    { skillName: "JavaScript",  level: 2 },
    { skillName: "Docker",      level: 2 },
  ];

  // Student 3 — Nayeem (generalist, intermediate across the board)
  const student3Skills = [
    { skillName: "JavaScript",  level: 3 },
    { skillName: "React",       level: 2 },
    { skillName: "Python",      level: 3 },
    { skillName: "MySQL",       level: 3 },
    { skillName: "Git",         level: 3 },
    { skillName: "TypeScript",  level: 1 },
    { skillName: "MongoDB",     level: 2 },
  ];

  async function seedStudentSkills(student, skillList) {
    for (const entry of skillList) {
      await prisma.studentSkill.upsert({
        where:  { studentId_skillId: { studentId: student.id, skillId: skills[entry.skillName].id } },
        update: { level: entry.level },
        create: { studentId: student.id, skillId: skills[entry.skillName].id, level: entry.level },
      });
    }
  }

  await seedStudentSkills(student1, student1Skills);
  await seedStudentSkills(student2, student2Skills);
  await seedStudentSkills(student3, student3Skills);
  console.log("✅ Student skills created");

  // ── 4. CREATE INTERNSHIPS ───────────────────────────────────────────────────
  const internship1 = await prisma.internship.upsert({
    where:  { id: 1 },
    update: {},
    create: {
      title:       "Frontend Developer Intern",
      company:     "TechCorp BD",
      location:    "Dhaka",
      type:        "On-site",
      description: "Build modern web interfaces using React and Tailwind CSS.",
    },
  });

  const internship2 = await prisma.internship.upsert({
    where:  { id: 2 },
    update: {},
    create: {
      title:       "Backend Developer Intern",
      company:     "DataMinds Ltd",
      location:    "Remote",
      type:        "Remote",
      description: "Develop RESTful APIs using Node.js, Express, and MySQL.",
    },
  });

  const internship3 = await prisma.internship.upsert({
    where:  { id: 3 },
    update: {},
    create: {
      title:       "Full-Stack Engineer Intern",
      company:     "AI Nexus",
      location:    "Dhaka",
      type:        "Hybrid",
      description: "Work on full-stack features with React, Node.js, Docker, and TypeScript.",
    },
  });
  console.log("✅ Internships created");

  // ── 5. INTERNSHIP SKILL REQUIREMENTS ────────────────────────────────────────
  const internship1Reqs = [
    { skillName: "JavaScript",   requiredLevel: 4 },
    { skillName: "React",        requiredLevel: 4 },
    { skillName: "CSS/Tailwind", requiredLevel: 4 },
    { skillName: "Git",          requiredLevel: 3 },
    { skillName: "REST APIs",    requiredLevel: 3 },
  ];

  const internship2Reqs = [
    { skillName: "Node.js",   requiredLevel: 4 },
    { skillName: "MySQL",     requiredLevel: 4 },
    { skillName: "REST APIs", requiredLevel: 4 },
    { skillName: "Git",       requiredLevel: 3 },
    { skillName: "Docker",    requiredLevel: 3 },
    { skillName: "Python",    requiredLevel: 3 },
  ];

  const internship3Reqs = [
    { skillName: "JavaScript",  requiredLevel: 4 },
    { skillName: "React",       requiredLevel: 3 },
    { skillName: "Node.js",     requiredLevel: 4 },
    { skillName: "TypeScript",  requiredLevel: 3 },
    { skillName: "Docker",      requiredLevel: 3 },
    { skillName: "MySQL",       requiredLevel: 3 },
    { skillName: "REST APIs",   requiredLevel: 3 },
  ];

  async function seedRequirements(internship, reqList) {
    for (const req of reqList) {
      await prisma.internshipSkillRequirement.upsert({
        where:  { internshipId_skillId: { internshipId: internship.id, skillId: skills[req.skillName].id } },
        update: { requiredLevel: req.requiredLevel },
        create: { internshipId: internship.id, skillId: skills[req.skillName].id, requiredLevel: req.requiredLevel },
      });
    }
  }

  await seedRequirements(internship1, internship1Reqs);
  await seedRequirements(internship2, internship2Reqs);
  await seedRequirements(internship3, internship3Reqs);
  console.log("✅ Internship requirements created");

  console.log("\n🎉 Database seeded successfully!");
  console.log("   Students: 3  |  Skills: 11  |  Internships: 3");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
