import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const transports = await prisma.transport.findMany();
    return res.status(200).json(transports);
  }
  return res.status(405).json({ message: "Method not allowed" });
}
