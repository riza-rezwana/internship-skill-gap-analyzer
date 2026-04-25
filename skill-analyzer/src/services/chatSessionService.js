const prisma = require('../config/prisma');

async function getOrCreateSession(studentId) {
  const active = await prisma.chatSession.findFirst({
    where: { studentId, isActive: true },
    orderBy: { lastActive: 'desc' },
  });
  if (active) return active;
  return prisma.chatSession.create({ data: { studentId } });
}

async function saveMessagePair(sessionId, userMessage, botReply, intent) {
  await prisma.chatMessage.createMany({
    data: [
      { sessionId, sender: 'user', message: userMessage, intent },
      { sessionId, sender: 'bot', message: botReply, intent },
    ],
  });
  await prisma.chatSession.update({ where: { id: sessionId }, data: { isActive: true } });
}

async function getChatHistory(studentId) {
  return prisma.chatSession.findMany({
    where: { studentId },
    include: { messages: { orderBy: { createdAt: 'asc' } } },
    orderBy: { lastActive: 'desc' },
  });
}

async function clearChatHistory(studentId) {
  const sessions = await prisma.chatSession.findMany({ where: { studentId }, select: { id: true } });
  const ids = sessions.map((s) => s.id);
  if (ids.length) await prisma.chatMessage.deleteMany({ where: { sessionId: { in: ids } } });
  await prisma.chatSession.deleteMany({ where: { studentId } });
  return { deletedSessions: ids.length };
}

module.exports = { getOrCreateSession, saveMessagePair, getChatHistory, clearChatHistory };
