# Internship + Skill Gap Analyzer — Merged Main

This is the merged GitHub-ready main project containing:

- **Member 3:** `SKILL PROGRESS TRACKER`
  - Student Skill Progress Tracker
  - Skill Demand Analytics Dashboard
  - Location-Based Internship Filtering
  - Internship Completion Certificate Generator
- **Member 4:** `SKILL ANALYZER`
  - Skill Gap Analysis
  - Skill-Based Internship Matching
  - Personalized Skill Suggestions
  - AI Chatbot Assistant

The project now uses **one Express server, one Prisma schema, one SQLite database, and one seed file**.

## Quick start

```bash
npm install
cp .env.example .env
npm run db:setup
npm run dev
```

Open:

```text
http://localhost:3000
```

The home page has two separate module bars/buttons:

```text
SKILL PROGRESS TRACKER  -> /member3
SKILL ANALYZER          -> /member4
```

## Demo data

The seed file creates demo students, companies, skills, internships, course suggestions, Member 3 progress data, and Member 4 analyzer data.

Demo password for seeded student/company accounts:

```text
demo123
```

Useful seeded student emails:

```text
ayesha.frontend@student.com
siam.backend@student.com
nabila.data@student.com
wasif.fullstack@student.com
sara.beginner@student.com
```

## Database

The database is configured in `.env.example` as:

```env
DATABASE_URL="file:./dev.db"
```

Running `npm run db:setup` will generate Prisma Client, push the unified schema, and run `prisma/seed.js`.

## Important merged files

- `src/server.js` — one main Express app
- `src/routes/member3Routes.js` — Member 3 module routes
- `src/routes/member4Routes.js` — Member 4 module routes
- `prisma/schema.prisma` — one unified Prisma schema
- `prisma/seed.js` — one idempotent seed file for both members
- `src/views/home.ejs` — unified landing page matching the provided dark purple design
- `src/public/member3/member3-theme.css` and `src/public/member4/css/app.css` — consistent UI styling

## Notes for GitHub upload

Do not commit `node_modules/`, generated database files such as `prisma/dev.db`, or your local `.env` if it contains private values.
