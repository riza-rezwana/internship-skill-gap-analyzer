// ============================================================
// FILE: src/utils/matchingHelpers.js
// Feature: Module 2, Feature 4 — Skill-Based Internship Matching
// ============================================================

// Return a CSS color class name based on match percentage
function matchColorClass(pct) {
  if (pct >= 75) return 'success';
  if (pct >= 50) return 'warning';
  if (pct >= 25) return 'info';
  return 'danger';
}

// Return a human-readable tier label
function matchLabel(pct) {
  if (pct === 100) return 'Perfect';
  if (pct >= 75)  return 'Strong';
  if (pct >= 50)  return 'Good';
  if (pct >= 25)  return 'Partial';
  if (pct > 0)    return 'Low';
  return 'No Match';
}

// Return medal emoji for top 3 ranks
function rankMedal(rank) {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return `#${rank}`;
}

module.exports = { matchColorClass, matchLabel, rankMedal };
