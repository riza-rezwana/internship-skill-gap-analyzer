// app.js — M2F4 Skill-Based Internship Matching

// Load .env manually without dotenv package
const fs = require('fs');
const path = require('path');
try {
  const envFile = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
  envFile.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const idx = trimmed.indexOf('=');
    if (idx === -1) return;
    const key = trimmed.substring(0, idx).trim();
    const val = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, '');
    process.env[key] = val;
  });
} catch(e) {}

const express        = require('express');
const { engine }     = require('express-handlebars');

const matchingApiRoutes  = require('./src/routes/matching');
const matchingPageRoutes = require('./src/routes/matchingPages');

const app = express();

app.engine('hbs', engine({
  extname:       '.hbs',
  defaultLayout: 'main',
  layoutsDir:    path.join(__dirname, 'views/layouts'),
  helpers: {
    eq:  (a, b) => a === b,
    gte: (a, b) => a >= b,
    gt:  (a, b) => a > b,
    lt:  (a, b) => a < b,
    lte: (a, b) => a <= b,
  },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/internships', matchingApiRoutes);
app.use('/matching',        matchingPageRoutes);
app.get('/', (req, res) => res.redirect('/matching'));

app.use((req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, req, res, _next) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('\n✅ Server running at http://localhost:' + PORT);
  console.log('   Open: http://localhost:' + PORT + '/matching\n');
});
