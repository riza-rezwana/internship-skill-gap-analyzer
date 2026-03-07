const prisma = require("../config/prisma");

function calculateRating(durationMonths) {
  if (durationMonths >= 3) return 5;
  if (durationMonths === 2) return 3;
  if (durationMonths === 1) return 2;
  return 1;
}

const showCertificateForm = (req, res) => {
  res.render("certificateForm");
};

const showCertificateResult = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const certificate = await prisma.certificate.findUnique({
      where: { id }
    });

    if (!certificate) {
      return res.status(404).send("Certificate not found");
    }

    res.render("certificateResult", { certificate });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while loading the result");
  }
};

const uploadCertificate = async (req, res) => {
  try {
    const { studentName, companyName, durationMonths } = req.body;

    if (!req.file) {
      return res.status(400).send("Certificate file is required");
    }

    const months = parseInt(durationMonths);
    const rating = calculateRating(months);

    const certificate = await prisma.certificate.create({
      data: {
        studentName,
        companyName,
        certificateFile: `/uploads/${req.file.filename}`,
        durationMonths: months,
        experienceRating: rating
      }
    });

    res.render("loading", {
      redirectUrl: `/certificates/result/${certificate.id}`
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while uploading certificate");
  }
};

module.exports = {
  showCertificateForm,
  uploadCertificate,
  showCertificateResult
};