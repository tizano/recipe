import { PrismaClient } from '@prisma/client';

import { usersData } from './seed/users';

const prisma = new PrismaClient();

async function runSeeders() {
  // Users
  const tutu = await prisma.user.createMany({ data: usersData });
  console.log(tutu);
}
runSeeders()
  .catch(async (e) => {
    console.error(`There was an error while seeding: ${e}`);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });
