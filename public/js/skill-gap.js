// public/js/skill-gap.js
// Frontend logic for the Skill Gap Dashboard
// Fetches from the Express API and renders everything
// CSE471 Group 08 | Module 1 Member 4

// ── Chart instances (stored so we can destroy before re-drawing) ──
let barChart      = null;
let doughnutChart = null;
let radarChart    = null;

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1: On page load — fetch internships and fill the dropdown
// ─────────────────────────────────────────────────────────────────────────────
async function init() {
  try {
    const res  = await fetch("/api/internships");
    const json = await res.json();

    const select = document.getElementById("internshipSelect");
    select.innerHTML = "";

    json.data.forEach(function(internship) {
      const opt   = document.createElement("option");
      opt.value   = internship.id;
      opt.textContent = `${internship.title} — ${internship.company}`;
      select.appendChild(opt);
    });

    // Load dashboard with defaults
    await loadDashboard();
  } catch (err) {
    console.error("Failed to load internships:", err);
    useFallbackData(); // show demo data if API is not running
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2: Load the full dashboard when student or internship changes
// ─────────────────────────────────────────────────────────────────────────────
async function loadDashboard() {
  const studentId    = document.getElementById("studentSelect").value;
  const internshipId = document.getElementById("internshipSelect").value;

  if (!studentId || !internshipId) return;

  try {
    const res  = await fetch(`/api/students/${studentId}/skill-gap/${internshipId}`);
    const json = await res.json();

    if (!json.success) {
      console.error("API error:", json.message);
      return;
    }

    renderDashboard(json.data);
  } catch (err) {
    console.error("Failed to load skill gap:", err);
    useFallbackData(); // show demo data if server not running
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3: Render everything from the API response
// ─────────────────────────────────────────────────────────────────────────────
function renderDashboard(data) {
  updateStudentCard(data.student, data.internship);
  updateStatCards(data.summary);
  updateProgressBar(data.summary.readiness);
  drawBarChart(data.charts);
  drawDoughnutChart(data.charts.doughnut);
  drawRadarChart(data.charts);
  buildTable(data.skills);
  buildRecommendations(data.recommendations);
}

// ── Student card ──────────────────────────────────────────────────────────────
function updateStudentCard(student, internship) {
  const initial = student.name.charAt(0).toUpperCase();
  document.getElementById("userAvatar").textContent = initial;
  document.getElementById("userName").textContent   = student.name;
  document.getElementById("cardAvatar").textContent = initial;
  document.getElementById("cardName").textContent   = student.name;
  document.getElementById("cardDept").textContent   = student.department;
  document.getElementById("cardSem").textContent    = `Semester ${student.semester}`;
  document.getElementById("cardInternship").textContent = `${internship.title} @ ${internship.company}`;
}

// ── Stat cards ────────────────────────────────────────────────────────────────
function updateStatCards(summary) {
  document.getElementById("statReadiness").textContent = summary.readiness + "%";
  document.getElementById("statMatched").textContent   = summary.matchedCount;
  document.getElementById("statWeak").textContent      = summary.weakCount;
  document.getElementById("statMissing").textContent   = summary.missingCount;
  document.getElementById("pillValue").textContent     = summary.readiness + "%";

  // Animate the circular ring
  const ringFill = document.getElementById("ringFill");
  setTimeout(function() {
    ringFill.setAttribute("stroke-dasharray", `${summary.readiness}, 100`);
  }, 100);
}

// ── Progress bar ──────────────────────────────────────────────────────────────
function updateProgressBar(readiness) {
  document.getElementById("progressPct").textContent = readiness + "%";
  setTimeout(function() {
    document.getElementById("progressFill").style.width = readiness + "%";
  }, 100);
}

// ── Bar Chart: Your Level vs Required Level ───────────────────────────────────
function drawBarChart(charts) {
  if (barChart) barChart.destroy();

  barChart = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: charts.labels,
      datasets: [
        {
          label:           "Your Level",
          data:            charts.yourLevels,
          backgroundColor: charts.statusColors.map(function(c) { return c + "cc"; }),
          borderColor:     charts.statusColors,
          borderWidth:     2,
          borderRadius:    6,
        },
        {
          label:           "Required Level",
          data:            charts.requiredLevels,
          backgroundColor: "rgba(15,23,42,0.08)",
          borderColor:     "rgba(15,23,42,0.3)",
          borderWidth:     2,
          borderRadius:    6,
          borderDash:      [4, 3],
        },
      ],
    },
    options: {
      responsive:          true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0, max: 5,
          ticks: { stepSize: 1, color: "#64748b", font: { size: 11 } },
          grid:  { color: "#f0f2f8" },
        },
        x: {
          ticks: { color: "#64748b", font: { size: 11 } },
          grid:  { display: false },
        },
      },
      plugins: {
        legend: { labels: { font: { size: 12, family: "Outfit" }, color: "#64748b", boxWidth: 12 } },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              return ` ${ctx.dataset.label}: ${ctx.parsed.y}/5`;
            },
          },
        },
      },
    },
  });
}

