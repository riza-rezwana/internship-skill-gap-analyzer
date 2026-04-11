const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// GET /api/students - List all students
router.get('/', studentController.getAllStudents);

// GET /api/students/:id - Get single student
router.get('/:id', studentController.getStudentById);

// GET /api/students/:id/skills - Get student skills
router.get('/:id/skills', studentController.getStudentSkills);

// GET /api/students/:id/progress - Full progress data (used by dashboard)
router.get('/:id/progress', studentController.getStudentProgress);

// POST /api/students/:id/complete-course - Complete a course
router.post('/:id/complete-course', studentController.completeCourse);

module.exports = router;
