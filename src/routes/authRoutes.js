const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const {
  getStudentLogin,
  getStudentRegister,
  registerStudent,
  loginStudent,
  logoutStudent
} = require('../controllers/authController');

console.log({
  getStudentLogin,
  getStudentRegister,
  registerStudent,
  loginStudent,
  logoutStudent
});

router.get('/student/login', getStudentLogin);
router.get('/student/register', getStudentRegister);
router.post('/student/register', upload.single('resume'), registerStudent);
router.post('/student/login', loginStudent);
router.get('/student/logout', logoutStudent);

module.exports = router;