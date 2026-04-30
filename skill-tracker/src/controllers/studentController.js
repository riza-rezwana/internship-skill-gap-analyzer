const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /api/students
const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        _count: {
          select: { skills: true, completedCourses: true }
        }
      },
      orderBy: { name: 'asc' }
    });

    const result = students.map(s => ({
      id: s.id,
      name: s.name,
      email: s.email,
      major: s.major,
      enrollmentYear: s.enrollmentYear,
      avatarInitials: s.avatarInitials,
      totalSkills: s._count.skills,
      completedCourses: s._count.completedCourses
    }));

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/students/:id
const getStudentById = async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        _count: { select: { skills: true, completedCourses: true } }
      }
    });

    if (!student) return res.status(404).json({ success: false, error: 'Student not found' });

    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/students/:id/skills
const getStudentSkills = async (req, res) => {
  try {
    const skills = await prisma.studentSkill.findMany({
      where: { studentId: parseInt(req.params.id) },
      include: { skill: true },
      orderBy: { level: 'desc' }
    });

    res.json({ success: true, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/students/:id/progress  (main dashboard data)
const getStudentProgress = async (req, res) => {
  try {
    const studentId = parseInt(req.params.id);

    const student = await prisma.student.findUnique({
      where: { id: studentId }
    });

    if (!student) return res.status(404).json({ success: false, error: 'Student not found' });

    // Current skills
    const studentSkills = await prisma.studentSkill.findMany({
      where: { studentId },
      include: { skill: true },
      orderBy: { level: 'desc' }
    });

    // Completed courses
    const completedCourses = await prisma.completedCourse.findMany({
      where: { studentId },
      include: { course: { include: { skill: true } } },
      orderBy: { completedAt: 'desc' }
    });

    // Progress history
    const progressHistory = await prisma.skillProgressHistory.findMany({
      where: { studentId },
      include: { skill: true },
      orderBy: { recordedAt: 'asc' }
    });

    // Available courses (not yet completed)
    const completedCourseIds = completedCourses.map(cc => cc.courseId);
    const availableCourses = await prisma.course.findMany({
      where: { id: { notIn: completedCourseIds } },
      include: { skill: true }
    });

    // --- Compute summary stats ---
    const totalSkills = studentSkills.length;
    const avgLevel = totalSkills > 0
      ? (studentSkills.reduce((sum, s) => sum + s.level, 0) / totalSkills).toFixed(1)
      : 0;
    const totalCompleted = completedCourses.length;

    // Most improved skill (biggest level gain in history)
    const skillGains = {};
    for (const h of progressHistory) {
      const key = h.skillId;
      if (!skillGains[key]) skillGains[key] = { name: h.skill.name, min: h.level, max: h.level };
      if (h.level < skillGains[key].min) skillGains[key].min = h.level;
      if (h.level > skillGains[key].max) skillGains[key].max = h.level;
    }
    let mostImproved = null;
    let maxGain = 0;
    for (const [id, data] of Object.entries(skillGains)) {
      const gain = data.max - data.min;
      if (gain > maxGain) { maxGain = gain; mostImproved = data.name; }
    }

    // Weakest skill
    const weakest = studentSkills[studentSkills.length - 1];

    // --- Chart data ---
    // Bar chart: current skill levels
    const barChartData = {
      labels: studentSkills.map(s => s.skill.name),
      data: studentSkills.map(s => s.level)
    };

    // Radar chart: skill profile
    const radarChartData = {
      labels: studentSkills.map(s => s.skill.name),
      data: studentSkills.map(s => s.level)
    };

    // Line chart: progress over time per skill
    // Group history by skill
    const lineChartData = {};
    for (const h of progressHistory) {
      const name = h.skill.name;
      if (!lineChartData[name]) lineChartData[name] = [];
      lineChartData[name].push({
        date: h.recordedAt.toISOString().split('T')[0],
        level: h.level
      });
    }

    // Learning insights
    const insights = [];
    if (mostImproved) insights.push(`🚀 Your ${mostImproved} skill improved by ${maxGain} level${maxGain > 1 ? 's' : ''} — great momentum!`);
    if (weakest) insights.push(`⚠️ Your weakest skill is ${weakest.skill.name} (Level ${weakest.level}). Consider focusing here next.`);
    const levelsToNextAvg = (Math.ceil(parseFloat(avgLevel)) - parseFloat(avgLevel)).toFixed(1);
    if (levelsToNextAvg > 0 && levelsToNextAvg < 1) insights.push(`📈 You're ${levelsToNextAvg} levels away from reaching average skill level ${Math.ceil(parseFloat(avgLevel))}.`);
    const recommended = availableCourses.find(c => c.skill.name === (weakest?.skill?.name));
    if (recommended) insights.push(`💡 Try "${recommended.title}" to boost your ${weakest?.skill?.name} skill.`);

    res.json({
      success: true,
      data: {
        student,
        summary: { totalSkills, avgLevel: parseFloat(avgLevel), totalCompleted, mostImproved },
        skills: studentSkills.map(s => ({
          id: s.skillId,
          name: s.skill.name,
          category: s.skill.category,
          icon: s.skill.icon,
          level: s.level
        })),
        completedCourses: completedCourses.map(cc => ({
          id: cc.id,
          courseTitle: cc.course.title,
          skillName: cc.course.skill.name,
          skillIcon: cc.course.skill.icon,
          completedAt: cc.completedAt,
          duration: cc.course.duration
        })),
        availableCourses: availableCourses.map(c => ({
          id: c.id,
          title: c.title,
          description: c.description,
          skillName: c.skill.name,
          skillIcon: c.skill.icon,
          duration: c.duration
        })),
        charts: { barChartData, radarChartData, lineChartData },
        insights
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// POST /api/students/:id/complete-course
const completeCourse = async (req, res) => {
  try {
    const studentId = parseInt(req.params.id);
    const { courseId } = req.body;

    if (!courseId) return res.status(400).json({ success: false, error: 'courseId is required' });

    // Check already completed
    const existing = await prisma.completedCourse.findUnique({
      where: { studentId_courseId: { studentId, courseId: parseInt(courseId) } }
    });
    if (existing) return res.status(409).json({ success: false, error: 'Course already completed' });

    // Get course info
    const course = await prisma.course.findUnique({ where: { id: parseInt(courseId) } });
    if (!course) return res.status(404).json({ success: false, error: 'Course not found' });

    // Get or create StudentSkill
    let studentSkill = await prisma.studentSkill.findUnique({
      where: { studentId_skillId: { studentId, skillId: course.skillId } }
    });

    const oldLevel = studentSkill?.level || 0;
    const newLevel = Math.min(5, oldLevel + 1);

    if (studentSkill) {
      await prisma.studentSkill.update({
        where: { studentId_skillId: { studentId, skillId: course.skillId } },
        data: { level: newLevel }
      });
    } else {
      await prisma.studentSkill.create({
        data: { studentId, skillId: course.skillId, level: newLevel }
      });
    }

    // Record completion
    await prisma.completedCourse.create({ data: { studentId, courseId: parseInt(courseId) } });

    // Record history
    await prisma.skillProgressHistory.create({
      data: { studentId, skillId: course.skillId, level: newLevel }
    });

    res.json({
      success: true,
      message: `Course completed! Skill level increased from ${oldLevel} to ${newLevel}.`,
      data: { oldLevel, newLevel, skillId: course.skillId }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getAllStudents, getStudentById, getStudentSkills, getStudentProgress, completeCourse };
