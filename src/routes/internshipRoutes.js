const express = require("express");
const router = express.Router();

const {
  getAllInternships,
  getInternshipById,
  filterInternships
} = require("../controllers/internshipController");

router.get("/", getAllInternships);
router.get("/filter", filterInternships);
router.get("/:id", getInternshipById);

module.exports = router;