# InternTrack — Skill Gap Dashboard
## CSE471 System Analysis and Design | Group 08
### Module 1 — Member 4 | Wasif Mahtab Hannan (23301705)

---

## 📁 Complete Folder Structure

```
interntrack/
│
├── prisma/
│   ├── schema.prisma          ← Database models (Student, Skill, Internship...)
│   └── seed.js                ← Demo data (3 students, 3 internships, 11 skills)
│
├── src/
│   ├── controllers/
│   │   └── skillGapController.js   ← Core logic: skill gap calculation
│   └── routes/
│       └── skillGapRoutes.js       ← API endpoints
│
├── public/
│   ├── pages/
│   │   └── skill-gap.html     ← The dashboard webpage
│   ├── css/
│   │   └── skill-gap.css      ← All styling
│   └── js/
│       └── skill-gap.js       ← Frontend logic + Chart.js
│
├── server.js                  ← Express app entry point
├── package.json               ← Dependencies
├── .env.example               ← Environment variables template
└── README.md                  ← This file
```

---

## 🚀 Setup & Run (Step by Step)

### Step 1 — Install Node.js
Download from https://nodejs.org (choose LTS version)

### Step 2 — Install MySQL
Download MySQL Community Server from https://dev.mysql.com/downloads/mysql/
During setup, set a root password (remember it!)

### Step 3 — Create the database
Open MySQL Workbench or terminal and run:
```sql
CREATE DATABASE interntrack;
```

### Step 4 — Set up the project
Open VS Code, open the `interntrack` folder, then open a Terminal (Ctrl + `)

```bash
# Install all dependencies
npm install

# Copy the env file
cp .env.example .env
```

### Step 5 — Edit the .env file
Open `.env` and change the database password:
```
DATABASE_URL="mysql://root:YOURPASSWORD@localhost:3306/interntrack"
```

### Step 6 — Push the database schema
```bash
npx prisma db push
```
This creates all the tables in MySQL automatically.

### Step 7 — Seed demo data
```bash
npm run seed
```
This inserts 3 students, 3 internships, and 11 skills.

### Step 8 — Start the server
```bash
npm run dev
```

### Step 9 — Open the dashboard
Open your browser and go to:
```
http://localhost:3000/skill-gap
```

---

## 🌐 API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/internships` | List all internships |
| GET | `/api/students/:id` | Get a student's profile |
| GET | `/api/students/:studentId/skill-gap/:internshipId` | **Main endpoint — full skill gap analysis** |

### Sample API Response (`/api/students/1/skill-gap/1`):
```json
{
  "success": true,
  "data": {
    "student":    { "id": 1, "name": "Wasif Mahtab Hannan", "department": "CSE", "semester": 8 },
    "internship": { "id": 1, "title": "Frontend Developer Intern", "company": "TechCorp BD" },
    "summary": {
      "totalRequired": 5,
      "matchedCount":  3,
      "weakCount":     1,
      "missingCount":  1,
      "readiness":     70
    },
    "skills": {
      "matched": [ { "skillName": "JavaScript", "yourLevel": 4, "requiredLevel": 4, "status": "Matched" } ],
      "weak":    [ { "skillName": "REST APIs",  "yourLevel": 2, "requiredLevel": 3, "status": "Weak"    } ],
      "missing": [ { "skillName": "Docker",     "yourLevel": 0, "requiredLevel": 3, "status": "Missing" } ]
    },
    "charts": { "labels": [...], "yourLevels": [...], "requiredLevels": [...] },
    "recommendations": [ { "skillName": "Docker", "whatToLearn": "...", "suggestedCourse": {...} } ]
  }
}
```

---

## 📖 How the Skill Gap Logic Works

```
For each skill required by the internship:

  Student has skill AND level >= required  →  MATCHED  (1 point)
  Student has skill BUT level < required   →  WEAK     (0.5 point)
  Student does NOT have the skill          →  MISSING  (0 point)

Readiness % = (earned points / total required skills) × 100
```

---

## 🎨 What the Dashboard Shows

1. **Student + Internship card** — who is being analyzed and for which role
2. **Summary stat cards** — Readiness %, Matched, Weak, Missing counts
3. **Progress bar** — animated readiness visualization
4. **Bar Chart** — side-by-side level comparison for every skill
5. **Doughnut Chart** — proportion of matched / weak / missing
6. **Radar Chart** — overall skill shape comparison
7. **Comparison Table** — detailed row for every skill with badges
8. **Recommendations** — what to learn, why it matters, course links

---

## 🎤 How to Present This to Faculty

**Your opening line:**
> "My contribution is the Skill Gap Dashboard — the core analytical engine of our system. When a student selects an internship, my module fetches that internship's required skills from the database, compares them against the student's current skill levels, and computes an internship readiness score. The result is shown through three charts, a detailed table, and a personalized learning plan."

**Key points to highlight:**
- You designed the database schema for StudentSkill and InternshipSkillRequirement
- The readiness formula is your own design (1 pt / 0.5 pt / 0 pt weighting)
- The recommendation engine is dynamic — generated from skill gaps in real time
- The frontend consumes a clean REST API with structured JSON
- The fallback mode lets the dashboard work even without a backend (demo-ready)

**What makes your module stand out:**
- It is the most data-intensive feature in the project
- It produces actionable output (not just showing data — it guides the student)
- Three different chart types show different perspectives of the same data
- The API response format is designed to be chart-friendly (ready for Chart.js)

---

## 🔧 Open Without a Server (Demo Mode)

If you just want to show the UI without running Express + MySQL:
1. Go to `public/pages/skill-gap.html`
2. Double-click it to open in browser
3. It will automatically load demo data (the fallback function in `skill-gap.js`)

This is useful for quick demos or when MySQL is not available.
