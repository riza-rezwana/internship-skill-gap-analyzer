const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Skills
  const skills = await Promise.all([
    prisma.skill.upsert({ where: { name: 'JavaScript' }, update: {}, create: { name: 'JavaScript', category: 'Programming', icon: '⚡' } }),
    prisma.skill.upsert({ where: { name: 'Python' }, update: {}, create: { name: 'Python', category: 'Programming', icon: '🐍' } }),
    prisma.skill.upsert({ where: { name: 'React' }, update: {}, create: { name: 'React', category: 'Frontend', icon: '⚛️' } }),
    prisma.skill.upsert({ where: { name: 'SQL' }, update: {}, create: { name: 'SQL', category: 'Database', icon: '🗄️' } }),
    prisma.skill.upsert({ where: { name: 'Data Structures' }, update: {}, create: { name: 'Data Structures', category: 'CS Fundamentals', icon: '🧩' } }),
    prisma.skill.upsert({ where: { name: 'Problem Solving' }, update: {}, create: { name: 'Problem Solving', category: 'CS Fundamentals', icon: '🧠' } }),
    prisma.skill.upsert({ where: { name: 'Git' }, update: {}, create: { name: 'Git', category: 'Tools', icon: '🌿' } }),
    prisma.skill.upsert({ where: { name: 'Node.js' }, update: {}, create: { name: 'Node.js', category: 'Backend', icon: '🟢' } }),
    prisma.skill.upsert({ where: { name: 'HTML' }, update: {}, create: { name: 'HTML', category: 'Frontend', icon: '🌐' } }),
    prisma.skill.upsert({ where: { name: 'CSS' }, update: {}, create: { name: 'CSS', category: 'Frontend', icon: '🎨' } }),
  ]);

  const [js, py, react, sql, ds, ps, git, node, html, css] = skills;

  // Courses
  const courses = await Promise.all([
    prisma.course.create({ data: { title: 'JavaScript Fundamentals', description: 'Learn core JS concepts', skillId: js.id, levelRequired: 1, levelGranted: 1, duration: '4 weeks' } }),
    prisma.course.create({ data: { title: 'Advanced React Patterns', description: 'Hooks, context, performance', skillId: react.id, levelRequired: 2, levelGranted: 1, duration: '3 weeks' } }),
    prisma.course.create({ data: { title: 'Python for Data Science', description: 'NumPy, Pandas, Matplotlib', skillId: py.id, levelRequired: 1, levelGranted: 1, duration: '5 weeks' } }),
    prisma.course.create({ data: { title: 'SQL Mastery', description: 'Queries, joins, optimization', skillId: sql.id, levelRequired: 1, levelGranted: 1, duration: '3 weeks' } }),
    prisma.course.create({ data: { title: 'Git & GitHub Workflow', description: 'Version control best practices', skillId: git.id, levelRequired: 1, levelGranted: 1, duration: '2 weeks' } }),
    prisma.course.create({ data: { title: 'Node.js REST APIs', description: 'Build scalable backend APIs', skillId: node.id, levelRequired: 2, levelGranted: 1, duration: '4 weeks' } }),
  ]);

  // Students
  const alice = await prisma.student.upsert({
    where: { email: 'alice@university.edu' },
    update: {},
    create: { name: 'Alice Rahman', email: 'alice@university.edu', major: 'Computer Science', enrollmentYear: 2022, avatarInitials: 'AR' }
  });
  const bob = await prisma.student.upsert({
    where: { email: 'bob@university.edu' },
    update: {},
    create: { name: 'Bob Hassan', email: 'bob@university.edu', major: 'Software Engineering', enrollmentYear: 2021, avatarInitials: 'BH' }
  });
  const carol = await prisma.student.upsert({
    where: { email: 'carol@university.edu' },
    update: {},
    create: { name: 'Carol Islam', email: 'carol@university.edu', major: 'Information Technology', enrollmentYear: 2023, avatarInitials: 'CI' }
  });

  // Alice's skills
  const aliceSkills = [
    { skillId: js.id, level: 4 }, { skillId: react.id, level: 3 }, { skillId: html.id, level: 5 },
    { skillId: css.id, level: 4 }, { skillId: git.id, level: 3 }, { skillId: node.id, level: 2 },
    { skillId: sql.id, level: 2 }, { skillId: py.id, level: 1 },
  ];
  for (const s of aliceSkills) {
    await prisma.studentSkill.upsert({ where: { studentId_skillId: { studentId: alice.id, skillId: s.skillId } }, update: { level: s.level }, create: { studentId: alice.id, ...s } });
  }

  // Bob's skills
  const bobSkills = [
    { skillId: py.id, level: 4 }, { skillId: sql.id, level: 4 }, { skillId: ds.id, level: 3 },
    { skillId: ps.id, level: 4 }, { skillId: git.id, level: 4 }, { skillId: js.id, level: 2 },
    { skillId: node.id, level: 3 }, { skillId: html.id, level: 2 },
  ];
  for (const s of bobSkills) {
    await prisma.studentSkill.upsert({ where: { studentId_skillId: { studentId: bob.id, skillId: s.skillId } }, update: { level: s.level }, create: { studentId: bob.id, ...s } });
  }

  // Carol's skills
  const carolSkills = [
    { skillId: html.id, level: 3 }, { skillId: css.id, level: 3 }, { skillId: js.id, level: 2 },
    { skillId: git.id, level: 2 }, { skillId: sql.id, level: 1 }, { skillId: py.id, level: 2 },
  ];
  for (const s of carolSkills) {
    await prisma.studentSkill.upsert({ where: { studentId_skillId: { studentId: carol.id, skillId: s.skillId } }, update: { level: s.level }, create: { studentId: carol.id, ...s } });
  }

  // Completed courses
  await prisma.completedCourse.upsert({ where: { studentId_courseId: { studentId: alice.id, courseId: courses[0].id } }, update: {}, create: { studentId: alice.id, courseId: courses[0].id, completedAt: new Date('2024-01-15') } });
  await prisma.completedCourse.upsert({ where: { studentId_courseId: { studentId: alice.id, courseId: courses[1].id } }, update: {}, create: { studentId: alice.id, courseId: courses[1].id, completedAt: new Date('2024-02-20') } });
  await prisma.completedCourse.upsert({ where: { studentId_courseId: { studentId: alice.id, courseId: courses[4].id } }, update: {}, create: { studentId: alice.id, courseId: courses[4].id, completedAt: new Date('2024-03-10') } });
  await prisma.completedCourse.upsert({ where: { studentId_courseId: { studentId: bob.id, courseId: courses[2].id } }, update: {}, create: { studentId: bob.id, courseId: courses[2].id, completedAt: new Date('2024-01-05') } });
  await prisma.completedCourse.upsert({ where: { studentId_courseId: { studentId: bob.id, courseId: courses[3].id } }, update: {}, create: { studentId: bob.id, courseId: courses[3].id, completedAt: new Date('2024-02-01') } });

  // Skill progress history for Alice
  const now = new Date();
  const history = [
    { studentId: alice.id, skillId: js.id, level: 1, recordedAt: new Date('2024-01-01') },
    { studentId: alice.id, skillId: js.id, level: 2, recordedAt: new Date('2024-02-01') },
    { studentId: alice.id, skillId: js.id, level: 3, recordedAt: new Date('2024-03-01') },
    { studentId: alice.id, skillId: js.id, level: 4, recordedAt: new Date('2024-04-01') },
    { studentId: alice.id, skillId: react.id, level: 1, recordedAt: new Date('2024-01-01') },
    { studentId: alice.id, skillId: react.id, level: 2, recordedAt: new Date('2024-02-15') },
    { studentId: alice.id, skillId: react.id, level: 3, recordedAt: new Date('2024-03-20') },
    { studentId: alice.id, skillId: css.id, level: 2, recordedAt: new Date('2024-01-01') },
    { studentId: alice.id, skillId: css.id, level: 3, recordedAt: new Date('2024-02-10') },
    { studentId: alice.id, skillId: css.id, level: 4, recordedAt: new Date('2024-04-01') },
    { studentId: bob.id, skillId: py.id, level: 2, recordedAt: new Date('2024-01-01') },
    { studentId: bob.id, skillId: py.id, level: 3, recordedAt: new Date('2024-02-01') },
    { studentId: bob.id, skillId: py.id, level: 4, recordedAt: new Date('2024-03-15') },
    { studentId: bob.id, skillId: sql.id, level: 2, recordedAt: new Date('2024-01-01') },
    { studentId: bob.id, skillId: sql.id, level: 3, recordedAt: new Date('2024-02-20') },
    { studentId: bob.id, skillId: sql.id, level: 4, recordedAt: new Date('2024-04-01') },
  ];

  for (const h of history) {
    await prisma.skillProgressHistory.create({ data: h });
  }

  console.log('✅ Seed completed successfully!');
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
