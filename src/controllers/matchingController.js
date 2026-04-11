// ============================================================
// FILE: src/controllers/matchingController.js
// Feature: Module 2, Feature 4 — Skill-Based Internship Matching
// ============================================================
// Thin controller: validates input, calls service, responds.
// All matching logic lives in matchingService.js — not here.
// ============================================================

const { getRankedStudents, getTopMatches } = require('../services/matchingService');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ── GET /api/internships/:id/matches ───────────────────────
// Returns all students ranked by match % for one internship.
// Response: JSON  { success, internship, rankedStudents, stats }
async function getMatches(req, res) {
  const { id } = req.params;

  try {
    const data = await getRankedStudents(id);
    return res.json({ success: true, ...data });
  } catch (err) {
    if (err.message.includes('not found')) {
      return res.status(404).json({ success: false, error: err.message });
    }
    if (err.message.includes('Invalid')) {
      return res.status(400).json({ success: false, error: err.message });
    }
    console.error('[matchingController.getMatches]', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}

// ── GET /api/internships/:id/top-matches ───────────────────
// Optional: returns only the top N matching students.
// Query param: ?limit=5 (default 5)
async function getTopMatchesHandler(req, res) {
  const { id } = req.params;
  const limit  = Math.max(1, parseInt(req.query.limit, 10) || 5);

  try {
    const data = await getTopMatches(id, limit);
    return res.json({ success: true, ...data });
  } catch (err) {
    if (err.message.includes('not found')) {
      return res.status(404).json({ success: false, error: err.message });
    }
    console.error('[matchingController.getTopMatches]', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}

// ── GET /matching/:id  (HTML page) ─────────────────────────
// Renders the matching UI page — server-side via Handlebars.
async function getMatchingPage(req, res) {
  const { id } = req.params;

  try {
    // Load all internships for the dropdown selector
    const internships = await prisma.internship.findMany({
      orderBy: { title: 'asc' },
    });

    const data = await getRankedStudents(id);

    return res.render('matching/index', {
      layout:      'main',
      title:       `Matched Students — ${data.internship.title}`,
      internship:  data.internship,
      rankedStudents: data.rankedStudents,
      stats:       data.stats,
      internships, // for the dropdown
      selectedId:  parseInt(id, 10),
    });
  } catch (err) {
    if (err.message.includes('not found')) {
      req.flash?.('error', err.message);
      return res.redirect('/matching');
    }
    console.error('[matchingController.getMatchingPage]', err);
    return res.status(500).render('error', { message: 'Failed to load matching page' });
  }
}

// ── GET /matching  (redirect to first internship) ──────────
async function getMatchingHome(req, res) {
  try {
    const first = await prisma.internship.findFirst({ orderBy: { id: 'asc' } });
    if (!first) {
      return res.render('matching/index', {
        layout:      'main',
        title:       'Skill Matching',
        internship:  null,
        rankedStudents: [],
        stats:       null,
        internships: [],
        selectedId:  null,
        noData:      true,
      });
    }
    return res.redirect(`/matching/${first.id}`);
  } catch (err) {
    console.error('[matchingController.getMatchingHome]', err);
    return res.status(500).render('error', { message: 'Failed to load matching page' });
  }
}

module.exports = {
  getMatches,
  getTopMatchesHandler,
  getMatchingPage,
  getMatchingHome,
};
