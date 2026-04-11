const prisma = require('../config/prisma');

const getCreateInternship = (req, res) => {
  res.render('internship-create', { title: 'Post Internship' });
};

const createInternship = async (req, res) => {
  try {
    const {
      title,
      department,
      location,
      workMode,
      durationMonths,
      stipend,
      roleDescription,
      learningOutcomes,
      numberOfPositions,
      requiredSkills,
      minimumDegreeLevel,
      preferredFieldOfStudy,
      minimumGpaPercentage,
      graduationYearRange,
      additionalPreferences
    } = req.body;

    if (!title || !roleDescription) {
      req.flash('error_msg', 'Role title and description are required.');
      return res.redirect('/company/internships/create');
    }

    await prisma.internship.create({
      data: {
        companyId: req.session.company.id,
        title,
        department,
        location,
        workMode,
        durationMonths: durationMonths ? parseInt(durationMonths) : null,
        stipend: stipend ? parseFloat(stipend) : null,
        roleDescription,
        learningOutcomes,
        numberOfPositions: numberOfPositions ? parseInt(numberOfPositions) : 1,
        requiredSkills,
        minimumDegreeLevel,
        preferredFieldOfStudy,
        minimumGpaPercentage,
        graduationYearRange,
        additionalPreferences,
        status: 'ACTIVE'
      }
    });

    req.flash('success_msg', 'Internship posted successfully.');
    res.redirect('/company/dashboard');
  } catch (error) {
    console.error(error);
    req.flash('error_msg', 'Failed to post internship.');
    res.redirect('/company/internships/create');
  }
};

const getCompanyInternships = async (req, res) => {
  try {
    const internships = await prisma.internship.findMany({
      where: { companyId: req.session.company.id },
      orderBy: { createdAt: 'desc' }
    });

    res.render('internship-list', {
      title: 'My Internships',
      internships
    });
  } catch (error) {
    console.error(error);
    req.flash('error_msg', 'Failed to load internships.');
    res.redirect('/company/dashboard');
  }
};

const getStudentInternships = async (req, res) => {
  try {
    const internships = await prisma.internship.findMany({
      where: { status: 'ACTIVE' },
      include: {
        company: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.render('student-internships', {
      title: 'Internship Opportunities',
      internships
    });
  } catch (error) {
    console.error(error);
    req.flash('error_msg', 'Failed to load internships.');
    res.redirect('/student/dashboard');
  }
};

const getInternshipDetails = async (req, res) => {
  try {
    const internshipId = parseInt(req.params.id);

    const internship = await prisma.internship.findUnique({
      where: { id: internshipId },
      include: {
        company: true
      }
    });

    if (!internship) {
      req.flash('error_msg', 'Internship not found.');
      return res.redirect('/student/internships');
    }

    res.render('student-internship-details', {
      title: internship.title,
      internship
    });
  } catch (error) {
    console.error(error);
    req.flash('error_msg', 'Failed to load internship details.');
    res.redirect('/student/internships');
  }
};

module.exports = {
  getCreateInternship,
  createInternship,
  getCompanyInternships,
  getStudentInternships,
  getInternshipDetails
};