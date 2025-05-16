import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (!globalForPrisma.prisma) globalForPrisma.prisma = prisma;

export { prisma };
