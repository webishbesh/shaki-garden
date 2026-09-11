<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/46ae3681-7f8e-4823-bc6c-8f44192aa19d

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Backend and owner dashboard

The application now includes an Express + SQLite backend. `npm run dev` starts both the API on port 4000 and Vite on port 3000. Orders are written to `data/shakii-garden.sqlite` through `POST /api/orders`; the owner dashboard reads restaurant-scoped aggregates from `GET /api/owner/dashboard` and receives live updates through SSE.

Set `SESSION_SECRET` in production. The seeded owner access uses the profile credentials configured in the application and is validated by the backend session, not only by the browser.

For production, build the frontend and start the server with:

`npm run build`

`npm start`
