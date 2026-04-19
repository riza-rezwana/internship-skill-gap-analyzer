const express = require('express');
const router = express.Router();

const {
  getCareerReport,
  downloadCareerReportPdf,
  downloadCareerReportCsv 
} = require('../controllers/careerReportController');

router.get('/career-report', getCareerReport);
router.get('/career-report/pdf', downloadCareerReportPdf);
router.get('/career-report/csv', downloadCareerReportCsv);

module.exports = router;