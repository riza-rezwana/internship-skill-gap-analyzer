// ============================================================
// FILE: MOUNT_IN_APP.js
// Feature: Module 2, Feature 4 — how to add these routes to
// your group's existing app.js WITHOUT touching other modules
// ============================================================
// Copy only the marked lines into your existing app.js
// ============================================================

// ── ADD these require lines near your other route requires ──
const matchingApiRoutes  = require('./src/routes/matching');       // JSON API
const matchingPageRoutes = require('./src/routes/matchingPages');  // HTML UI

// ── ADD these two app.use lines near your other route mounts ──
app.use('/api/internships', matchingApiRoutes);   // GET /api/internships/:id/matches
app.use('/matching',        matchingPageRoutes);  // GET /matching/:id

// ── That's it. No changes to any other file needed. ──────────

// ── If your group uses Handlebars, register these helpers ────
// Add to your existing helpers: {} block when setting up the engine

const hbsHelpers = {
  // Already needed by matching/index.hbs:
  eq:  (a, b) => a === b,
  gte: (a, b) => a >= b,
  gt:  (a, b) => a > b,
};

// Example (merge into your existing engine setup):
// app.engine('hbs', engine({
//   helpers: {
//     ...hbsHelpers,
//     // ...your other existing helpers
//   }
// }));
