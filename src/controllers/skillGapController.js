// src/controllers/skillGapController.js
// Core logic for the Skill Gap Dashboard
// Module 1 - Member 4 | CSE471 Group 08

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/internships
// Returns all internships for the dropdown selector
// ─────────────────────────────────────────────────────────────────────────────
const getAllInternships = async (req, res) => {
  try {
    const internships = await prisma.internship.findMany({
      select: {
        id:       true,
        title:    true,
        company:  true,
        location: true,
        type:     true,
      },
    });

    res.json({ success: true, data: internships });
  } catch (error) {
    console.error("Error fetching internships:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/students/:id
// Returns a student's basic info + their skills
// ─────────────────────────────────────────────────────────────────────────────
const getStudent = async (req, res) => {
  try {
    const studentId = parseInt(req.params.id);

    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: {
        skills: {
          include: { skill: true },
        },
      },
    });

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.json({ success: true, data: student });
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/students/:studentId/skill-gap/:internshipId
// THE MAIN FEATURE — computes the full skill gap analysis
// ─────────────────────────────────────────────────────────────────────────────
const getSkillGap = async (req, res) => {
  try {
    const studentId    = parseInt(req.params.studentId);
    const internshipId = parseInt(req.params.internshipId);

    // 1. Fetch student and their skills
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: {
        skills: {
          include: { skill: true },
        },
      },
    });

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    // 2. Fetch internship and its required skills
    const internship = await prisma.internship.findUnique({
      where: { id: internshipId },
      include: {
        skillRequirements: {
          include: { skill: true },
        },
      },
    });

    if (!internship) {
      return res.status(404).json({ success: false, message: "Internship not found" });
    }

    // 3. Build a lookup map: skillId -> student's level
    const studentSkillMap = {};
    student.skills.forEach((ss) => {
      studentSkillMap[ss.skillId] = ss.level;
    });

    // 4. Compare each required skill against student's skills
    const matched = [];
    const weak    = [];
    const missing = [];

    internship.skillRequirements.forEach((req) => {
      const skillName     = req.skill.name;
      const skillCategory = req.skill.category;
      const required      = req.requiredLevel;
      const yours         = studentSkillMap[req.skillId] ?? null;

      if (yours === null) {
        // Student doesn't have this skill at all
        missing.push({
          skillId:       req.skillId,
          skillName,
          skillCategory,
          yourLevel:     0,
          requiredLevel: required,
          gap:           required,
          status:        "Missing",
        });
      } else if (yours >= required) {
        // Student meets or exceeds requirement
        matched.push({
          skillId:       req.skillId,
          skillName,
          skillCategory,
          yourLevel:     yours,
          requiredLevel: required,
          gap:           0,
          status:        "Matched",
        });
      } else {
        // Student has the skill but below required level
        weak.push({
          skillId:       req.skillId,
          skillName,
          skillCategory,
          yourLevel:     yours,
          requiredLevel: required,
          gap:           required - yours,
          status:        "Weak",
        });
      }
    });

    // 5. Calculate readiness score
    // matched = 1 pt | weak = 0.5 pt | missing = 0 pt
    const totalRequired = internship.skillRequirements.length;
    const earnedPoints  = matched.length * 1 + weak.length * 0.5 + missing.length * 0;
    const readiness     = totalRequired > 0
      ? Math.round((earnedPoints / totalRequired) * 100)
      : 0;

    // 6. Build chart-friendly datasets
    const allSkills    = [...matched, ...weak, ...missing];
    const chartLabels  = allSkills.map((s) => s.skillName);
    const yourLevels   = allSkills.map((s) => s.yourLevel);
    const reqLevels    = allSkills.map((s) => s.requiredLevel);
    const statusColors = allSkills.map((s) => {
      if (s.status === "Matched") return "#22c55e";
      if (s.status === "Weak")    return "#f59e0b";
      return "#ef4444";
    });

    // 7. Generate recommendations for weak & missing skills
    const recommendations = generateRecommendations([...weak, ...missing]);

    // 8. Build final response
    const response = {
      success: true,
      data: {
        student: {
          id:         student.id,
          name:       student.name,
          department: student.department,
          semester:   student.semester,
        },
        internship: {
          id:          internship.id,
          title:       internship.title,
          company:     internship.company,
          location:    internship.location,
          type:        internship.type,
          description: internship.description,
        },
        summary: {
          totalRequired,
          matchedCount:  matched.length,
          weakCount:     weak.length,
          missingCount:  missing.length,
          readiness,
        },
        skills: {
          matched,
          weak,
          missing,
        },
        charts: {
          labels:       chartLabels,
          yourLevels,
          requiredLevels: reqLevels,
          statusColors,
          doughnut: {
            labels: ["Matched", "Weak", "Missing"],
            data:   [matched.length, weak.length, missing.length],
            colors: ["#22c55e", "#f59e0b", "#ef4444"],
          },
        },
        recommendations,
      },
    };

    res.json(response);
  } catch (error) {
    console.error("Error computing skill gap:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: Generate recommendations for weak/missing skills
// ─────────────────────────────────────────────────────────────────────────────
function generateRecommendations(skills) {
  const courseMap = {
    "JavaScript":   { learn: "JavaScript ES6+ features, async/await, DOM manipulation", why: "Core language for web development",       course: "JavaScript Full Course",         platform: "YouTube – freeCodeCamp",  url: "https://youtube.com" },
    "Node.js":      { learn: "Express.js, middleware, file system, async patterns",     why: "Required for backend API development",   course: "Node.js Complete Guide",          platform: "Udemy",                   url: "https://udemy.com"   },
    "React":        { learn: "Components, hooks, state management, React Router",       why: "Most popular frontend framework",        course: "React - The Complete Guide",      platform: "Udemy",                   url: "https://udemy.com"   },
    "MySQL":        { learn: "SQL queries, JOINs, indexes, transactions",               why: "Essential for relational data storage",  course: "MySQL Bootcamp",                  platform: "Udemy",                   url: "https://udemy.com"   },
    "Git":          { learn: "Branching, merging, pull requests, GitHub workflow",      why: "Mandatory in every software team",       course: "Git & GitHub Full Course",        platform: "YouTube – Traversy Media", url: "https://youtube.com"},
    "REST APIs":    { learn: "HTTP methods, status codes, JSON, API design patterns",   why: "Modern apps communicate via APIs",       course: "REST API Design",                 platform: "Coursera",                url: "https://coursera.org"},
    "Python":       { learn: "Python syntax, data structures, OOP, libraries",          why: "Widely used in backend and data tasks",  course: "Python for Everybody",            platform: "Coursera",                url: "https://coursera.org"},
    "TypeScript":   { learn: "Types, interfaces, generics, TypeScript with React",      why: "Makes JavaScript safer and scalable",    course: "TypeScript Full Course",          platform: "YouTube – Fireship",      url: "https://youtube.com"},
    "Docker":       { learn: "Containers, Dockerfiles, docker-compose, deployment",     why: "Industry standard for app deployment",   course: "Docker for Beginners",            platform: "YouTube – TechWorld",     url: "https://youtube.com"},
    "CSS/Tailwind": { learn: "Flexbox, Grid, Tailwind utility classes, responsiveness", why: "Professional UI design",                 course: "Tailwind CSS Full Course",        platform: "YouTube – freeCodeCamp",  url: "https://youtube.com"},
    "MongoDB":      { learn: "Documents, collections, CRUD, aggregation pipelines",     why: "Popular NoSQL database for modern apps", course: "MongoDB University Free Course",  platform: "MongoDB Atlas",           url: "https://university.mongodb.com"},
  };

  return skills.map((skill) => {
    const info = courseMap[skill.skillName] || {
      learn:    `Study ${skill.skillName} fundamentals`,
      why:      `Required for this internship at level ${skill.requiredLevel}`,
      course:   `Search "${skill.skillName} tutorial"`,
      platform: "YouTube or Udemy",
      url:      "https://youtube.com",
    };

    return {
      skillName:     skill.skillName,
      status:        skill.status,
      yourLevel:     skill.yourLevel,
      requiredLevel: skill.requiredLevel,
      gap:           skill.gap,
      whatToLearn:   info.learn,
      whyItMatters:  info.why,
      suggestedCourse: {
        name:     info.course,
        platform: info.platform,
        url:      info.url,
      },
    };
  });
}

module.exports = { getAllInternships, getStudent, getSkillGap };
