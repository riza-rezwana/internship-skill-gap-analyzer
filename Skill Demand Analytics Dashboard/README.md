# Module 2 (Member 3): Skill Demand Analytics Dashboard
## Internship + Skill Gap Analyzer for Students — InternIQ

---

## 🎯 What This Module Does

The **Skill Demand Analytics Dashboard** is a data-driven analytics feature that answers one central question:

> "Which skills do employers want the most — and how demanding are those requirements?"

It aggregates data from all internship postings in the system and presents:
- **Top in-demand skills** ranked by frequency across postings
- **Demand by category** (Frontend, Backend, DevOps, Data, Soft Skills)
- **Average required proficiency level** per skill
- **Trending skills** by combined demand × difficulty score
- **Per-internship skill breakdown** with visual level indicators
- **Student-facing insights** derived from the aggregated data

---

## 🗂 Folder Structure

```
module2-member3/
├── prisma/
│   ├── schema.prisma       ← Database models
│   └── seed.js             ← Sample data (8 internships, 15 skills, 5 students)
├── src/
│   ├── controllers/
│   │   └── analyticsController.js  ← All business logic & queries
│   └── routes/
│       └── analyticsRoutes.js      ← Express API endpoints
├── public/
│   └── index.html          ← Full dashboard (HTML + Chart.js + inline CSS/JS)
├── server.js               ← Express app entry point
├── package.json
├── .env.example
└── README.md
```

---

## 🔌 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/analytics/overview` | Summary stats (counts, top skill, category breakdown) |
| GET | `/api/analytics/top-skills?limit=10&category=Frontend` | Skills ranked by demand count |
| GET | `/api/analytics/by-category` | Demand grouped by skill category |
| GET | `/api/analytics/trending` | Skills ranked by trend score (demand × avg level) |
| GET | `/api/analytics/internship-skills/:id` | Skill requirements for one internship |
| GET | `/api/analytics/all-internships` | All internship listings |

---

## 🚀 Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment
```bash
cp .env.example .env
# Edit .env and set your MySQL DATABASE_URL
```

### 3. Run Prisma migrations
```bash
npx prisma migrate dev --name init
```

### 4. Seed the database
```bash
node prisma/seed.js
```

### 5. Start the server
```bash
npm run dev        # development (nodemon)
npm start          # production
```

### 6. Open browser
```
http://localhost:3000
```

---

## 🌐 Deploy to Render

1. Push code to GitHub
2. Create a **Web Service** on Render
3. Set **Build Command**: `npm install && npx prisma generate && npx prisma migrate deploy && node prisma/seed.js`
4. Set **Start Command**: `npm start`
5. Add environment variable: `DATABASE_URL` from your Render MySQL instance

---

## 📊 Charts Used

| Chart | Type | Library | Purpose |
|-------|------|---------|---------|
| Top Skills | Horizontal Bar | Chart.js | Visual ranking of demand count |
| Demand by Category | Doughnut | Chart.js | Category breakdown |
| Trending Skills | Radar | Chart.js | Trend score + avg level overlay |
| Avg Required Level | Vertical Bar | Chart.js | Proficiency depth per skill |

---

## 🎤 How to Present This Module

### Your Opening Line
> "My module is the analytics engine of the system. While other modules show individual student gaps, mine answers a bigger question: what does the market actually want? I aggregate all internship skill requirements and turn them into actionable insights."

### What to Highlight to Faculty
1. **Real database aggregation** — not hardcoded data; uses `groupBy`, `_count`, `_avg` via Prisma
2. **4 different chart types** — each serving a distinct analytical purpose
3. **Dynamic filtering** — category filter pills re-fetch and re-render charts live
4. **Trend scoring formula** — `trendScore = demandCount × avgRequiredLevel` (custom metric you invented)
5. **Student-facing insights** — the dashboard isn't just for admin; it guides students on what to learn

### Why This Module Stands Out
- It's the only module with a **multi-chart analytics dashboard**
- It introduces a **custom trend score** metric (shows you went beyond requirements)
- It feeds data that other modules (like Member 4's skill gap analysis) can use
- Clean dark-mode UI looks like a real product, not a student project

---

## 👤 Your Contribution Statement

> "I designed and implemented Module 2: the Skill Demand Analytics Dashboard. This includes the Prisma schema extensions for skill and internship data, six backend API endpoints with aggregation logic, and the complete frontend dashboard with four Chart.js visualizations and live category filtering."

---

*Built for: Internship + Skill Gap Analyzer | CSE System Analysis & Design Project*
