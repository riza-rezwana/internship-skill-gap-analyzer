# Internship Skill Gap Analyzer - Full Merged Project

This is the merged version of both uploaded projects.

## Included projects

1. `internship-skill-gap-analyzer-main` is the root Express/EJS/MySQL app.
2. `Skill Analyzer / InternshipSkillAnalyzer_merged` is preserved inside `skill-analyzer/` and mounted into the root app.

No source folders, views, controllers, routes, Prisma schemas, uploads, migrations, or database files were intentionally removed. The original uploaded zip files are also preserved in `merge-info/original_uploads/` for full reference. The root `package-lock.json` was moved to `merge-info/package-lock_project2_original.json` because the merged package now has additional dependencies from both projects.

## Database setup

The two projects use conflicting Prisma model names and different database providers. They are kept separate so they do not overwrite each other.

- Root app database: MySQL/MariaDB using `prisma/schema.prisma`.
- Skill analyzer module database: SQLite using `skill-analyzer/prisma/dev.db` and `skill-analyzer/prisma/schema.prisma`.

## Install and run

```bash
npm install
npm run prisma:generate:main
npm run prisma:generate:skill
npm start
```

## Root app database

Create a MySQL/MariaDB database named `internship_skill_gap_analyzer`, then edit `.env` if your database credentials are different.

```bash
npm run db:push
npm start
```

## Skill analyzer SQLite database

```bash
npm run db:setup:skill
npm run check:skill-db
```

## Routes

Root app routes are unchanged, including `/`, `/student/...`, `/company/...`, `/certificates`, `/applications`, and `/external-jobs`.

Skill analyzer routes are available at:

- `/skill-analyzer`
- `/skill-gap`
- `/matching`
- `/skill-suggestions`
- `/chatbot`
- `/api/skill-gap/...`
- `/api/matching/...`
- `/api/skill-suggestions/...`
- `/api/chatbot/...`
- `/api/health`

More details are in `MERGE_NOTES.md`.
