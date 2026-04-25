const { PrismaClient } = require('../generated/p1-client');
const prisma = new PrismaClient();

const skillMeta = {
  HTML: 'Frontend',
  CSS: 'Frontend',
  'CSS/Tailwind': 'Frontend',
  JavaScript: 'Programming',
  TypeScript: 'Programming',
  React: 'Frontend',
  'React.js': 'Frontend',
  'Node.js': 'Backend',
  'Express.js': 'Backend',
  Python: 'Programming',
  SQL: 'Database',
  MySQL: 'Database',
  MongoDB: 'Database',
  Git: 'Tool',
  'Git & GitHub': 'Tool',
  'REST APIs': 'Backend',
  Docker: 'Tool',
  Figma: 'Design',
  'Machine Learning': 'Data',
  'Data Analysis': 'Data',
  Java: 'Programming',
  'Spring Boot': 'Backend',
};

async function reset() {
  await prisma.chatMessage.deleteMany();
  await prisma.chatSession.deleteMany();
  await prisma.studentCourseProgress.deleteMany();
  await prisma.courseResource.deleteMany();
  await prisma.internshipSkillRequirement.deleteMany();
  await prisma.internshipSkill.deleteMany();
  await prisma.studentSkill.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.internship.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.company.deleteMany();
  await prisma.student.deleteMany();
}

async function seedSkills() {
  const skills = {};
  for (const [name, category] of Object.entries(skillMeta)) {
    const row = await prisma.skill.create({
      data: { name, category, description: `${name} skill for internship readiness.` },
    });
    skills[name] = row;
  }
  return skills;
}

async function seedCompanies() {
  const companies = {};
  const rows = [
    ['techcorp', 'TechCorp BD', 'techcorp@techcorp.bd', 'Software', 'Leading software company building modern web products.'],
    ['dataminds', 'DataMinds Ltd', 'hr@dataminds.bd', 'Data & Analytics', 'Data-driven solutions for enterprise clients.'],
    ['ainexus', 'AI Nexus', 'jobs@ainexus.io', 'Artificial Intelligence', 'Building next-gen AI tools for developers.'],
    ['byteforge', 'ByteForge', 'jobs@byteforge.dev', 'Backend Engineering', 'API-first company building scalable services.'],
    ['pixelcraft', 'PixelCraft Studio', 'careers@pixelcraft.studio', 'Design', 'UI/UX and product design studio.'],
  ];
  for (const [key, companyName, email, industrySector, companyDescription] of rows) {
    companies[key] = await prisma.company.create({
      data: {
        companyName,
        email,
        password: 'demo_password',
        industrySector,
        companySize: '11-200',
        companyDescription,
        companyWebsite: 'https://example.com',
        contactPersonName: 'Demo Recruiter',
        designation: 'HR Manager',
        phoneNumber: '01711000000',
      },
    });
  }
  return companies;
}

