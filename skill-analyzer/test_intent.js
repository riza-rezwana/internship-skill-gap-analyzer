const { detectIntent } = require('./src/services/intentService');
const prisma = require('./src/config/prisma');

async function test() {
  console.log('Intent for "Find internships that match me":', detectIntent('Find internships that match me'));
  
  const internships = await prisma.internship.findMany({
    where: { status: 'ACTIVE' },
    take: 5,
  });
  
  console.log('Number of active internships:', internships.length);
  if (internships.length > 0) {
    console.log('First internship:', internships[0]);
  }
  
  process.exit(0);
}

test().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
