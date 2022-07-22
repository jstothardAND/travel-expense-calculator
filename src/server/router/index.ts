// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { transportRouter } from "./transport";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("transport.", transportRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
