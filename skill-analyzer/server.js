require('dotenv').config();
const app = require('./src/app');

const DEFAULT_PORT = 3000;
const requestedPort = Number.parseInt(process.env.PORT || String(DEFAULT_PORT), 10);
const startPort = Number.isInteger(requestedPort) && requestedPort > 0 ? requestedPort : DEFAULT_PORT;
const allowPortFallback = process.env.AUTO_PORT_FALLBACK !== 'false';
const MAX_PORT_ATTEMPTS = 10;

function startServer(port, attempt = 1) {
  const server = app.listen(port, () => {
    const actualPort = server.address().port;
    console.log(`Internship & Skill Analyzer running at http://localhost:${actualPort}`);
    if (actualPort !== startPort) {
      console.log(`Note: port ${startPort} was busy, so the app started on port ${actualPort}.`);
    }
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      if (allowPortFallback && attempt < MAX_PORT_ATTEMPTS) {
        console.warn(`Port ${port} is already in use. Trying port ${port + 1}...`);
        return startServer(port + 1, attempt + 1);
      }

      console.error(`Port ${port} is already in use.`);
      console.error('Close the other app using that port, or set a different PORT value in .env.');
      console.error('Example: PORT=3001');
      process.exit(1);
    }

    console.error('Server failed to start:', error);
    process.exit(1);
  });
}

startServer(startPort);
