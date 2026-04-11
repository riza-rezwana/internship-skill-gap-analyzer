# Module 2, Feature 4 — Skill-Based Internship Matching

**Assigned to:** Member 4  
**Project:** Internship + Skill Gap Analyzer for Students  
**Stack:** Express.js · Prisma · MySQL · Bootstrap · Handlebars

---

## What this feature does

Ranks students by how well their skills match an internship's requirements.  
A company opens an internship page and sees all students sorted from highest to lowest match %.

---

## Files in this folder

```
prisma/
  schema.prisma          ← Add these models to your group's schema

src/
  services/
    matchingService.js   ← Core algorithm (pure logic, no Express here)
  controllers/
    matchingController.js ← Handles HTTP requests, calls service
  routes/
    matching.js          ← JSON API routes (/api/internships/:id/matches)
    matchingPages.js     ← HTML page routes (/matching/:id)
  utils/
    matchingHelpers.js   ← Small helper functions (colors, labels, medals)

views/
  matching/
    index.hbs            ← The full UI page (Bootstrap, merge-friendly)

seed/
  matchingSeed.js        ← Demo data for this feature only

MOUNT_IN_APP.js          ← Copy-paste snippet for your group's app.js
TESTING_GUIDE.md         ← Manual test checklist + example API response
```

---

## Algorithm

```
matchPercentage = (matched required skills / total required skills) × 100
```

- Skills compared **case-insensitively** (`React.JS` == `react.js`)
- **Duplicates** removed before comparison
- Internship with **0 required skills** → everyone gets 100%
- Student with **0 skills** → 0% on any skill-required internship

---

## Assumptions

1. `Student` and `Internship` models may already exist in your group's schema — **merge** the `skills`/`requiredSkills` relations, don't duplicate the whole model
2. Skills are stored as a normalized string (lowercase) in a shared `Skill` table
3. This feature does not handle auth/login — it assumes the page is already accessible
4. The matching page uses Handlebars (`express-handlebars`) matching whatever the group uses
5. Bootstrap 5 is available globally via CDN or the group's layout

---

## Quick start (standalone test)

```bash
# 1. Schema
npx prisma db push

# 2. Seed
node seed/matchingSeed.js

# 3. Mount routes (see MOUNT_IN_APP.js), then:
npm run dev

# 4. Open
# HTML: http://localhost:3000/matching
# JSON: http://localhost:3000/api/internships/1/matches
```

---

## Endpoints

| Method | URL | Returns |
|--------|-----|---------|
| GET | `/matching` | Redirect to first internship |
| GET | `/matching/:id` | HTML ranked student page |
| GET | `/api/internships/:id/matches` | JSON all students ranked |
| GET | `/api/internships/:id/top-matches?limit=5` | JSON top N only |
