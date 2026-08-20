# Zentrix Academy

Zentrix Academy is a production-ready Progressive Web App (PWA) for selling a premium digital marketing course. The platform combines a polished landing experience, secure registration and login, Paystack-based one-time enrollment, and a structured course player for lifetime-access learning.

## Project overview

This project is designed for Cloudflare Pages and Cloudflare Workers and uses:

- HTML5, CSS3, and vanilla JavaScript modules for the frontend
- Cloudflare Workers for authentication, session handling, payment initialization, and webhook processing
- Cloudflare D1 for relational data storage
- Service workers and a web app manifest for PWA installability
- Paystack Payment Pages with webhook verification for secure checkout

## Folder structure

- frontend: static HTML, CSS, and JavaScript assets
- backend: Cloudflare Worker and SQL schema
- assets: icons and imagery
- docs: deployment and maintenance guidance

## Local development

1. Open the project folder in a browser and serve the files locally with a static server.
2. Ensure the Worker routes are available under the `/api` path if you are testing with local proxying.
3. Use the browser’s developer tools to explore the app and verify the registration, login, and course views.

## Cloudflare deployment

### 1. Create the D1 database

1. Open the Cloudflare dashboard.
2. Create a D1 database called `zentrix-academy`.
3. Apply the schema from [backend/schema.sql](backend/schema.sql).

### 2. Configure Worker secrets

Set the following Worker environment variables:

- `PAYSTACK_SECRET_KEY`: your Paystack webhook secret
- `DB`: the D1 database binding name

### 3. Deploy the Worker

1. Create a Worker in Cloudflare.
2. Upload [backend/worker.js](backend/worker.js).
3. Bind the D1 database using the name `DB`.
4. Add the `PAYSTACK_SECRET_KEY` secret.

### 4. Connect Pages and Worker

1. Deploy the static files as a Cloudflare Pages project.
2. Point the frontend API calls to the Worker’s `/api` routes.
3. Configure the Pages project to serve the static files and the manifest correctly.

### 5. Configure Paystack

1. Create a Paystack account and get your public and secret keys.
2. Set the webhook URL to your Worker route `/api/payments/webhook`.
3. Ensure the webhook signature is validated in the Worker before processing payment events.

## Security notes

- Passwords are hashed with PBKDF2 before persistence.
- Sessions use HttpOnly cookies.
- The Worker uses a CSP header and basic XSS/CSRF safeguards.
- Webhook requests are verified using a Paystack signature check.

## Maintenance

- Update course content in [js/course-data.js](js/course-data.js).
- Add new lesson blocks to the structured data model for future content expansions.
- Extend the schema and Worker if you later add quizzes, certificates, or instructor dashboards.
