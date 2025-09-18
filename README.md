# Hono + React Router + Vite + ShadCN UI + D1 on Cloudflare Workers

This project is a full-stack SaaS web application example for Cloudflare Workers.

It is based on the Cloudflare
template: https://github.com/cloudflare/templates/tree/main/react-router-hono-fullstack-template

I have added

- D1 database integration with example migrations

## Features

- ⚡ Full-stack app on Cloudflare Workers
- 🔁 Hono for backend API endpoints
- 🧭 React Router for client-side routing
- 🎨 ShadCN UI with Tailwind CSS for components and styling
- 🧱 File-based route separation
- 🚀 Zero-config Vite build for Workers
- 🛠️ Automatically deploys with Wrangler
- 🔎 Built-in Observability to monitor your Worker
- 🗄️ D1 database integration with example migrations

## Tech Stack

- **Frontend**: React + React Router + ShadCN UI
    - SPA architecture powered by React Router
    - Includes accessible, themeable UI from ShadCN
    - Styled with utility-first Tailwind CSS
    - Built and optimized with Vite

- **Backend**: Hono on Cloudflare Workers
    - API routes defined and handled via Hono in `/api/*`
    - Supports REST-like endpoints, CORS, and middleware

- **Deployment**: Cloudflare Workers via Wrangler
    - Vite plugin auto-bundles frontend and backend together
    - Deployed worldwide on Cloudflare’s edge network

## Resources

- 🧩 [Hono on Cloudflare Workers](https://hono.dev/docs/getting-started/cloudflare-workers)
- 📦 [Vite Plugin for Cloudflare](https://developers.cloudflare.com/workers/vite-plugin/)
- 🛠 [Wrangler CLI reference](https://developers.cloudflare.com/workers/wrangler/)
- 🎨 [shadcn/ui](https://ui.shadcn.com)
- 💨 [Tailwind CSS Documentation](https://tailwindcss.com/)
- 🔀 [React Router Docs](https://reactrouter.com/)

## Setup Steps

1. Install dependencies:

```bash
npm install
```

2. Set up your environment variables:

```bash
# Create a .dev.vars file for local development
cp .dev.vars.example .dev.vars
```

Add your API token:

```
API_TOKEN=your_token_here
```

_An API token is required to authenticate requests to the API. You should generate this before trying to run the project
locally or deploying it._

3. Create a [D1 database](https://developers.cloudflare.com/d1/get-started/) with the name
   `cloudflare-react-router-hono-fullstack-template-lab-db`:

```bash
  npx wrangler d1 create cloudflare-react-router-hono-fullstack-template-lab-db
```

...and update the `database_id` field in `wrangler.json` with the new database ID.

If needed, you can list your databases and their IDs like this:

```bash
  npx wrangler d1 list
```

4. Run the database migrations locally:

```bash
  npm run db:migrate
```

Run the development server:

```bash
  npm run dev
```

## Database Migrations

You can create a new database migration like this, using the wrangler CLI and the database name from above:

```bash
  npx wrangler d1 migrations create cloudflare-react-router-hono-fullstack-template-lab-db "Create initial database"
```

Then, edit the file in the migrations folder to add your SQL schema changes.

After that, run the migrations locally like this:

```bash
  npm run db:migrate
```

To run migrations remotely on the Cloudflare Workers D1 database, use `npm run db:migrate:remote`.

Wrangler generates TypeScript types for your infrastructure and database schema, to update them run:

```bash
  npm run cf-typegen
```

