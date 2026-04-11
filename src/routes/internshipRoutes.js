const express = require("express");
const router = express.Router();

// Import all functions from the controller
const {
  getAllInternships,
  getInternshipById,
  filterInternships,
  getCreateInternship,
  createInternship,
  getCompanyInternships,
  getStudentInternships,
  getInternshipDetails
} = require("../controllers/internshipController");

// Import Middlewares
const { ensureCompanyAuth } = require('../middlewares/companyAuthMiddleware');
const { ensureStudentAuth } = require('../middlewares/authMiddleware');

// Public/General Routes
router.get("/", getAllInternships);
router.get("/filter", filterInternships);

// Company Routes (Protected)
router.get('/create', ensureCompanyAuth, getCreateInternship);
router.post('/create', ensureCompanyAuth, createInternship);
router.get('/manage', ensureCompanyAuth, getCompanyInternships);

// Student Routes (Protected)
router.get('/student/feed', ensureStudentAuth, getStudentInternships);
router.get('/student/:id', ensureStudentAuth, getInternshipDetails);

// Specific ID route (Keep this at the bottom so it doesn't override /filter or /create)
router.get("/:id", getInternshipById);

module.exports = router;