async function seedStudents() {
  const students = [];
  const rows = [
    {
      id: 1,
      name: 'Ayesha Rahman',
      studentId: 'S-1001',
      firstName: 'Ayesha',
      lastName: 'Rahman',
      email: 'ayesha.frontend@student.com',
      department: 'CSE',
      semester: '8th',
      universityName: 'BRAC University',
      university: 'BRAC University',
      degree: 'B.Sc.',
      cgpa: '3.65',
      graduationYear: '2026',
      targetRole: 'Frontend Developer Intern',
      bio: 'Interested in frontend development and user-friendly web interfaces.',
      experience: 'Built small responsive websites and a React-based student dashboard.',
      interests: 'React, JavaScript, Tailwind CSS, UI implementation',
    },
    {
      id: 2,
      name: 'Siam Ahmed',
      studentId: 'S-1002',
      firstName: 'Siam',
      lastName: 'Ahmed',
      email: 'siam.backend@student.com',
      department: 'CSE',
      semester: '9th',
      universityName: 'BRAC University',
      university: 'BRAC University',
      degree: 'B.Sc.',
      cgpa: '3.82',
      graduationYear: '2025',
      targetRole: 'Backend Developer Intern',
      bio: 'Interested in backend APIs, databases, and scalable web services.',
      experience: 'Built CRUD APIs with Express.js and MySQL for academic projects.',
      interests: 'Node.js, Express.js, MySQL, REST APIs',
    },
    {
      id: 3,
      name: 'Nabila Hasan',
      studentId: 'S-1003',
      firstName: 'Nabila',
      lastName: 'Hasan',
      email: 'nabila.data@student.com',
      department: 'CSE',
      semester: '7th',
      universityName: 'BRAC University',
      university: 'BRAC University',
      degree: 'B.Sc.',
      cgpa: '3.40',
      graduationYear: '2026',
      targetRole: 'Python / Data Intern',
      bio: 'Interested in Python, data analysis, and product design thinking.',
      experience: 'Worked on Python automation scripts and beginner data dashboards.',
      interests: 'Python, SQL, Figma, dashboards, data storytelling',
    },
    {
      id: 4,
      name: 'Wasif Mahtab Hannan',
      studentId: 'S-1004',
      firstName: 'Wasif Mahtab',
      lastName: 'Hannan',
      email: 'wasif.fullstack@student.com',
      department: 'CSE',
      semester: '8th',
      universityName: 'BRAC University',
      university: 'BRAC University',
      targetRole: 'Full Stack Intern',
      bio: 'Interested in full-stack web applications.',
      experience: 'Built full-stack academic projects with APIs and databases.',
      interests: 'JavaScript, React, Node.js, MySQL',
    },
    {
      id: 5,
      name: 'Sara Ahmed',
      studentId: 'S-1005',
      firstName: 'Sara',
      lastName: 'Ahmed',
      email: 'sara.beginner@student.com',
      department: 'EEE',
      semester: '6th',
      universityName: 'BRAC University',
      university: 'BRAC University',
      targetRole: 'General Internship',
      bio: 'Exploring software and data internships.',
      interests: 'Python, Git, web basics',
    },
  ];

  for (const row of rows) {
    students.push(await prisma.student.create({ data: { ...row, password: 'demo_password' } }));
  }
  return students;
}

async function addStudentSkill(studentId, skillId, { level = 3, score = 3, chatScore = null, isCompleted = false } = {}) {
  return prisma.studentSkill.create({
    data: {
      studentId,
      skillId,
      level,
      score,
      chatScore: chatScore ?? Math.round(Math.min(score, 5) * 20),
      isCompleted,
    },
  });
}

async function seedStudentSkills(skills) {
  const data = {
    1: [
      ['HTML', 4.3, 86, true], ['CSS', 4.1, 82, true], ['CSS/Tailwind', 4.0, 80, true], ['JavaScript', 3.9, 78, true], ['React', 2.4, 48, false], ['React.js', 2.4, 48, false], ['SQL', 2.0, 40, false], ['MySQL', 2.0, 40, false], ['Git', 4.2, 84, true], ['Git & GitHub', 4.2, 84, true], ['REST APIs', 2.8, 56, false], ['Node.js', 1.5, 30, false],
    ],
    2: [
      ['JavaScript', 3.7, 74, true], ['Node.js', 3.4, 68, true], ['Express.js', 3.2, 63, true], ['SQL', 3.6, 72, true], ['MySQL', 3.6, 72, true], ['Git', 3.8, 76, true], ['Git & GitHub', 3.8, 76, true], ['REST APIs', 3.5, 70, true], ['Docker', 2.6, 52, false], ['React', 1.8, 35, false],
    ],
    3: [
      ['Python', 4.4, 88, true], ['SQL', 3.8, 76, true], ['MySQL', 3.5, 70, true], ['Figma', 2.6, 52, false], ['JavaScript', 2.2, 44, false], ['Git', 3.4, 69, true], ['Git & GitHub', 3.4, 69, true], ['Data Analysis', 3.8, 76, true], ['React', 1.0, 20, false],
    ],
    4: [
      ['JavaScript', 4.0, 80, true], ['React', 3.6, 72, true], ['Node.js', 3.4, 68, true], ['Express.js', 3.3, 66, true], ['MySQL', 3.4, 68, true], ['Git', 4.1, 82, true], ['REST APIs', 3.5, 70, true], ['TypeScript', 3.0, 60, false],
    ],
    5: [
      ['Python', 2.1, 42, false], ['Git', 2.5, 50, false], ['JavaScript', 1.4, 28, false],
    ],
  };

  for (const [studentId, rows] of Object.entries(data)) {
    for (const [skillName, score, chatScore, isCompleted] of rows) {
      const skill = skills[skillName];
      if (skill) await addStudentSkill(Number(studentId), skill.id, { level: Math.max(1, Math.round(score)), score, chatScore, isCompleted });
    }
  }
}

