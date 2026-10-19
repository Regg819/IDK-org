# Deploy Guide

## 1. MongoDB Atlas free M0 cluster
- Sign in to MongoDB Atlas and create a new free M0 cluster.
- Add a database user with readWrite access.
- In Network Access, allow connections from `0.0.0.0/0`.
- Click **Connect**, choose **Connect your application**, and copy the connection string.
- Replace the `<password>` placeholder and set the database name to `idk-org`.
- The final URI will look like `mongodb+srv://<user>:<password>@cluster0.mongodb.net/idk-org?retryWrites=true&w=majority`.

## 2. Generate JWT secret
```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```
- Copy the printed string. It will be used as `JWT_SECRET`.

## 3. Render.com free web service
- Log in to Render.com.
- Click **New** → **Web Service**.
- Connect the service to the GitHub repository `mrbrown098/IDK-org`.
- Choose **Node** runtime.
- Set **Build Command** to `npm ci` and **Start Command** to `npm start`.
- Set **Health Check Path** to `/health`.
- Add environment variables:
  - `MONGODB_URI` – the connection string from step 1.
  - `JWT_SECRET` – the secret from step 2.
  - `WEB_URL` – `https://mrbrown098.github.io` (origin only, no path, no trailing slash).
- Keep **Sync** set to *false* for all env vars.
- Deploy. The free plan sleeps after 15 minutes idle; the first request may take about a minute.

## 4. Verify health endpoint
- Open `https://<render-service>.onrender.com/health` in a browser.
- You should see a JSON response like `{"status":"healthy", ...}`.

## 5. Host static assets for Android app
- Create a new public repository on GitHub named exactly `mrbrown098.github.io`.
- Clone it locally and copy the contents of the `docs/` folder into the repository root.
- Commit and push to the `main` branch.
- In GitHub Settings → Pages, set **Source** to `main` and the folder to `/` (root).
- After GitHub Pages builds, the site will be available at `https://mrbrown098.github.io/`.
- Edit `docs/config.js` (or the equivalent in the repo) and set `API_URL` to the Render service URL.

## 6. Smoke test the live site
- Open the deployed site.
- Register a new user.
- Complete the quiz, view the result.
- Open the tutor chat, send a message, and receive a response.
- Use the menu to log out, then log back in.
- Ensure all steps work without errors.
