# Deployment guide

## Cloudflare Pages

1. Create a Pages project from the project root.
2. Set the build output directory to the root folder of the project.
3. Deploy the static site.
4. Ensure the manifest and service worker are served at the root path.

## Cloudflare Workers

1. Create a Worker and upload [backend/worker.js](../backend/worker.js).
2. Add a D1 database binding called `DB`.
3. Add the `PAYSTACK_SECRET_KEY` environment variable.
4. Route the Paths `/api/*` to the Worker.

## Cloudflare D1

1. Create a D1 database named `zentrix-academy`.
2. Apply [backend/schema.sql](../backend/schema.sql).
3. Confirm the tables `users`, `payments`, `sessions`, `lesson_progress`, `modules`, and `lessons` are present.

## Paystack webhook

1. In Paystack, create a webhook endpoint for the Worker route `/api/payments/webhook`.
2. Send the webhook secret to the Worker as `PAYSTACK_SECRET_KEY`.
3. Verify that the Worker receives and validates the `x-paystack-signature` header.
