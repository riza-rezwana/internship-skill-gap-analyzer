require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const { engine } = require('express-handlebars');

const skillGapRoutes = require('./routes/skillGapRoutes');
const matchingRoutes = require('./routes/matchingRoutes');
const skillSuggestionsRoutes = require('./routes/skillSuggestions.routes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const matchingController = require('./controllers/matchingController');

const app = express();

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '../views/layouts'),
  partialsDir: path.join(__dirname, '../views/partials'),
  helpers: {
    eq: (a, b) => a === b,
    gte: (a, b) => Number(a) >= Number(b),
    gt: (a, b) => Number(a) > Number(b),
    lt: (a, b) => Number(a) < Number(b),
    lte: (a, b) => Number(a) <= Number(b),
    json: (value) => JSON.stringify(value),
  },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.render('dashboard', { title: 'Internship & Skill Analyzer', active: 'home' }));
app.get('/skill-gap', (req, res) => res.render('skill-gap', { title: 'Skill Gap Dashboard', active: 'skill-gap' }));
app.get('/matching', matchingController.getMatchingPage);
app.get('/matching/:id', matchingController.getMatchingPage);
app.get('/skill-suggestions', (req, res) => res.render('skill-suggestions', { title: 'Personalized Skill Suggestions', active: 'skill-suggestions' }));
app.get('/chatbot', (req, res) => res.render('chatbot', { title: 'AI Chatbot Assistant', active: 'chatbot' }));

app.use('/api/skill-gap', skillGapRoutes);
app.use('/api/matching', matchingRoutes);
app.use('/api/skill-suggestions', skillSuggestionsRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Internship & Skill Analyzer', version: '1.0.0' });
});

app.use((req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ success: false, message: 'API route not found.' });
  res.status(404).render('error', { title: 'Not Found', active: '', code: 404, message: 'Page not found.' });
});

app.use((err, req, res, next) => {
  console.error('[app error]', err);
  if (req.path.startsWith('/api/')) {
    return res.status(500).json({ success: false, message: 'Internal server error.', detail: process.env.NODE_ENV !== 'production' ? err.message : undefined });
  }
  res.status(500).render('error', { title: 'Error', active: '', code: 500, message: process.env.NODE_ENV !== 'production' ? err.message : 'Something went wrong.' });
});

module.exports = app;
