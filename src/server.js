const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const cors = require('cors');
const { engine } = require('express-handlebars');

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
const member3Routes = require('./routes/member3Routes');
const member4Routes = require('./routes/member4Routes');
///////
const express = require("express");
const path = require("path");
require("dotenv").config();


const certificateRoutes = require("./routes/certificateRoutes");
const externalJobsRoutes = require("./routes/externalJobsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/member4/layouts'),
  partialsDir: path.join(__dirname, 'views/member4/partials'),
  helpers: {
    eq: (a, b) => a === b,
    gte: (a, b) => Number(a) >= Number(b),
    gt: (a, b) => Number(a) > Number(b),
    lt: (a, b) => Number(a) < Number(b),
    lte: (a, b) => Number(a) <= Number(b),
    json: (value) => JSON.stringify(value),
  },
}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
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

// Member 3 integrated modules
app.use('/member3', member3Routes);

// Member 4 integrated modules
app.use('/member4', member4Routes);
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
