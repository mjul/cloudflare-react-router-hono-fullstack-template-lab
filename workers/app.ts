import {Hono} from "hono";
import {createRequestHandler} from "react-router";

const app = new Hono();

// This is the main entry point for the Cloudflare Worker, the back-end app.
// Add more routes here

app.get("/api/documents", async (c) => {
    // We use a prepared statement, even if we just get everything, but you can use ? named parameters here and .bind() to avoid SQL injection
    // the DB property is a named D1 binding defined in the `wrangler.jsonc` file (you can change its name there)
    const {results} = await c.env.DB.prepare("SELECT id, title, [date], description, sort_index, created_at FROM documents ORDER BY sort_index",)
        .run();
    const documentsResult = results.map((doc) => {
        return ({
            id: doc.id,
            title: doc.title,
            date: doc.date,
            description: doc.description,
            sortIndex: doc.sort_index,
            metadata: {createdAt: doc.created_at}
        })
    });
    return c.json(
        {
            type: 'documents',
            data: documentsResult
        });
});

app.get("*", (c) => {
    const requestHandler = createRequestHandler(
        () => import("virtual:react-router/server-build"),
        import.meta.env.MODE,
    );

    return requestHandler(c.req.raw, {
        cloudflare: {env: c.env, ctx: c.executionCtx},
    });
});

export default app;
