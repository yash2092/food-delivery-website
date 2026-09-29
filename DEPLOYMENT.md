# Deployment

## Frontend on Vercel

1. Import the repository in Vercel and set the project Root Directory to `frontend`.
2. Set `VITE_API_BASE_URL` to the public Render service URL, for example `https://food-delivery-api.onrender.com`.
3. Deploy or redeploy the frontend after the Render service is available.

Vercel uses `frontend/vercel.json` to serve React Router routes correctly. If the API URL is not set or the backend is unavailable, restaurant and dish browsing uses the bundled sample data.

## Backend on Render

1. Create a Blueprint from this repository using the root `render.yaml`, or create a Docker web service with `backend` as its root directory.
2. Wait for the service to finish deploying, then copy its public URL into Vercel's `VITE_API_BASE_URL` setting.
3. Redeploy the Vercel frontend so the API URL is included in its build.

The backend currently uses an in-memory H2 database. Seed restaurants are recreated at startup, but user accounts, OTPs, and saved addresses are not durable across restarts. Add a persistent database before relying on this deployment for real user data.