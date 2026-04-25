const prisma = require('./src/config/prisma');

async function checkDb() {
  try {
    const total = await prisma.internship.count();
    const active = await prisma.internship.count({ where: { status: 'ACTIVE' } });
    
    console.log('Total internships:', total);
    console.log('Active internships:', active);
    
    if (active > 0) {
      const sample = await prisma.internship.findFirst({
        where: { status: 'ACTIVE' },
        include: { company: true }
      });
      console.log('Sample internship:', sample ? sample.title : 'None');
    }
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    process.exit(0);
  }
}

checkDb();
