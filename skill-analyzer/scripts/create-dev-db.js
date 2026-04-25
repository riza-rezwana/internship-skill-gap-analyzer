const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dbPath = path.join(__dirname, '..', 'prisma', 'dev.db');
const now = () => new Date().toISOString();

if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
const db = new DatabaseSync(dbPath);

db.exec('PRAGMA foreign_keys = OFF');
db.exec(`
DROP TABLE IF EXISTS chat_messages;
DROP TABLE IF EXISTS chat_sessions;
DROP TABLE IF EXISTS student_course_progress;
DROP TABLE IF EXISTS course_resources;
DROP TABLE IF EXISTS internship_skill_requirements;
DROP TABLE IF EXISTS internship_skills;
DROP TABLE IF EXISTS student_skills;
DROP TABLE IF EXISTS certificate;
DROP TABLE IF EXISTS internship;
DROP TABLE IF EXISTS skill;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS student;
`);
db.exec('PRAGMA foreign_keys = ON');

db.exec(`
CREATE TABLE certificate (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  studentName TEXT NOT NULL,
  companyName TEXT NOT NULL,
  certificateFile TEXT NOT NULL,
  durationMonths INTEGER NOT NULL,
  experienceRating INTEGER NOT NULL,
  createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE student (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  studentId TEXT UNIQUE,
  firstName TEXT,
  lastName TEXT,
  email TEXT UNIQUE,
  password TEXT,
  phone TEXT,
  country TEXT,
  dateOfBirth TEXT,
  gender TEXT,
  resume TEXT,
  universityName TEXT,
  university TEXT,
  degree TEXT,
  department TEXT,
  semester TEXT,
  cgpa TEXT,
  graduationYear TEXT,
  experience TEXT,
  locationPreferences TEXT,
  sectorPreferences TEXT,
  additionalInformation TEXT,
  targetRole TEXT,
  bio TEXT,
  interests TEXT,
  createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT NOT NULL
);

CREATE TABLE company (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  companyName TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  registrationNumber TEXT,
  industrySector TEXT,
  companySize TEXT,
  companyDescription TEXT,
  companyWebsite TEXT,
  contactPersonName TEXT,
  designation TEXT,
  phoneNumber TEXT,
  officeAddress TEXT,
  registrationCertificate TEXT,
  gstCertificate TEXT,
  createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT NOT NULL
);

CREATE TABLE skill (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  category TEXT,
  description TEXT,
  createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT NOT NULL
);

CREATE TABLE internship (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  companyId INTEGER,
  title TEXT NOT NULL,
  companyName TEXT,
  department TEXT,
  location TEXT,
  workMode TEXT,
  isRemote INTEGER NOT NULL DEFAULT 0,
  durationMonths INTEGER,
  duration TEXT,
  stipend REAL,
  roleDescription TEXT,
  learningOutcomes TEXT,
  numberOfPositions INTEGER NOT NULL DEFAULT 1,
  minimumDegreeLevel TEXT,
  preferredFieldOfStudy TEXT,
  minimumGpaPercentage TEXT,
  graduationYearRange TEXT,
  additionalPreferences TEXT,
  status TEXT NOT NULL DEFAULT 'ACTIVE',
  skillTags TEXT,
  applyUrl TEXT,
  createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT NOT NULL,
  FOREIGN KEY (companyId) REFERENCES company(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE student_skills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  studentId INTEGER NOT NULL,
  skillId INTEGER NOT NULL,
  level INTEGER NOT NULL DEFAULT 3,
  score REAL NOT NULL DEFAULT 1,
  chatScore INTEGER NOT NULL DEFAULT 0,
  isCompleted INTEGER NOT NULL DEFAULT 0,
  createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT NOT NULL,
  FOREIGN KEY (studentId) REFERENCES student(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (skillId) REFERENCES skill(id) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE(studentId, skillId)
);

CREATE TABLE internship_skills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  internshipId INTEGER NOT NULL,
  skillId INTEGER NOT NULL,
  FOREIGN KEY (internshipId) REFERENCES internship(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (skillId) REFERENCES skill(id) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE(internshipId, skillId)
);

CREATE TABLE internship_skill_requirements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  internshipId INTEGER NOT NULL,
  skillId INTEGER NOT NULL,
  requiredScore REAL NOT NULL DEFAULT 3,
  FOREIGN KEY (internshipId) REFERENCES internship(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (skillId) REFERENCES skill(id) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE(internshipId, skillId)
);

CREATE TABLE course_resources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  skillId INTEGER NOT NULL,
  title TEXT NOT NULL,
  platform TEXT NOT NULL,
  courseUrl TEXT NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'BEGINNER',
  estimatedHours REAL NOT NULL DEFAULT 5,
  description TEXT,
  scoreBoost REAL NOT NULL DEFAULT 0.5,
  isActive INTEGER NOT NULL DEFAULT 1,
  createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT NOT NULL,
  FOREIGN KEY (skillId) REFERENCES skill(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE student_course_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  studentId INTEGER NOT NULL,
  courseResourceId INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'NOT_STARTED',
  scoreAwarded INTEGER NOT NULL DEFAULT 0,
  startedAt TEXT,
  completedAt TEXT,
  createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT NOT NULL,
  FOREIGN KEY (studentId) REFERENCES student(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (courseResourceId) REFERENCES course_resources(id) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE(studentId, courseResourceId)
);

CREATE TABLE chat_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  studentId INTEGER NOT NULL,
  startedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  lastActive TEXT NOT NULL,
  isActive INTEGER NOT NULL DEFAULT 1,
  FOREIGN KEY (studentId) REFERENCES student(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE chat_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sessionId INTEGER NOT NULL,
  sender TEXT NOT NULL,
  message TEXT NOT NULL,
  intent TEXT,
  createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sessionId) REFERENCES chat_sessions(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX internship_companyId_idx ON internship(companyId);
CREATE INDEX student_skills_studentId_idx ON student_skills(studentId);
CREATE INDEX student_skills_skillId_idx ON student_skills(skillId);
CREATE INDEX internship_skills_internshipId_idx ON internship_skills(internshipId);
CREATE INDEX internship_skills_skillId_idx ON internship_skills(skillId);
CREATE INDEX internship_skill_requirements_internshipId_idx ON internship_skill_requirements(internshipId);
CREATE INDEX internship_skill_requirements_skillId_idx ON internship_skill_requirements(skillId);
CREATE INDEX course_resources_skillId_idx ON course_resources(skillId);
CREATE INDEX student_course_progress_studentId_idx ON student_course_progress(studentId);
CREATE INDEX student_course_progress_courseResourceId_idx ON student_course_progress(courseResourceId);
CREATE INDEX chat_sessions_studentId_idx ON chat_sessions(studentId);
CREATE INDEX chat_messages_sessionId_idx ON chat_messages(sessionId);
`);

