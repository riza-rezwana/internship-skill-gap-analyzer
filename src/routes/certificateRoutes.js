const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const {
  showCertificateForm,
  uploadCertificate
} = require("../controllers/certificateController");

router.get("/", showCertificateForm);
router.post("/upload", upload.single("certificate"), uploadCertificate);

module.exports = router;