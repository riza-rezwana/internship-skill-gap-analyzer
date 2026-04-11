// ============================================================
// FILE: src/routes/matchingPages.js
// Feature: Module 2, Feature 4 — HTML page routes
// ============================================================
// Mount in your app.js:
//   app.use('/matching', require('./routes/matchingPages'));
// ============================================================

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/matchingController');

// GET /matching           — redirects to first internship
router.get('/', controller.getMatchingHome);

// GET /matching/:id       — shows ranked students for internship #id
router.get('/:id', controller.getMatchingPage);

module.exports = router;
