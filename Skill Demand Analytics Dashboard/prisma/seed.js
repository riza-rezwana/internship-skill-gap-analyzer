// prisma/seed.js
// Seed data for Module 2 (Member 3): Skill Demand Analytics Dashboard

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database for Skill Demand Analytics...");

  // ─── SKILLS (15 skills across categories) ───────────────────────────────
  const skills = await Promise.all([
    prisma.skill.upsert({ where: { name: "JavaScript" },   update: {}, create: { name: "JavaScript",   category: "Frontend" } }),
    prisma.skill.upsert({ where: { name: "React.js" },     update: {}, create: { name: "React.js",     category: "Frontend" } }),
    prisma.skill.upsert({ where: { name: "HTML & CSS" },   update: {}, create: { name: "HTML & CSS",   category: "Frontend" } }),
    prisma.skill.upsert({ where: { name: "Node.js" },      update: {}, create: { name: "Node.js",      category: "Backend"  } }),
    prisma.skill.upsert({ where: { name: "Python" },       update: {}, create: { name: "Python",       category: "Backend"  } }),
    prisma.skill.upsert({ where: { name: "SQL" },          update: {}, create: { name: "SQL",          category: "Backend"  } }),
    prisma.skill.upsert({ where: { name: "REST APIs" },    update: {}, create: { name: "REST APIs",    category: "Backend"  } }),
    prisma.skill.upsert({ where: { name: "Git & GitHub" }, update: {}, create: { name: "Git & GitHub", category: "DevOps"   } }),
    prisma.skill.upsert({ where: { name: "Docker" },       update: {}, create: { name: "Docker",       category: "DevOps"   } }),
    prisma.skill.upsert({ where: { name: "AWS" },          update: {}, create: { name: "AWS",          category: "DevOps"   } }),
    prisma.skill.upsert({ where: { name: "Machine Learning"}, update:{}, create:{ name:"Machine Learning", category:"Data"  } }),
    prisma.skill.upsert({ where: { name: "Data Analysis" }, update:{}, create:{ name:"Data Analysis",  category: "Data"     } }),
    prisma.skill.upsert({ where: { name: "Communication" }, update:{}, create:{ name:"Communication",  category:"Soft Skills"}}),
    prisma.skill.upsert({ where: { name: "Problem Solving"},update:{}, create:{ name:"Problem Solving",category:"Soft Skills"}}),
    prisma.skill.upsert({ where: { name: "TypeScript" },   update: {}, create: { name: "TypeScript",   category: "Frontend" } }),
  ]);

  const skillMap = {};
  skills.forEach(s => skillMap[s.name] = s.id);

  // ─── STUDENTS (5 students) ───────────────────────────────────────────────
  const students = await Promise.all([
    prisma.student.upsert({ where:{email:"alice@uni.edu"}, update:{}, create:{name:"Alice Rahman",  email:"alice@uni.edu",  major:"CSE", year:3}}),
    prisma.student.upsert({ where:{email:"bob@uni.edu"},   update:{}, create:{name:"Bob Hossain",   email:"bob@uni.edu",    major:"CSE", year:2}}),
    prisma.student.upsert({ where:{email:"carol@uni.edu"}, update:{}, create:{name:"Carol Begum",   email:"carol@uni.edu",  major:"SWE", year:4}}),
    prisma.student.upsert({ where:{email:"david@uni.edu"}, update:{}, create:{name:"David Islam",   email:"david@uni.edu",  major:"CSE", year:3}}),
    prisma.student.upsert({ where:{email:"eva@uni.edu"},   update:{}, create:{name:"Eva Chowdhury", email:"eva@uni.edu",    major:"IT",  year:2}}),
  ]);

  // ─── INTERNSHIPS (8 postings) ────────────────────────────────────────────
  const internships = await Promise.all([
    prisma.internship.upsert({ where:{id:1}, update:{}, create:{id:1, title:"Frontend Developer Intern",   company:"TechBD Ltd",       industry:"Tech",     location:"Dhaka",      type:"Hybrid"  }}),
    prisma.internship.upsert({ where:{id:2}, update:{}, create:{id:2, title:"Backend Engineer Intern",     company:"SoftNexus",        industry:"Tech",     location:"Dhaka",      type:"Onsite"  }}),
    prisma.internship.upsert({ where:{id:3}, update:{}, create:{id:3, title:"Full Stack Intern",           company:"DevHouse BD",      industry:"Tech",     location:"Remote",     type:"Remote"  }}),
    prisma.internship.upsert({ where:{id:4}, update:{}, create:{id:4, title:"Data Analyst Intern",         company:"Analytica",        industry:"Finance",  location:"Chittagong", type:"Onsite"  }}),
    prisma.internship.upsert({ where:{id:5}, update:{}, create:{id:5, title:"ML Engineer Intern",          company:"AI Solutions BD",  industry:"Tech",     location:"Dhaka",      type:"Remote"  }}),
    prisma.internship.upsert({ where:{id:6}, update:{}, create:{id:6, title:"DevOps Intern",               company:"CloudBridge",      industry:"Tech",     location:"Dhaka",      type:"Hybrid"  }}),
    prisma.internship.upsert({ where:{id:7}, update:{}, create:{id:7, title:"React Developer Intern",      company:"UILabs",           industry:"Tech",     location:"Remote",     type:"Remote"  }}),
    prisma.internship.upsert({ where:{id:8}, update:{}, create:{id:8, title:"Software QA Intern",          company:"QualityFirst",     industry:"Tech",     location:"Dhaka",      type:"Onsite"  }}),
  ]);

  // ─── INTERNSHIP SKILL REQUIREMENTS ──────────────────────────────────────
  const internshipSkills = [
    // Frontend Developer Intern (1)
    {internshipId:1, skillName:"JavaScript",   requiredLevel:4},
    {internshipId:1, skillName:"React.js",     requiredLevel:3},
    {internshipId:1, skillName:"HTML & CSS",   requiredLevel:4},
    {internshipId:1, skillName:"TypeScript",   requiredLevel:2},
    {internshipId:1, skillName:"Git & GitHub", requiredLevel:3},
    {internshipId:1, skillName:"Communication",requiredLevel:3},
    // Backend Engineer Intern (2)
    {internshipId:2, skillName:"Node.js",      requiredLevel:4},
    {internshipId:2, skillName:"SQL",          requiredLevel:4},
    {internshipId:2, skillName:"REST APIs",    requiredLevel:4},
    {internshipId:2, skillName:"Git & GitHub", requiredLevel:3},
    {internshipId:2, skillName:"Python",       requiredLevel:2},
    {internshipId:2, skillName:"Problem Solving",requiredLevel:4},
    // Full Stack Intern (3)
    {internshipId:3, skillName:"JavaScript",   requiredLevel:4},
    {internshipId:3, skillName:"React.js",     requiredLevel:3},
    {internshipId:3, skillName:"Node.js",      requiredLevel:3},
    {internshipId:3, skillName:"SQL",          requiredLevel:3},
    {internshipId:3, skillName:"REST APIs",    requiredLevel:3},
    {internshipId:3, skillName:"Git & GitHub", requiredLevel:4},
    // Data Analyst Intern (4)
    {internshipId:4, skillName:"Python",       requiredLevel:4},
    {internshipId:4, skillName:"SQL",          requiredLevel:4},
    {internshipId:4, skillName:"Data Analysis",requiredLevel:4},
    {internshipId:4, skillName:"Communication",requiredLevel:3},
    {internshipId:4, skillName:"Problem Solving",requiredLevel:3},
    // ML Engineer Intern (5)
    {internshipId:5, skillName:"Python",       requiredLevel:5},
    {internshipId:5, skillName:"Machine Learning",requiredLevel:4},
    {internshipId:5, skillName:"Data Analysis",requiredLevel:3},
    {internshipId:5, skillName:"SQL",          requiredLevel:2},
    {internshipId:5, skillName:"Problem Solving",requiredLevel:4},
    // DevOps Intern (6)
    {internshipId:6, skillName:"Docker",       requiredLevel:3},
    {internshipId:6, skillName:"AWS",          requiredLevel:3},
    {internshipId:6, skillName:"Git & GitHub", requiredLevel:4},
    {internshipId:6, skillName:"Python",       requiredLevel:2},
    {internshipId:6, skillName:"Problem Solving",requiredLevel:3},
    // React Developer Intern (7)
    {internshipId:7, skillName:"React.js",     requiredLevel:4},
    {internshipId:7, skillName:"JavaScript",   requiredLevel:4},
    {internshipId:7, skillName:"TypeScript",   requiredLevel:3},
    {internshipId:7, skillName:"HTML & CSS",   requiredLevel:3},
    {internshipId:7, skillName:"Git & GitHub", requiredLevel:3},
    // Software QA Intern (8)
    {internshipId:8, skillName:"JavaScript",   requiredLevel:2},
    {internshipId:8, skillName:"SQL",          requiredLevel:2},
    {internshipId:8, skillName:"Communication",requiredLevel:4},
    {internshipId:8, skillName:"Problem Solving",requiredLevel:3},
    {internshipId:8, skillName:"Git & GitHub", requiredLevel:2},
  ];

  for (const req of internshipSkills) {
    await prisma.internshipSkillRequirement.upsert({
      where: { internshipId_skillId: { internshipId: req.internshipId, skillId: skillMap[req.skillName] } },
      update: { requiredLevel: req.requiredLevel },
      create: { internshipId: req.internshipId, skillId: skillMap[req.skillName], requiredLevel: req.requiredLevel },
    });
  }

  // ─── STUDENT SKILLS ──────────────────────────────────────────────────────
  const studentSkillData = [
    // Alice (id:1) - strong frontend
    {studentId:1, skillName:"JavaScript",    level:4},
    {studentId:1, skillName:"React.js",      level:3},
    {studentId:1, skillName:"HTML & CSS",    level:5},
    {studentId:1, skillName:"Git & GitHub",  level:3},
    {studentId:1, skillName:"SQL",           level:2},
    {studentId:1, skillName:"Communication", level:4},
    // Bob (id:2) - backend focused
    {studentId:2, skillName:"Node.js",       level:4},
    {studentId:2, skillName:"SQL",           level:4},
    {studentId:2, skillName:"REST APIs",     level:3},
    {studentId:2, skillName:"Python",        level:3},
    {studentId:2, skillName:"Git & GitHub",  level:4},
    {studentId:2, skillName:"Problem Solving",level:3},
    // Carol (id:3) - full stack senior
    {studentId:3, skillName:"JavaScript",    level:5},
    {studentId:3, skillName:"React.js",      level:4},
    {studentId:3, skillName:"Node.js",       level:4},
    {studentId:3, skillName:"SQL",           level:4},
    {studentId:3, skillName:"REST APIs",     level:4},
    {studentId:3, skillName:"Git & GitHub",  level:5},
    {studentId:3, skillName:"TypeScript",    level:3},
    // David (id:4) - data/ML track
    {studentId:4, skillName:"Python",        level:5},
    {studentId:4, skillName:"Machine Learning",level:3},
    {studentId:4, skillName:"Data Analysis", level:4},
    {studentId:4, skillName:"SQL",           level:3},
    {studentId:4, skillName:"Problem Solving",level:4},
    // Eva (id:5) - beginner, mixed
    {studentId:5, skillName:"JavaScript",    level:2},
    {studentId:5, skillName:"HTML & CSS",    level:3},
    {studentId:5, skillName:"SQL",           level:2},
    {studentId:5, skillName:"Communication", level:4},
    {studentId:5, skillName:"Git & GitHub",  level:2},
  ];

  for (const ss of studentSkillData) {
    await prisma.studentSkill.upsert({
      where: { studentId_skillId: { studentId: ss.studentId, skillId: skillMap[ss.skillName] } },
      update: { level: ss.level },
      create: { studentId: ss.studentId, skillId: skillMap[ss.skillName], level: ss.level },
    });
  }

  console.log("✅ Seed complete! Database ready for Skill Demand Analytics.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