// ── Doughnut Chart: Matched / Weak / Missing ──────────────────────────────────
function drawDoughnutChart(doughnut) {
  if (doughnutChart) doughnutChart.destroy();

  doughnutChart = new Chart(document.getElementById("doughnutChart"), {
    type: "doughnut",
    data: {
      labels:   doughnut.labels,
      datasets: [{
        data:            doughnut.data,
        backgroundColor: doughnut.colors,
        borderWidth:     0,
        hoverOffset:     8,
      }],
    },
    options: {
      responsive:          true,
      maintainAspectRatio: false,
      cutout:              "68%",
      plugins: {
        legend: {
          position: "bottom",
          labels:   { font: { size: 11, family: "Outfit" }, color: "#64748b", boxWidth: 10, padding: 14 },
        },
      },
    },
  });
}

// ── Radar Chart: Overall Skill Shape ─────────────────────────────────────────
function drawRadarChart(charts) {
  if (radarChart) radarChart.destroy();

  radarChart = new Chart(document.getElementById("radarChart"), {
    type: "radar",
    data: {
      labels: charts.labels,
      datasets: [
        {
          label:           "Your Skills",
          data:            charts.yourLevels,
          backgroundColor: "rgba(79,70,229,0.15)",
          borderColor:     "#4f46e5",
          borderWidth:     2,
          pointBackgroundColor: "#4f46e5",
          pointRadius:     3,
        },
        {
          label:           "Required",
          data:            charts.requiredLevels,
          backgroundColor: "rgba(239,68,68,0.08)",
          borderColor:     "#ef4444",
          borderWidth:     2,
          borderDash:      [5, 4],
          pointBackgroundColor: "#ef4444",
          pointRadius:     2,
        },
      ],
    },
    options: {
      responsive:          true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0, max: 5,
          ticks:       { display: false },
          grid:        { color: "#e2e6f0" },
          angleLines:  { color: "#e2e6f0" },
          pointLabels: { color: "#64748b", font: { size: 10, family: "Outfit" } },
        },
      },
      plugins: {
        legend: { labels: { font: { size: 11, family: "Outfit" }, color: "#64748b", boxWidth: 10 } },
      },
    },
  });
}

// ── Comparison Table ──────────────────────────────────────────────────────────
function buildTable(skills) {
  const allSkills = [
    ...skills.matched.map(function(s) { return Object.assign({}, s, { status: "Matched" }); }),
    ...skills.weak.map(function(s)    { return Object.assign({}, s, { status: "Weak" });    }),
    ...skills.missing.map(function(s) { return Object.assign({}, s, { status: "Missing" }); }),
  ];

  const tbody = document.getElementById("skillTableBody");
  tbody.innerHTML = "";

  if (allSkills.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="loading-row">No data available</td></tr>`;
    return;
  }

  allSkills.forEach(function(skill) {
    const badgeCls  = skill.status === "Matched" ? "badge-green" : skill.status === "Weak" ? "badge-yellow" : "badge-red";
    const badgeIcon = skill.status === "Matched" ? "✓" : skill.status === "Weak" ? "~" : "✗";
    const levelDisplay = skill.yourLevel > 0 ? `${skill.yourLevel}/5` : "—";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><span class="skill-name-cell">${skill.skillName}</span></td>
      <td><span class="cat-badge">${skill.skillCategory}</span></td>
      <td><span class="level-cell">${levelDisplay}</span></td>
      <td><span class="level-cell">${skill.requiredLevel}/5</span></td>
      <td><span class="gap-cell">${skill.gap > 0 ? "-" + skill.gap : "—"}</span></td>
      <td><span class="badge ${badgeCls}">${badgeIcon} ${skill.status}</span></td>
    `;
    tbody.appendChild(row);
  });
}