async function addInternshipSkill(internshipId, skillId, requiredScore = 3) {
  await prisma.internshipSkill.create({ data: { internshipId, skillId } });
  await prisma.internshipSkillRequirement.create({ data: { internshipId, skillId, requiredScore } });
}

async function seedInternships(companies, skills) {
  const specs = [
    {
      id: 1,
      company: companies.techcorp,
      title: 'Frontend Developer Intern',
      department: 'Engineering',
      location: 'Dhaka',
      workMode: 'On-site',
      durationMonths: 3,
      duration: '3 months',
      stipend: 10000,
      roleDescription: 'Build modern web interfaces using React and Tailwind CSS. Collaborate with senior developers on product features.',
      learningOutcomes: 'React, CSS, REST API integration, team workflow',
      applyUrl: 'https://example.com/frontend-intern',
      req: [['JavaScript', 4], ['React', 4], ['CSS/Tailwind', 4], ['Git', 2], ['REST APIs', 3]],
    },
    {
      id: 2,
      company: companies.dataminds,
      title: 'Backend Developer Intern',
      department: 'Engineering',
      location: 'Remote',
      workMode: 'Remote',
      isRemote: true,
      durationMonths: 3,
      duration: '3 months',
      stipend: 12000,
      roleDescription: 'Develop RESTful APIs using Node.js, Express, and MySQL. Write validation, tests, and endpoint documentation.',
      learningOutcomes: 'Node.js, MySQL, REST API design, Docker basics',
      applyUrl: 'https://example.com/backend-intern',
      req: [['Node.js', 4], ['MySQL', 4], ['REST APIs', 3], ['Git', 3], ['Docker', 2], ['JavaScript', 3]],
    },
    {
      id: 3,
      company: companies.ainexus,
      title: 'Data Analyst Intern',
      department: 'Data Science',
      location: 'Dhaka',
      workMode: 'Hybrid',
      durationMonths: 4,
      duration: '4 months',
      stipend: 15000,
      roleDescription: 'Analyze datasets, build dashboards, and support ML pipelines using Python and SQL.',
      learningOutcomes: 'Python, SQL, data visualization, pandas, basic ML',
      applyUrl: 'https://example.com/data-analyst-intern',
      req: [['Python', 4], ['SQL', 4], ['Data Analysis', 4], ['Git', 2], ['JavaScript', 2]],
    },
    {
      id: 4,
      company: companies.byteforge,
      title: 'Full Stack Web Developer Intern',
      department: 'Product Engineering',
      location: 'Dhaka',
      workMode: 'Hybrid',
      durationMonths: 4,
      duration: '4 months',
      roleDescription: 'Work across frontend and backend features for a production web app.',
      applyUrl: 'https://example.com/fullstack-intern',
      req: [['JavaScript', 4], ['React', 3], ['Node.js', 3], ['Express.js', 3], ['MySQL', 3], ['Git', 3]],
    },
    {
      id: 5,
      company: companies.pixelcraft,
      title: 'UI/UX Design Intern',
      department: 'Design',
      location: 'Remote',
      workMode: 'Remote',
      isRemote: true,
      durationMonths: 2,
      duration: '2 months',
      roleDescription: 'Create wireframes, prototypes, and design handoff assets.',
      applyUrl: 'https://example.com/uiux-intern',
      req: [['Figma', 4], ['CSS', 2], ['Git', 2]],
    },
  ];

  for (const spec of specs) {
    const skillTags = spec.req.map(([name]) => name).join(',');
    const internship = await prisma.internship.create({
      data: {
        id: spec.id,
        companyId: spec.company.id,
        companyName: spec.company.companyName,
        title: spec.title,
        department: spec.department,
        location: spec.location,
        workMode: spec.workMode,
        isRemote: Boolean(spec.isRemote),
        durationMonths: spec.durationMonths,
        duration: spec.duration,
        stipend: spec.stipend,
        roleDescription: spec.roleDescription,
        learningOutcomes: spec.learningOutcomes,
        numberOfPositions: 2,
        status: 'ACTIVE',
        skillTags,
        applyUrl: spec.applyUrl,
        minimumDegreeLevel: "Bachelor's",
        preferredFieldOfStudy: 'CSE',
      },
    });

    for (const [skillName, requiredScore] of spec.req) {
      await addInternshipSkill(internship.id, skills[skillName].id, requiredScore);
    }
  }
}

