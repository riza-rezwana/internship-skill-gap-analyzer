// server.js
// Main entry point for the InternTrack Express app

const express = require("express");
const path    = require("path");
const cors    = require("cors");

const skillGapRoutes = require("./src/routes/skillGapRoutes");

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS) from the public folder
app.use(express.static(path.join(__dirname, "public")));

// ── API Routes ────────────────────────────────────────────────────────────────
app.use("/api", skillGapRoutes);

// ── Page Route ────────────────────────────────────────────────────────────────
// Serve the dashboard page at /skill-gap
app.get("/skill-gap", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "skill-gap.html"));
});

// ── Root redirect ─────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.redirect("/skill-gap");
});

// ── Start Server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`   Dashboard: http://localhost:${PORT}/skill-gap`);
});
