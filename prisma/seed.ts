import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const formattedTransports = [
    {
      name: "Car",
      price: 0.45,
    },
    {
      name: "Motorcycle",
      price: 0.24,
    },
    {
      name: "Bicycle",
      price: 0.2,
    },
  ];

  const transports = await prisma.transport.createMany({
    data: formattedTransports,
  });
  console.log(transports);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
