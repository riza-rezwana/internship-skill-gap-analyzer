// src/controllers/skillSuggestions.controller.js
const service = require("../services/skillSuggestions.service");

function getErrorStatus(message = "") {
  if (/invalid|not found|already completed|confirm|required/i.test(message)) {
    return 400;
  }
  return 500;
}

// GET /api/skill-suggestions/:studentId?internshipId=<id>
async function getSkillSuggestions(req, res) {
  try {
    const studentId = req.params.studentId;
    const internshipId = req.query.internshipId ?? null;
    const data = await service.getSkillSuggestions(studentId, internshipId);

    if (!data.length) {
      return res.json({
        success: true,
        message: "No skill gaps found. You meet all internship requirements!",
        data: [],
      });
    }

    return res.json({ success: true, count: data.length, data });
  } catch (err) {
    console.error("[getSkillSuggestions]", err.message);
    return res.status(getErrorStatus(err.message)).json({
      success: false,
      message: err.message || "Failed to fetch skill suggestions.",
    });
  }
}

// POST /api/skill-suggestions/:courseId/start   body: { studentId }
async function startCourse(req, res) {
  try {
    const courseId = req.params.courseId;
    const studentId = parseInt(req.body.studentId, 10);
    if (!studentId) {
      return res.status(400).json({ success: false, message: "studentId is required." });
    }

    const progress = await service.startCourse(studentId, courseId);
    return res.json({ success: true, message: "Course marked as In Progress.", data: progress });
  } catch (err) {
    console.error("[startCourse]", err.message);
    return res.status(getErrorStatus(err.message)).json({ success: false, message: err.message });
  }
}

// POST /api/skill-suggestions/:courseId/complete   body: { studentId, confirmed }
async function completeCourse(req, res) {
  try {
    const courseId = req.params.courseId;
    const studentId = parseInt(req.body.studentId, 10);
    const confirmed = req.body.confirmed === true || req.body.confirmed === "true";

    if (!studentId) {
      return res.status(400).json({ success: false, message: "studentId is required." });
    }
    if (!confirmed) {
      return res.status(400).json({ success: false, message: "Please confirm course completion." });
    }

    const result = await service.completeCourse(studentId, courseId, confirmed);
    return res.json({
      success: true,
      message: `Course completed! Your ${result.skillUpdate.skillName} score has been updated.`,
      data: result,
    });
  } catch (err) {
    console.error("[completeCourse]", err.message);
    return res.status(getErrorStatus(err.message)).json({ success: false, message: err.message });
  }
}

// GET /api/skill-suggestions/history/:studentId
async function getCourseHistory(req, res) {
  try {
    const studentId = req.params.studentId;
    const history = await service.getCourseHistory(studentId);
    return res.json({ success: true, count: history.length, data: history });
  } catch (err) {
    console.error("[getCourseHistory]", err.message);
    return res.status(getErrorStatus(err.message)).json({
      success: false,
      message: err.message || "Failed to fetch course history.",
    });
  }
}

module.exports = { getSkillSuggestions, startCourse, completeCourse, getCourseHistory };
