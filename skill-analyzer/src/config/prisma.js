const { PrismaClient } = require('../../generated/p1-client');

const prisma = global.__internshipSkillAnalyzerPrisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  global.__internshipSkillAnalyzerPrisma = prisma;
}

module.exports = prisma;
