# Architecture notes

The application is intentionally split into three layers:

1. Frontend: static assets and PWA experience served from Cloudflare Pages.
2. API layer: Cloudflare Worker routes for auth, session management, and payment/webhook handling.
3. Data layer: Cloudflare D1 tables that store users, payments, sessions, lesson progress, and course data.

The curriculum is stored as structured JSON in [js/course-data.js](../js/course-data.js), which makes it easy to add modules, lessons, and rich lesson blocks later.
