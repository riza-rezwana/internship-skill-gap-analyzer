// ============================================================
// FILE: src/routes/matching.js
// Feature: Module 2, Feature 4 — Skill-Based Internship Matching
// ============================================================
// Mount in your app.js:
//   const matchingRoutes = require('./routes/matching');
//   app.use('/matching', matchingRoutes);      // HTML pages
//   app.use('/api/internships', matchingRoutes); // JSON API
// ============================================================

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/matchingController');

// ── JSON API endpoints ──────────────────────────────────────
// GET /api/internships/:id/matches
// Returns all students ranked for the given internship
router.get('/:id/matches', controller.getMatches);

// GET /api/internships/:id/top-matches?limit=5
// Returns only top N students (default 5)
router.get('/:id/top-matches', controller.getTopMatchesHandler);

// ── HTML page routes ────────────────────────────────────────
// Mount these separately under /matching in your app.js:
//   app.use('/matching', require('./routes/matchingPages'));

module.exports = router;
