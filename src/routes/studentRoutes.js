const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { ensureStudentAuth } = require('../middlewares/authMiddleware');
const {
  getDashboard,
  getEditProfile,
  updateProfile
} = require('../controllers/studentController');

router.get('/dashboard', ensureStudentAuth, getDashboard);
router.get('/edit-profile', ensureStudentAuth, getEditProfile);
router.put('/edit-profile', ensureStudentAuth, upload.single('resume'), updateProfile);

module.exports = router;