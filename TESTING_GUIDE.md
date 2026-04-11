============================================================
FILE: TESTING_GUIDE.md
Feature: Module 2, Feature 4 — Skill-Based Internship Matching
============================================================

## Setup (once)

1. Add schema models to prisma/schema.prisma
   (copy from prisma/schema.prisma in this folder)

2. Push schema to DB:
   npx prisma db push

3. Seed M2F4 data:
   node seed/matchingSeed.js

4. Mount routes in your app.js:
   (see MOUNT_IN_APP.js)

5. Start server:
   npm run dev


## Manual Test Checklist

### API Tests (use browser or Postman/Thunder Client)

[ ] GET /api/internships/1/matches
    Expected: 200, JSON with rankedStudents array sorted by matchPercentage desc

[ ] GET /api/internships/1/top-matches?limit=3
    Expected: 200, JSON with at most 3 students

[ ] GET /api/internships/999/matches
    Expected: 404, { success: false, error: "Internship #999 not found" }

[ ] GET /api/internships/abc/matches
    Expected: 400, { success: false, error: "Invalid internship ID" }

[ ] GET /api/internships/5/matches        (internship with no required skills)
    Expected: all students have matchPercentage: 100


### UI Tests

[ ] Open http://localhost:3000/matching
    Expected: redirects to /matching/1, shows ranked table

[ ] Use the internship dropdown — select internship 2
    Expected: page reloads, new rankings shown

[ ] Click "Strong ≥75%" filter button
    Expected: only rows with matchPercentage >= 75 visible

[ ] Click "Low <25%" filter button
    Expected: only rows with matchPercentage < 25 visible

[ ] Type "Riza" in search box
    Expected: only Rezwana Rouf Riza's row visible

[ ] Check that student with NO skills (Abdul Karim) shows 0% with all skills in "Missing"

[ ] Check that the algorithm explainer box is visible at bottom of page


### Edge Case Verification

[ ] Internship #5 (no required skills):
    Every student should show matchPercentage: 100
    matchedSkills: [], missingSkills: []

[ ] Student "Abdul Karim" (no skills) on any skill-required internship:
    matchPercentage: 0, matchedSkills: []

[ ] Skill name casing: if a student has "JavaScript" and internship requires "javascript"
    They should still match (case-insensitive normalization)


============================================================
EXAMPLE API RESPONSE
GET /api/internships/1/matches
============================================================

{
  "success": true,
  "internship": {
    "id": 1,
    "title": "Full Stack Web Developer Intern",
    "companyName": "TechCorp Bangladesh",
    "requiredSkills": [
      { "skill": { "id": 1, "name": "javascript" } },
      { "skill": { "id": 2, "name": "react.js" } },
      { "skill": { "id": 3, "name": "node.js" } },
      { "skill": { "id": 4, "name": "express.js" } },
      { "skill": { "id": 7, "name": "mysql" } },
      { "skill": { "id": 11, "name": "git" } },
      { "skill": { "id": 9, "name": "html/css" } }
    ]
  },
  "rankedStudents": [
    {
      "rank": 1,
      "studentId": 1,
      "studentName": "Tayeba Tabassum Mridula",
      "department": "CSE",
      "internshipId": 1,
      "internshipTitle": "Full Stack Web Developer Intern",
      "matchPercentage": 85.7,
      "matchedCount": 6,
      "requiredCount": 7,
      "matchedSkills": ["javascript", "react.js", "node.js", "express.js", "git", "html/css"],
      "missingSkills": ["mysql"],
      "explanation": "Strong match — 6/7 skills present. Missing: mysql."
    },
    {
      "rank": 2,
      "studentId": 3,
      "studentName": "Md Nayeem Shahriar",
      "department": "CSE",
      "internshipId": 1,
      "internshipTitle": "Full Stack Web Developer Intern",
      "matchPercentage": 71.4,
      "matchedCount": 5,
      "requiredCount": 7,
      "matchedSkills": ["javascript", "node.js", "express.js", "mysql", "git"],
      "missingSkills": ["react.js", "html/css"],
      "explanation": "Good match — 5/7 skills present. Missing: react.js, html/css."
    },
    {
      "rank": 6,
      "studentId": 6,
      "studentName": "Abdul Karim",
      "department": "CSE",
      "internshipId": 1,
      "internshipTitle": "Full Stack Web Developer Intern",
      "matchPercentage": 0,
      "matchedCount": 0,
      "requiredCount": 7,
      "matchedSkills": [],
      "missingSkills": ["javascript", "react.js", "node.js", "express.js", "mysql", "git", "html/css"],
      "explanation": "No match — none of the 7 required skills found on profile."
    }
  ],
  "stats": {
    "totalStudents": 6,
    "perfectMatch": 0,
    "strongMatch": 1,
    "goodMatch": 2,
    "partialMatch": 1,
    "lowMatch": 2,
    "averageMatch": 42.3
  }
}
