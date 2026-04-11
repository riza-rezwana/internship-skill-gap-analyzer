// server.js
// Module 2 (Member 3): Skill Demand Analytics Dashboard - Express Server

const express = require("express");
const path    = require("path");
const app     = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Analytics API routes
app.use("/api/analytics", require("./src/routes/analyticsRoutes"));

// Serve the dashboard page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Skill Demand Analytics running on http://localhost:${PORT}`);
});
