# 🎓 Student Skill Progress Tracker
### Module 3 — Internship + Skill Gap Analyzer for Students

A full-stack web app that tracks how students' skills improve over time, visualizes learning progress with interactive charts, and provides personalized insights.

---

## 📁 Folder Structure

```
skill-tracker/
├── prisma/
│   ├── schema.prisma       # Database models
│   └── seed.js             # Sample data
├── src/
│   ├── server.js           # Express entry point
│   ├── routes/
│   │   └── students.js     # API route definitions
│   └── controllers/
│       └── studentController.js  # Business logic
├── public/
│   ├── index.html          # Student selection page
│   └── dashboard.html      # Main skill dashboard
├── .env.example            # Environment variable template
├── render.yaml             # Render.com deployment config
└── package.json
```

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone <your-repo>
cd skill-tracker
npm install
```

### 2. Set Up Database
```bash
cp .env.example .env
# Edit .env — add your MySQL DATABASE_URL
```

### 3. Run Migrations & Seed
```bash
npm run db:push    # Creates tables
npm run db:seed    # Loads sample data
```

### 4. Start Server
```bash
npm run dev        # Development (with auto-reload)
npm start          # Production
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | All students |
| GET | `/api/students/:id` | Single student |
| GET | `/api/students/:id/skills` | Student's skills |
| GET | `/api/students/:id/progress` | Full dashboard data |
| POST | `/api/students/:id/complete-course` | Mark course complete |

### Sample API Response — `/api/students/1/progress`
```json
{
  "success": true,
  "data": {
    "student": { "id": 1, "name": "Alice Rahman", "major": "Computer Science" },
    "summary": { "totalSkills": 8, "avgLevel": 3.3, "totalCompleted": 3, "mostImproved": "JavaScript" },
    "skills": [
      { "name": "HTML", "level": 5, "icon": "🌐", "category": "Frontend" },
      { "name": "JavaScript", "level": 4, "icon": "⚡", "category": "Programming" }
    ],
    "completedCourses": [...],
    "availableCourses": [...],
    "charts": {
      "barChartData": { "labels": ["HTML","JS",...], "data": [5,4,...] },
      "radarChartData": { "labels": [...], "data": [...] },
      "lineChartData": { "JavaScript": [{"date":"2024-01-01","level":1}, ...] }
    },
    "insights": [
      "🚀 Your JavaScript skill improved by 3 levels — great momentum!",
      "⚠️ Your weakest skill is Python (Level 1)."
    ]
  }
}
```

---

## ☁️ Deploy to Render

1. Push code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your GitHub repo
4. Add environment variable: `DATABASE_URL` (use Render's free MySQL or PlanetScale)
5. Deploy! The `render.yaml` handles build commands automatically.

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express.js |
| ORM | Prisma |
| Database | MySQL |
| Frontend | Vanilla HTML/CSS/JS |
| Charts | Chart.js 4 |
| Fonts | Syne + DM Sans (Google Fonts) |
| Deployment | Render.com |

---

## 🎤 Presentation Guide (Member 3)

### Your Contribution
You built **Module 1 — Student Skill Progress Tracker**, which is the data layer and visualization engine of the entire system.

### What to Say
> "My module tracks how a student's skills improve over time. I designed the database with 6 normalized models including a SkillProgressHistory table that records every level-up event. The backend API computes real-time stats like average skill level and most-improved skill. The dashboard renders three Chart.js visualizations: a bar chart for current levels, a radar chart for skill profile, and a line chart showing growth month by month. Students can mark courses as completed directly from the dashboard, which triggers the skill level to increase and logs the event to history."

### Features That Stand Out
- ✅ **Live chart updates** — complete a course and charts re-render instantly
- ✅ **Automated insights** — system identifies weakest skill and recommends next course
- ✅ **Progress history** — SkillProgressHistory logs every change for trend analysis
- ✅ **RESTful API** — clean JSON responses, easy to integrate with other modules
- ✅ **Responsive design** — works on mobile and desktop
