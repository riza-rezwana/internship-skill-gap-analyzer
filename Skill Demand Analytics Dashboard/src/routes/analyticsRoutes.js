// src/routes/analyticsRoutes.js
// Module 2 (Member 3): Skill Demand Analytics Routes

const express = require("express");
const router  = express.Router();
const {
  getTopSkills,
  getSkillsByCategory,
  getTrendingSkills,
  getInternshipSkills,
  getOverview,
  getAllInternships,
} = require("../controllers/analyticsController");

// GET /api/analytics/overview
// Summary stats used by dashboard header cards
router.get("/overview", getOverview);

// GET /api/analytics/top-skills?limit=10&category=Frontend
// Returns most in-demand skills from postings
router.get("/top-skills", getTopSkills);

// GET /api/analytics/by-category
// Returns demand grouped by skill category
router.get("/by-category", getSkillsByCategory);

// GET /api/analytics/trending
// Returns skills with highest combined demand+level score
router.get("/trending", getTrendingSkills);

// GET /api/analytics/internship-skills/:id
// Returns skills for a specific internship posting
router.get("/internship-skills/:id", getInternshipSkills);

// GET /api/analytics/all-internships
// Returns all internship postings (used by filter dropdown)
router.get("/all-internships", getAllInternships);

module.exports = router;
