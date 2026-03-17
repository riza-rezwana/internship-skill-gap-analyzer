// src/routes/skillGapRoutes.js
// API routes for the Skill Gap Dashboard feature

const express    = require("express");
const router     = express.Router();
const controller = require("../controllers/skillGapController");

// GET /api/internships
// Returns all internships for the dropdown
router.get("/internships", controller.getAllInternships);

// GET /api/students/:id
// Returns a student's profile and their skills
router.get("/students/:id", controller.getStudent);

// GET /api/students/:studentId/skill-gap/:internshipId
// THE MAIN ENDPOINT — full skill gap analysis
router.get("/students/:studentId/skill-gap/:internshipId", controller.getSkillGap);

module.exports = router;