async function seedCourses(skills) {
  const courses = [
    ['JavaScript', 'JavaScript Full Course for Beginners', 'YOUTUBE', 'https://www.youtube.com/watch?v=PkZNo7MFNFg', 'BEGINNER', 3.5, 0.5],
    ['JavaScript', 'JavaScript, jQuery, and JSON', 'COURSERA', 'https://www.coursera.org/learn/javascript-jquery-json', 'INTERMEDIATE', 14, 1.0],
    ['React', 'React JS Full Course for Beginners', 'YOUTUBE', 'https://www.youtube.com/watch?v=bMknfKXIFA8', 'BEGINNER', 12, 0.5],
    ['React', 'React - The Complete Guide', 'UDEMY', 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/', 'INTERMEDIATE', 48, 1.5],
    ['Node.js', 'Node.js and Express.js Full Course', 'YOUTUBE', 'https://www.youtube.com/watch?v=Oe421EPjeBE', 'BEGINNER', 8, 0.5],
    ['Node.js', 'NodeJS - The Complete Guide', 'UDEMY', 'https://www.udemy.com/course/nodejs-the-complete-guide/', 'INTERMEDIATE', 40, 1.0],
    ['Express.js', 'Express.js Crash Course', 'YOUTUBE', 'https://www.youtube.com/watch?v=L72fhGm1tfE', 'BEGINNER', 2, 0.5],
    ['Python', 'Python for Beginners', 'YOUTUBE', 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', 'BEGINNER', 4, 0.5],
    ['Python', 'Python for Everybody', 'COURSERA', 'https://www.coursera.org/specializations/python', 'INTERMEDIATE', 19, 1.0],
    ['SQL', 'SQL Tutorial - Full Database Course', 'YOUTUBE', 'https://www.youtube.com/watch?v=HXV3zeQKqGY', 'BEGINNER', 4.5, 0.5],
    ['MySQL', 'MySQL Bootcamp', 'UDEMY', 'https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/', 'INTERMEDIATE', 20, 1.0],
    ['Git', 'Git and GitHub for Beginners', 'YOUTUBE', 'https://www.youtube.com/watch?v=RGOj5yH7evk', 'BEGINNER', 1.5, 0.5],
    ['Docker', 'Docker for Beginners', 'YOUTUBE', 'https://www.youtube.com/results?search_query=docker+for+beginners', 'BEGINNER', 3, 0.5],
    ['CSS/Tailwind', 'Tailwind CSS Full Course', 'YOUTUBE', 'https://www.youtube.com/results?search_query=tailwind+css+full+course', 'BEGINNER', 4, 0.5],
    ['Figma', 'Figma for Beginners', 'YOUTUBE', 'https://www.youtube.com/watch?v=jwCmIBJ8Jtc', 'BEGINNER', 2.5, 0.5],
    ['Data Analysis', 'Data Analysis with Python', 'COURSERA', 'https://www.coursera.org/learn/data-analysis-with-python', 'INTERMEDIATE', 15, 1.0],
  ];

  for (const [skillName, title, platform, courseUrl, difficulty, estimatedHours, scoreBoost] of courses) {
    await prisma.courseResource.create({
      data: {
        skillId: skills[skillName].id,
        title,
        platform,
        courseUrl,
        difficulty,
        estimatedHours,
        scoreBoost,
        description: `${title} helps build practical ${skillName} skill for internship readiness.`,
      },
    });
  }
}

async function main() {
  console.log('Resetting database tables...');
  await reset();
  console.log('Seeding unified demo data...');
  const skills = await seedSkills();
  const companies = await seedCompanies();
  await seedStudents();
  await seedStudentSkills(skills);
  await seedInternships(companies, skills);
  await seedCourses(skills);
  console.log('Seed complete. Demo Student IDs: 1, 2, 3. Demo Internship IDs: 1, 2, 3.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