function run(sql, params = {}) {
  db.prepare(sql).run(params);
}

const skills = {};
const skillMeta = {
  HTML: 'Frontend', CSS: 'Frontend', 'CSS/Tailwind': 'Frontend', JavaScript: 'Programming', TypeScript: 'Programming', React: 'Frontend', 'React.js': 'Frontend', 'Node.js': 'Backend', 'Express.js': 'Backend', Python: 'Programming', SQL: 'Database', MySQL: 'Database', MongoDB: 'Database', Git: 'Tool', 'Git & GitHub': 'Tool', 'REST APIs': 'Backend', Docker: 'Tool', Figma: 'Design', 'Machine Learning': 'Data', 'Data Analysis': 'Data', Java: 'Programming', 'Spring Boot': 'Backend'
};

const insertSkill = db.prepare('INSERT INTO skill (id, name, category, description, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)');
let skillId = 1;
for (const [name, category] of Object.entries(skillMeta)) {
  insertSkill.run(skillId, name, category, `${name} skill for internship readiness.`, now(), now());
  skills[name] = skillId;
  skillId += 1;
}

const companies = {
  techcorp: [1, 'TechCorp BD', 'techcorp@techcorp.bd', 'Software', 'Leading software company building modern web products.'],
  dataminds: [2, 'DataMinds Ltd', 'hr@dataminds.bd', 'Data & Analytics', 'Data-driven solutions for enterprise clients.'],
  ainexus: [3, 'AI Nexus', 'jobs@ainexus.io', 'Artificial Intelligence', 'Building next-gen AI tools for developers.'],
  byteforge: [4, 'ByteForge', 'jobs@byteforge.dev', 'Backend Engineering', 'API-first company building scalable services.'],
  pixelcraft: [5, 'PixelCraft Studio', 'careers@pixelcraft.studio', 'Design', 'UI/UX and product design studio.']
};
const insertCompany = db.prepare(`INSERT INTO company (id, companyName, email, password, industrySector, companySize, companyDescription, companyWebsite, contactPersonName, designation, phoneNumber, createdAt, updatedAt) VALUES (?, ?, ?, 'demo_password', ?, '11-200', ?, 'https://example.com', 'Demo Recruiter', 'HR Manager', '01711000000', ?, ?)`);
for (const key of Object.keys(companies)) {
  const [id, companyName, email, industrySector, companyDescription] = companies[key];
  insertCompany.run(id, companyName, email, industrySector, companyDescription, now(), now());
}

