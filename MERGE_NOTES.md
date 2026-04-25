# Merge Notes

This folder merges both uploaded projects into one runnable Node/Express project.

## What was merged

- Root app: original `internship-skill-gap-analyzer-main` project.
- Mounted module: original `Skill Analyzer` / `InternshipSkillAnalyzer_merged` project in `skill-analyzer/`.
- Project 2 uploads, Prisma migrations, EJS views, routes, controllers, services, and public files are preserved.
- Project 1 SQLite database, Prisma schema, seed, Handlebars views, routes, controllers, services, public JS/CSS, and utility scripts are preserved.

## Database conflict handling

The two projects had incompatible Prisma models with the same model names, especially `studentSkill`.
To avoid data/model conflicts and keep everything runnable:

- Project 2 keeps the root Prisma/MySQL database in `prisma/schema.prisma`.
- Project 1 keeps its own SQLite database in `skill-analyzer/prisma/dev.db`.
- Project 1 uses a separate generated Prisma client in `skill-analyzer/generated/p1-client`.

## Routes

Project 2 routes remain as originally placed, including `/`, `/student/...`, `/company/...`, `/certificates`, `/applications`, and `/external-jobs`.

Project 1 routes are available at:

- `/skill-analyzer` for the Project 1 dashboard alias
- `/skill-gap`
- `/matching`
- `/skill-suggestions`
- `/chatbot`
- `/api/skill-gap/...`
- `/api/matching/...`
- `/api/skill-suggestions/...`
- `/api/chatbot/...`
- `/api/health`

## Run

```bash
npm install
npm run prisma:generate:main
npm run prisma:generate:skill
npm start
```

For Project 1 SQLite demo data:

```bash
npm run db:setup:skill
npm run check:skill-db
```

For Project 2 MySQL/MariaDB, create the database named `internship_skill_gap_analyzer`, update `.env` if needed, then run:

```bash
npm run db:push
npm start
```
