
import { createTRPCRouter } from "~/server/api/trpc";
import { geoRouter } from "./routers/geo";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  geo: geoRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