// ── Recommendations ───────────────────────────────────────────────────────────
function buildRecommendations(recommendations) {
  const grid = document.getElementById("recGrid");
  grid.innerHTML = "";

  if (!recommendations || recommendations.length === 0) {
    grid.innerHTML = `<div class="empty-rec">🎉 Great job! No missing or weak skills for this internship.</div>`;
    return;
  }

  recommendations.forEach(function(rec) {
    const badgeCls = rec.status === "Weak" ? "badge-yellow" : "badge-red";
    const card = document.createElement("div");
    card.className = "rec-card";
    card.innerHTML = `
      <div class="rec-card-top">
        <span class="rec-skill-name">${rec.skillName}</span>
        <span class="badge ${badgeCls}">${rec.status} (${rec.yourLevel}/5 → ${rec.requiredLevel}/5)</span>
      </div>
      <div class="rec-what"><strong>What to learn:</strong> ${rec.whatToLearn}</div>
      <div class="rec-why">💡 ${rec.whyItMatters}</div>
      <div class="rec-course">
        <div>
          <div class="rec-course-name">${rec.suggestedCourse.name}</div>
          <div class="rec-platform">${rec.suggestedCourse.platform}</div>
        </div>
        <a href="${rec.suggestedCourse.url}" target="_blank" class="rec-link">View →</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// FALLBACK: Uses hardcoded demo data when the server is not running
// (for opening the HTML file directly in browser without Express)
// ─────────────────────────────────────────────────────────────────────────────
function useFallbackData() {
  const demoData = {
    student:    { id: 1, name: "Wasif Mahtab Hannan", department: "CSE", semester: 8 },
    internship: { id: 1, title: "Frontend Developer Intern", company: "TechCorp BD", location: "Dhaka", type: "On-site", description: "Build UIs with React and Tailwind CSS." },
    summary:    { totalRequired: 5, matchedCount: 3, weakCount: 1, missingCount: 1, readiness: 70 },
    skills: {
      matched: [
        { skillId: 1, skillName: "JavaScript",   skillCategory: "Programming", yourLevel: 4, requiredLevel: 4, gap: 0, status: "Matched" },
        { skillId: 3, skillName: "React",         skillCategory: "Framework",   yourLevel: 4, requiredLevel: 4, gap: 0, status: "Matched" },
        { skillId: 5, skillName: "Git",           skillCategory: "Tool",        yourLevel: 4, requiredLevel: 3, gap: 0, status: "Matched" },
      ],
      weak: [
        { skillId: 10, skillName: "CSS/Tailwind", skillCategory: "Styling",    yourLevel: 3, requiredLevel: 4, gap: 1, status: "Weak" },
      ],
      missing: [
        { skillId: 6, skillName: "REST APIs",    skillCategory: "Concept",    yourLevel: 0, requiredLevel: 3, gap: 3, status: "Missing" },
      ],
    },
    charts: {
      labels:         ["JavaScript", "React", "Git", "CSS/Tailwind", "REST APIs"],
      yourLevels:     [4, 4, 4, 3, 0],
      requiredLevels: [4, 4, 3, 4, 3],
      statusColors:   ["#22c55e", "#22c55e", "#22c55e", "#f59e0b", "#ef4444"],
      doughnut: { labels: ["Matched", "Weak", "Missing"], data: [3, 1, 1], colors: ["#22c55e", "#f59e0b", "#ef4444"] },
    },
    recommendations: [
      {
        skillName: "CSS/Tailwind", status: "Weak", yourLevel: 3, requiredLevel: 4, gap: 1,
        whatToLearn: "Tailwind utility classes, responsiveness, Flexbox, Grid",
        whyItMatters: "Professional UI design requires strong CSS skills",
        suggestedCourse: { name: "Tailwind CSS Full Course", platform: "YouTube – freeCodeCamp", url: "https://youtube.com" },
      },
      {
        skillName: "REST APIs", status: "Missing", yourLevel: 0, requiredLevel: 3, gap: 3,
        whatToLearn: "HTTP methods, status codes, JSON, API design patterns",
        whyItMatters: "Modern apps communicate via APIs — essential skill",
        suggestedCourse: { name: "REST API Design", platform: "Coursera", url: "https://coursera.org" },
      },
    ],
  };

  // Fill the selects with demo values
  const intSelect = document.getElementById("internshipSelect");
  if (intSelect.options.length === 0) {
    intSelect.innerHTML = `
      <option value="1">Frontend Developer Intern — TechCorp BD</option>
      <option value="2">Backend Developer Intern — DataMinds Ltd</option>
      <option value="3">Full-Stack Engineer Intern — AI Nexus</option>
    `;
  }

  renderDashboard(demoData);
}

// ── Start everything on page load ─────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", init);
