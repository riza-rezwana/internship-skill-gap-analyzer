const express = require('express');
const router = express.Router();

const {
  getCreateInternship,
  createInternship,
  getCompanyInternships,
  getStudentInternships,
  getInternshipDetails
} = require('../controllers/internshipController');

const { ensureCompanyAuth } = require('../middlewares/companyAuthMiddleware');
const { ensureStudentAuth } = require('../middlewares/authMiddleware');

router.get('/create', ensureCompanyAuth, getCreateInternship);
router.post('/create', ensureCompanyAuth, createInternship);
router.get('/manage', ensureCompanyAuth, getCompanyInternships);

router.get('/student/feed', ensureStudentAuth, getStudentInternships);
router.get('/student/:id', ensureStudentAuth, getInternshipDetails);

module.exports = router;