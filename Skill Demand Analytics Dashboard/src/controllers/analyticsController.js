// src/controllers/analyticsController.js
// Module 2 (Member 3): Skill Demand Analytics Dashboard
// Core business logic for computing skill demand from internship postings

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ─── GET /api/analytics/top-skills ─────────────────────────────────────────
// Returns skills ranked by how often they appear in internship postings
// Includes demand count, average required level, and category breakdown
const getTopSkills = async (req, res) => {
  try {
    const { limit = 10, category } = req.query;

    // Aggregate skill demand across all internship postings
    const skillDemand = await prisma.internshipSkillRequirement.groupBy({
      by: ["skillId"],
      _count: { internshipId: true },
      _avg:   { requiredLevel: true },
      _max:   { requiredLevel: true },
    });

    // Fetch skill metadata
    const skillIds = skillDemand.map(s => s.skillId);
    const skills = await prisma.skill.findMany({
      where: category
        ? { id: { in: skillIds }, category }
        : { id: { in: skillIds } },
    });

    const skillMap = {};
    skills.forEach(s => (skillMap[s.id] = s));

    // Merge and sort by demand count
    const merged = skillDemand
      .filter(s => skillMap[s.skillId])
      .map(s => ({
        skillId:          s.skillId,
        name:             skillMap[s.skillId].name,
        category:         skillMap[s.skillId].category,
        demandCount:      s._count.internshipId,
        avgRequiredLevel: parseFloat(s._avg.requiredLevel.toFixed(2)),
        maxRequiredLevel: s._max.requiredLevel,
      }))
      .sort((a, b) => b.demandCount - a.demandCount)
      .slice(0, parseInt(limit));

    // Total internship count for demand %
    const totalInternships = await prisma.internship.count();

    const result = merged.map(s => ({
      ...s,
      demandPercentage: parseFloat(((s.demandCount / totalInternships) * 100).toFixed(1)),
    }));

    res.json({
      success: true,
      totalInternships,
      totalSkillsAnalyzed: merged.length,
      skills: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET /api/analytics/by-category ────────────────────────────────────────
// Returns skill demand grouped by category (Frontend, Backend, DevOps, etc.)
const getSkillsByCategory = async (req, res) => {
  try {
    const allRequirements = await prisma.internshipSkillRequirement.findMany({
      include: { skill: true },
    });

    const categoryMap = {};
    for (const req of allRequirements) {
      const cat = req.skill.category;
      if (!categoryMap[cat]) {
        categoryMap[cat] = { category: cat, totalDemand: 0, skills: {} };
      }
      categoryMap[cat].totalDemand++;
      const skillName = req.skill.name;
      if (!categoryMap[cat].skills[skillName]) {
        categoryMap[cat].skills[skillName] = { name: skillName, count: 0 };
      }
      categoryMap[cat].skills[skillName].count++;
    }

    const categories = Object.values(categoryMap).map(cat => ({
      category:   cat.category,
      totalDemand: cat.totalDemand,
      topSkill:   Object.values(cat.skills).sort((a, b) => b.count - a.count)[0]?.name,
      skillCount: Object.keys(cat.skills).length,
    })).sort((a, b) => b.totalDemand - a.totalDemand);

    res.json({ success: true, categories });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET /api/analytics/trending ───────────────────────────────────────────
// Returns skills with the highest average required level (most demanding)
const getTrendingSkills = async (req, res) => {
  try {
    const skillDemand = await prisma.internshipSkillRequirement.groupBy({
      by: ["skillId"],
      _count: { internshipId: true },
      _avg:   { requiredLevel: true },
      having: { internshipId: { _count: { gte: 1 } } },
    });

    const skillIds = skillDemand.map(s => s.skillId);
    const skills = await prisma.skill.findMany({ where: { id: { in: skillIds } } });
    const skillMap = {};
    skills.forEach(s => (skillMap[s.id] = s));

    // Trending = high demand AND high required level (combined score)
    const trending = skillDemand.map(s => ({
      name:             skillMap[s.skillId]?.name,
      category:         skillMap[s.skillId]?.category,
      demandCount:      s._count.internshipId,
      avgRequiredLevel: parseFloat(s._avg.requiredLevel.toFixed(2)),
      trendScore:       parseFloat((s._count.internshipId * s._avg.requiredLevel).toFixed(2)),
    }))
    .filter(s => s.name)
    .sort((a, b) => b.trendScore - a.trendScore)
    .slice(0, 8);

    res.json({ success: true, trending });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET /api/analytics/internship-skills/:id ──────────────────────────────
// Returns skill requirements for a single internship posting
const getInternshipSkills = async (req, res) => {
  try {
    const internshipId = parseInt(req.params.id);
    const internship = await prisma.internship.findUnique({
      where: { id: internshipId },
      include: {
        skillRequirements: {
          include: { skill: true },
          orderBy: { requiredLevel: "desc" },
        },
      },
    });

    if (!internship) {
      return res.status(404).json({ success: false, error: "Internship not found" });
    }

    res.json({
      success: true,
      internship: {
        id:       internship.id,
        title:    internship.title,
        company:  internship.company,
        industry: internship.industry,
        location: internship.location,
        type:     internship.type,
      },
      skills: internship.skillRequirements.map(r => ({
        skillId:       r.skillId,
        name:          r.skill.name,
        category:      r.skill.category,
        requiredLevel: r.requiredLevel,
      })),
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET /api/analytics/overview ───────────────────────────────────────────
// Summary stats: total internships, total skills tracked, most demanded skill
const getOverview = async (req, res) => {
  try {
    const [totalInternships, totalSkills, totalStudents] = await Promise.all([
      prisma.internship.count(),
      prisma.skill.count(),
      prisma.student.count(),
    ]);

    // Most demanded skill
    const topSkillRaw = await prisma.internshipSkillRequirement.groupBy({
      by: ["skillId"],
      _count: { internshipId: true },
      orderBy: { _count: { internshipId: "desc" } },
      take: 1,
    });

    let topSkill = null;
    if (topSkillRaw.length) {
      const sk = await prisma.skill.findUnique({ where: { id: topSkillRaw[0].skillId } });
      topSkill = { name: sk.name, category: sk.category, count: topSkillRaw[0]._count.internshipId };
    }

    // Category demand breakdown
    const allReqs = await prisma.internshipSkillRequirement.findMany({ include: { skill: true } });
    const catCount = {};
    allReqs.forEach(r => {
      catCount[r.skill.category] = (catCount[r.skill.category] || 0) + 1;
    });

    res.json({
      success: true,
      overview: {
        totalInternships,
        totalSkills,
        totalStudents,
        totalRequirements: allReqs.length,
        topSkill,
        categoryBreakdown: catCount,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET /api/analytics/all-internships ────────────────────────────────────
const getAllInternships = async (req, res) => {
  try {
    const internships = await prisma.internship.findMany({
      include: {
        _count: { select: { skillRequirements: true } },
      },
      orderBy: { postedAt: "desc" },
    });
    res.json({
      success: true,
      internships: internships.map(i => ({
        id:             i.id,
        title:          i.title,
        company:        i.company,
        industry:       i.industry,
        location:       i.location,
        type:           i.type,
        skillCount:     i._count.skillRequirements,
      })),
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  getTopSkills,
  getSkillsByCategory,
  getTrendingSkills,
  getInternshipSkills,
  getOverview,
  getAllInternships,
};
