import { Hono } from "hono";
import { createRequestHandler } from "react-router";

const app = new Hono();

// This is the main entry point for the Cloudflare Worker, the back-end app.
// Add more routes here

app.get("*", (c) => {
  const requestHandler = createRequestHandler(
    () => import("virtual:react-router/server-build"),
    import.meta.env.MODE,
  );

  return requestHandler(c.req.raw, {
    cloudflare: { env: c.env, ctx: c.executionCtx },
  });
});

export default app;
