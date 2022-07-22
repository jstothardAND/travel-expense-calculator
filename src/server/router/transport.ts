import { createRouter } from "./context";

export const transportRouter = createRouter().query("getAll", {
  async resolve({ ctx }) {
    const transports = await ctx.prisma.transport.findMany();
    return transports;
  },
});
