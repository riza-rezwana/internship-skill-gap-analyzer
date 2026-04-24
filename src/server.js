const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');

const homeRoutes = require('./routes/homeRoutes');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const companyRoutes = require('./routes/companyRoutes');
const internshipRoutes = require('./routes/internshipRoutes');
const applicationRoutes = require("./routes/applicationRoutes");
const { startDeadlineReminderJob } = require("./services/deadlineReminderService");
const companyStudentProfileRoutes = require("./routes/companyStudentProfileRoutes");
const careerRecommendationRoutes = require('./routes/careerRecommendationRoutes');
const careerReportRoutes = require('./routes/careerReportRoutes');
///////
const express = require("express");
const path = require("path");
require("dotenv").config();

console.log("DATABASE_URL =", process.env.DATABASE_URL);

const certificateRoutes = require("./routes/certificateRoutes");
const externalJobsRoutes = require("./routes/externalJobsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride('_method'));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.currentStudent = req.session.student || null;
  res.locals.currentCompany = req.session.company || null;
  next();
});

app.use('/', homeRoutes);
app.use('/', authRoutes);

app.use("/external-jobs", externalJobsRoutes);
app.use('/student', studentRoutes);
app.use('/student', careerRecommendationRoutes);
app.use('/student', careerReportRoutes);
////////////////

app.use('/company', companyRoutes);
app.use('/company/internships', internshipRoutes);

app.use("/certificates", certificateRoutes);
app.use("/applications", applicationRoutes);
app.use("/company/students", companyStudentProfileRoutes);


startDeadlineReminderJob();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
