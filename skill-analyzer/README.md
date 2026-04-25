# Internship & Skill Analyzer - Merged Project

This is the final unified Node.js + Express + Prisma project that merges four separate feature projects into one clean application.

**Database fix included:** this version does **not** require MySQL or any external database server. It uses a local SQLite database file at `prisma/dev.db`, and the demo database is already included in the project.

## Merged Features

1. **Module 1 Feature 4 - Skill Gap Dashboard**
   - Page: `/skill-gap`
   - API namespace: `/api/skill-gap/...`
   - Compares a student's current skills with internship requirements.

2. **Module 2 Feature 4 - Skill-Based Internship Matching**
   - Page: `/matching`
   - API namespace: `/api/matching/...`
   - Ranks students based on their skill match percentage for each internship.
   - Fixed to load from the included local SQLite demo database, with built-in demo fallback so the page does not crash if Prisma/database setup is incomplete.

3. **Module 3 Feature 7 - Personalized Skill Suggestions / Course Progress**
   - Page: `/skill-suggestions`
   - API namespace: `/api/skill-suggestions/...`
   - Suggests courses for skill gaps and tracks started/completed course progress.

4. **Module 3 Feature 8 - AI Chatbot Assistant**
   - Page: `/chatbot`
   - API namespace: `/api/chatbot/...`
   - Provides profile-aware internship, resume, course, skill progress, and study-plan help.
   - Works without an API key using local rule-based replies.
   - Optional OpenAI replies are enabled by setting `OPENAI_API_KEY`.

## Final Routes

### Pages

| Route | Purpose |
| --- | --- |
| `/` | Main dashboard with feature cards |
| `/skill-gap` | Skill Gap Dashboard |
| `/matching` | Skill-Based Internship Matching |
| `/skill-suggestions` | Personalized Skill Suggestions and Course Progress |
| `/chatbot` | AI Chatbot Assistant |

### APIs

| Namespace | Purpose |
| --- | --- |
| `/api/skill-gap/...` | Skill gap data and analysis |
| `/api/matching/...` | Internship matching JSON endpoints |
| `/api/skill-suggestions/...` | Skill suggestions and course progress |
| `/api/chatbot/...` | Chatbot messages, profile, suggestions, and history |
| `/api/health` | Health check |

## Easiest Run Steps

### 1. Install dependencies

```bash
npm install
```

The `postinstall` script automatically runs Prisma client generation.

### 2. Start the app

Development:

```bash
npm run dev
```

Production-style start:

```bash
npm start
```

Then open the URL printed in your terminal. By default it is:

```text
http://localhost:3000
```

If port `3000` is already busy, the app automatically tries the next available port, such as `3001`, and prints the correct URL in the terminal.

## Important Database Notes

This project now uses SQLite locally.

- The database file is included here: `prisma/dev.db`
- You do **not** need XAMPP, MySQL Workbench, phpMyAdmin, or a MySQL server.
- You do **not** need to create a database manually.
- You do **not** need to set `DATABASE_URL`.

If your old `.env` file still contains a MySQL `DATABASE_URL`, it is no longer used by the Prisma schema in this fixed version.

## If the Database File Is Deleted or You Want to Reset Data

Option A - Use Prisma to recreate and seed the SQLite database:

```bash
npm run setup
```

Option B - Force reset the database and seed fresh demo data:

```bash
npm run db:reset
```

Option C - Recreate the included demo SQLite file directly:

```bash
npm run db:local
```

`npm run db:local` uses Node's built-in SQLite module and recreates `prisma/dev.db` with demo data. It is useful when you want a quick local database without needing MySQL.

## Optional Environment File

The app can run without creating `.env`.

If you want to customize the port or add an OpenAI key, copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Then edit values such as:

```env
PORT=3001
OPENAI_API_KEY=""
```

## Demo Data

The included SQLite database already has sample data.

Use these sample IDs:

- Student 1: Frontend-focused profile
- Student 2: Backend-focused profile
- Student 3: Data-focused profile
- Student 4: Full-stack profile
- Student 5: Beginner profile
- Internship 1: Frontend Developer Intern
- Internship 2: Backend Developer Intern
- Internship 3: Data Analyst Intern
- Internship 4: Full Stack Web Developer Intern
- Internship 5: UI/UX Design Intern

## Matching Page Fix

The `/matching` page now implements the required module definition directly:

> Skill-Based Internship Matching ranks students based on their skill match percentage for each internship.

It reads internships, students, and skills from `prisma/dev.db`. If that local database cannot be opened, it falls back to built-in demo matching data instead of showing a 500 page.

## Common Fixes

### Prisma Client Not Generated

If you see an error about Prisma Client, run:

```bash
npx prisma generate
```

Then restart:

```bash
npm run dev
```

### Port Already in Use

If another app is using port `3000`, this project automatically tries the next available port.

You can also set a specific port in `.env`:

```env
PORT=3001
```

### Missing Tables or Empty Database

Run:

```bash
npm run setup
```

Then restart:

```bash
npm run dev
```

## What Was Cleaned and Unified

- Replaced multiple standalone servers with one central `server.js` and one Express app in `src/app.js`.
- Replaced multiple `package.json` files with one final `package.json`.
- Replaced multiple Prisma schemas with one unified `prisma/schema.prisma`.
- Fixed the database issue by switching the default setup from external MySQL to included local SQLite.
- Included a ready-to-use demo database at `prisma/dev.db`.
- Normalized model naming around one consistent Prisma client style: `student`, `skill`, `internship`, `studentSkill`, and related merged models.
- Converted mixed UI approaches into one shared Express Handlebars + Bootstrap 5 layout.
- Added one shared navbar, footer, color system, cards, buttons, typography, and responsive spacing.
- Added a main dashboard at `/` with clear access buttons for every merged feature.
- Namespaced all APIs to avoid route conflicts.
- Replaced duplicate seed flows with one `prisma/seed.js`.
- Removed duplicate servers, duplicate schemas, duplicate package files, and source `node_modules` from the final zip.

## Project Structure

```text
InternshipSkillAnalyzer_merged/
  server.js
  package.json
  .env.example
  README.md
  prisma/
    schema.prisma
    seed.js
    dev.db
  scripts/
    create-dev-db.js
  src/
    app.js
    config/
    controllers/
    middleware/
    routes/
    services/
  views/
    layouts/
    matching/
    *.hbs
  public/
    css/
    js/
```
