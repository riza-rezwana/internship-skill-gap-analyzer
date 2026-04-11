const prisma = require("../config/prisma");

const getAllInternships = async (req, res) => {
  try {
    const internships = await prisma.internship.findMany({
      orderBy: { createdAt: "desc" }
    });

    res.json({
      success: true,
      count: internships.length,
      data: internships
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch internships"
    });
  }
};

const getInternshipById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const internship = await prisma.internship.findUnique({
      where: { id }
    });

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Internship not found"
      });
    }

    res.json({
      success: true,
      data: internship
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch internship"
    });
  }
};

const filterInternships = async (req, res) => {
  try {
    const { field, location, mode } = req.query;

    const internships = await prisma.internship.findMany({
      where: {
        ...(field ? { field: { contains: field } } : {}),
        ...(location ? { location: { contains: location } } : {}),
        ...(mode ? { mode: { contains: mode } } : {})
      },
      orderBy: { createdAt: "desc" }
    });

    res.json({
      success: true,
      count: internships.length,
      data: internships
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to filter internships"
    });
  }
};

module.exports = {
  getAllInternships,
  getInternshipById,
  filterInternships
};