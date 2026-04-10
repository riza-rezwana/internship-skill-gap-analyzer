const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');

const homeRoutes = require('./routes/homeRoutes');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');

///////
const express = require("express");
const path = require("path");
require("dotenv").config();

const certificateRoutes = require("./routes/certificateRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//////
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
  next();
});
app.use('/', homeRoutes);
app.use('/', authRoutes);
app.use('/student', studentRoutes);
////////////////





app.use("/certificates", certificateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});