const studentRows = [
  { id: 1, name: 'Ayesha Rahman', studentId: 'S-1001', firstName: 'Ayesha', lastName: 'Rahman', email: 'ayesha.frontend@student.com', department: 'CSE', semester: '8th', universityName: 'BRAC University', university: 'BRAC University', degree: 'B.Sc.', cgpa: '3.65', graduationYear: '2026', targetRole: 'Frontend Developer Intern', bio: 'Interested in frontend development and user-friendly web interfaces.', experience: 'Built small responsive websites and a React-based student dashboard.', interests: 'React, JavaScript, Tailwind CSS, UI implementation' },
  { id: 2, name: 'Siam Ahmed', studentId: 'S-1002', firstName: 'Siam', lastName: 'Ahmed', email: 'siam.backend@student.com', department: 'CSE', semester: '9th', universityName: 'BRAC University', university: 'BRAC University', degree: 'B.Sc.', cgpa: '3.82', graduationYear: '2025', targetRole: 'Backend Developer Intern', bio: 'Interested in backend APIs, databases, and scalable web services.', experience: 'Built CRUD APIs with Express.js and MySQL for academic projects.', interests: 'Node.js, Express.js, MySQL, REST APIs' },
  { id: 3, name: 'Nabila Hasan', studentId: 'S-1003', firstName: 'Nabila', lastName: 'Hasan', email: 'nabila.data@student.com', department: 'CSE', semester: '7th', universityName: 'BRAC University', university: 'BRAC University', degree: 'B.Sc.', cgpa: '3.40', graduationYear: '2026', targetRole: 'Python / Data Intern', bio: 'Interested in Python, data analysis, and product design thinking.', experience: 'Worked on Python automation scripts and beginner data dashboards.', interests: 'Python, SQL, Figma, dashboards, data storytelling' },
  { id: 4, name: 'Wasif Mahtab Hannan', studentId: 'S-1004', firstName: 'Wasif Mahtab', lastName: 'Hannan', email: 'wasif.fullstack@student.com', department: 'CSE', semester: '8th', universityName: 'BRAC University', university: 'BRAC University', targetRole: 'Full Stack Intern', bio: 'Interested in full-stack web applications.', experience: 'Built full-stack academic projects with APIs and databases.', interests: 'JavaScript, React, Node.js, MySQL' },
  { id: 5, name: 'Sara Ahmed', studentId: 'S-1005', firstName: 'Sara', lastName: 'Ahmed', email: 'sara.beginner@student.com', department: 'EEE', semester: '6th', universityName: 'BRAC University', university: 'BRAC University', targetRole: 'General Internship', bio: 'Exploring software and data internships.', interests: 'Python, Git, web basics' }
];
const insertStudent = db.prepare(`INSERT INTO student (id, name, studentId, firstName, lastName, email, password, universityName, university, degree, department, semester, cgpa, graduationYear, targetRole, bio, experience, interests, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, 'demo_password', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
for (const s of studentRows) {
  insertStudent.run(s.id, s.name, s.studentId, s.firstName, s.lastName, s.email, s.universityName ?? null, s.university ?? null, s.degree ?? null, s.department ?? null, s.semester ?? null, s.cgpa ?? null, s.graduationYear ?? null, s.targetRole ?? null, s.bio ?? null, s.experience ?? null, s.interests ?? null, now(), now());
}

const insertStudentSkill = db.prepare('INSERT INTO student_skills (studentId, skillId, level, score, chatScore, isCompleted, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
const studentSkillData = {
  1: [['HTML', 4.3, 86, 1], ['CSS', 4.1, 82, 1], ['CSS/Tailwind', 4.0, 80, 1], ['JavaScript', 3.9, 78, 1], ['React', 2.4, 48, 0], ['React.js', 2.4, 48, 0], ['SQL', 2.0, 40, 0], ['MySQL', 2.0, 40, 0], ['Git', 4.2, 84, 1], ['Git & GitHub', 4.2, 84, 1], ['REST APIs', 2.8, 56, 0], ['Node.js', 1.5, 30, 0]],
  2: [['JavaScript', 3.7, 74, 1], ['Node.js', 3.4, 68, 1], ['Express.js', 3.2, 63, 1], ['SQL', 3.6, 72, 1], ['MySQL', 3.6, 72, 1], ['Git', 3.8, 76, 1], ['Git & GitHub', 3.8, 76, 1], ['REST APIs', 3.5, 70, 1], ['Docker', 2.6, 52, 0], ['React', 1.8, 35, 0]],
  3: [['Python', 4.4, 88, 1], ['SQL', 3.8, 76, 1], ['MySQL', 3.5, 70, 1], ['Figma', 2.6, 52, 0], ['JavaScript', 2.2, 44, 0], ['Git', 3.4, 69, 1], ['Git & GitHub', 3.4, 69, 1], ['Data Analysis', 3.8, 76, 1], ['React', 1.0, 20, 0]],
  4: [['JavaScript', 4.0, 80, 1], ['React', 3.6, 72, 1], ['Node.js', 3.4, 68, 1], ['Express.js', 3.3, 66, 1], ['MySQL', 3.4, 68, 1], ['Git', 4.1, 82, 1], ['REST APIs', 3.5, 70, 1], ['TypeScript', 3.0, 60, 0]],
  5: [['Python', 2.1, 42, 0], ['Git', 2.5, 50, 0], ['JavaScript', 1.4, 28, 0]]
};
for (const [studentIdText, rows] of Object.entries(studentSkillData)) {
  for (const [skillName, score, chatScore, isCompleted] of rows) {
    insertStudentSkill.run(Number(studentIdText), skills[skillName], Math.max(1, Math.round(score)), score, chatScore, isCompleted, now(), now());
  }
}

const internshipSpecs = [
  { id: 1, companyId: 1, companyName: 'TechCorp BD', title: 'Frontend Developer Intern', department: 'Engineering', location: 'Dhaka', workMode: 'On-site', isRemote: 0, durationMonths: 3, duration: '3 months', stipend: 10000, roleDescription: 'Build modern web interfaces using React and Tailwind CSS. Collaborate with senior developers on product features.', learningOutcomes: 'React, CSS, REST API integration, team workflow', applyUrl: 'https://example.com/frontend-intern', req: [['JavaScript', 4], ['React', 4], ['CSS/Tailwind', 4], ['Git', 2], ['REST APIs', 3]] },
  { id: 2, companyId: 2, companyName: 'DataMinds Ltd', title: 'Backend Developer Intern', department: 'Engineering', location: 'Remote', workMode: 'Remote', isRemote: 1, durationMonths: 3, duration: '3 months', stipend: 12000, roleDescription: 'Develop RESTful APIs using Node.js, Express, and MySQL. Write validation, tests, and endpoint documentation.', learningOutcomes: 'Node.js, MySQL, REST API design, Docker basics', applyUrl: 'https://example.com/backend-intern', req: [['Node.js', 4], ['MySQL', 4], ['REST APIs', 3], ['Git', 3], ['Docker', 2], ['JavaScript', 3]] },
  { id: 3, companyId: 3, companyName: 'AI Nexus', title: 'Data Analyst Intern', department: 'Data Science', location: 'Dhaka', workMode: 'Hybrid', isRemote: 0, durationMonths: 4, duration: '4 months', stipend: 15000, roleDescription: 'Analyze datasets, build dashboards, and support ML pipelines using Python and SQL.', learningOutcomes: 'Python, SQL, data visualization, pandas, basic ML', applyUrl: 'https://example.com/data-analyst-intern', req: [['Python', 4], ['SQL', 4], ['Data Analysis', 4], ['Git', 2], ['JavaScript', 2]] },
  { id: 4, companyId: 4, companyName: 'ByteForge', title: 'Full Stack Web Developer Intern', department: 'Product Engineering', location: 'Dhaka', workMode: 'Hybrid', isRemote: 0, durationMonths: 4, duration: '4 months', stipend: null, roleDescription: 'Work across frontend and backend features for a production web app.', learningOutcomes: null, applyUrl: 'https://example.com/fullstack-intern', req: [['JavaScript', 4], ['React', 3], ['Node.js', 3], ['Express.js', 3], ['MySQL', 3], ['Git', 3]] },
  { id: 5, companyId: 5, companyName: 'PixelCraft Studio', title: 'UI/UX Design Intern', department: 'Design', location: 'Remote', workMode: 'Remote', isRemote: 1, durationMonths: 2, duration: '2 months', stipend: null, roleDescription: 'Create wireframes, prototypes, and design handoff assets.', learningOutcomes: null, applyUrl: 'https://example.com/uiux-intern', req: [['Figma', 4], ['CSS', 2], ['Git', 2]] }
];
const insertInternship = db.prepare(`INSERT INTO internship (id, companyId, title, companyName, department, location, workMode, isRemote, durationMonths, duration, stipend, roleDescription, learningOutcomes, numberOfPositions, status, skillTags, applyUrl, minimumDegreeLevel, preferredFieldOfStudy, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 2, 'ACTIVE', ?, ?, ?, ?, ?, ?)`);
const insertInternshipSkill = db.prepare('INSERT INTO internship_skills (internshipId, skillId) VALUES (?, ?)');
const insertInternshipRequirement = db.prepare('INSERT INTO internship_skill_requirements (internshipId, skillId, requiredScore) VALUES (?, ?, ?)');
for (const spec of internshipSpecs) {
  const tags = spec.req.map(([name]) => name).join(',');
  insertInternship.run(spec.id, spec.companyId, spec.title, spec.companyName, spec.department, spec.location, spec.workMode, spec.isRemote, spec.durationMonths, spec.duration, spec.stipend, spec.roleDescription, spec.learningOutcomes, tags, spec.applyUrl, "Bachelor's", 'CSE', now(), now());
  for (const [skillName, requiredScore] of spec.req) {
    insertInternshipSkill.run(spec.id, skills[skillName]);
    insertInternshipRequirement.run(spec.id, skills[skillName], requiredScore);
  }
}

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
  ['Data Analysis', 'Data Analysis with Python', 'COURSERA', 'https://www.coursera.org/learn/data-analysis-with-python', 'INTERMEDIATE', 15, 1.0]
];
const insertCourse = db.prepare('INSERT INTO course_resources (skillId, title, platform, courseUrl, difficulty, estimatedHours, description, scoreBoost, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)');
for (const [skillName, title, platform, url, difficulty, hours, boost] of courses) {
  insertCourse.run(skills[skillName], title, platform, url, difficulty, hours, `${title} helps build practical ${skillName} skill for internship readiness.`, boost, now(), now());
}

run("INSERT INTO certificate (studentName, companyName, certificateFile, durationMonths, experienceRating, createdAt) VALUES ($studentName, $companyName, $certificateFile, $durationMonths, $experienceRating, $createdAt)", {
  $studentName: 'Ayesha Rahman',
  $companyName: 'TechCorp BD',
  $certificateFile: 'demo-certificate.pdf',
  $durationMonths: 3,
  $experienceRating: 5,
  $createdAt: now()
});

db.close();
console.log(`Local SQLite demo database created at ${dbPath}`);
