# Deploy guide

This puts IDK.org on the internet for free: the database on MongoDB Atlas, the API on Render, and the web app on GitHub Pages. It takes about 30 minutes. Do the parts in order, and keep a notes file open, because you will copy a few values between sites.

You will collect three values:

- `MONGODB_URI`: the database connection string (part 1)
- the Render address of your API, like `https://idk-org-api.onrender.com` (part 2)
- `WEB_URL`: always `https://mrbrown098.github.io` (the address of your GitHub account's web pages, with nothing after `.io`)

Free plans are for testing and hobby projects. Nothing here needs a credit card as far as we know, but check each site's page if it asks.

## Part 1: the database (MongoDB Atlas)

1. Go to mongodb.com/atlas and sign up (the Google button is fine).
2. Create a new cluster and choose the **M0 Free** option. Pick any provider and a region close to Render's Singapore region, for example Singapore. Click Create.
   You should see your cluster listed with a "Free" label.
3. When it asks you to set up a database user, enter a username such as `idkapi` and a password. Use only letters and numbers in the password, so you do not have to deal with special characters. Write both down. Click Create.
4. Open **Network Access** in the left menu, click **Add IP Address**, choose **Allow access from anywhere** (it fills in `0.0.0.0/0`) and confirm. Render's free plan has no fixed address, so this is needed.
   You should see `0.0.0.0/0` in the list with the status Active.
5. Go back to your cluster and click **Connect**, then **Drivers**. Copy the connection string. It looks like:
   `mongodb+srv://idkapi:<db_password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
6. Edit the copy in your notes:
   - Replace `<db_password>` with your real password. Remove the `<` and `>` too.
   - Add `/idk-org` right after `.mongodb.net`, before the `?`.
   It should now look like:
   `mongodb+srv://idkapi:YourPassword123@cluster0.abcde.mongodb.net/idk-org?retryWrites=true&w=majority&appName=Cluster0`
   This is your `MONGODB_URI`. Keep it private. Anyone with it can read your database.

## Part 2: the API (Render)

1. Go to render.com and sign up with your GitHub account.
2. Click **New +**, then **Blueprint**. Connect the `IDK-org` repository when asked.
3. Render reads the `render.yaml` file in the repo and shows a service called `idk-org-api` on the free plan. It will ask you for two values:
   - `MONGODB_URI`: paste the string from Part 1.
   - `WEB_URL`: type `https://mrbrown098.github.io` exactly. No slash at the end, nothing after `.io`.
   `JWT_SECRET` is made for you automatically. You do not need to type it.
4. Click **Apply** (or **Deploy Blueprint**) and wait. The first build takes a few minutes. When the service shows **Live**, it is running.
5. Copy the address shown at the top of the service page. It ends in `.onrender.com`. This is your API address.
6. Open `<your API address>/health` in your browser.
   You should see something like `{"status":"healthy", ...}`.

Things to know:

- The free plan goes to sleep after 15 minutes without visitors. The next visit takes about a minute to wake it up. That is normal.
- If the service shows **Failed**, open **Logs**. A message about `MONGODB_URI` or the database means the connection string or the Network Access step (Part 1, step 4) needs another look.

## Part 3: the web app (GitHub Pages)

1. In the `IDK-org` repository on GitHub, open `docs/config.js` and click the pencil icon to edit.
2. Replace the address between the quotes with your API address from Part 2, so the file reads:
   `window.IDK_CONFIG = { API_URL: 'https://idk-org-api.onrender.com' };`
   (Use your real address. No slash at the end.) Commit the change.
3. Go to the repository **Settings**, then **Pages**. Under "Build and deployment", set the source to **Deploy from a branch**, pick the branch `main` and the folder `/docs`, then Save.
4. Wait a minute or two and refresh the Pages settings. It shows the live address: `https://mrbrown098.github.io/IDK-org/`.

## Part 4: check that everything works

Open `https://mrbrown098.github.io/IDK-org/` on your phone or computer. The first request may take a minute while the API wakes up. Then:

1. Register a new account. You should land on the quiz.
2. Answer the 10 questions. You should see your result.
3. Tap **Chat with the study coach** and send a message. You should get a reply with tips.
4. Open **Menu**, log out, and log in again. You should go straight to the coach.

If something is wrong:

| What you see | Likely cause |
| --- | --- |
| The page loads but register or login says it failed, or nothing happens | `WEB_URL` in Render is not exactly `https://mrbrown098.github.io`, or `API_URL` in `docs/config.js` is wrong. Fix it and redeploy. |
| A message about waking up the server | Normal on the free plan. Wait up to a minute. |
| The API page shows an error or "Not Found" | Open Render **Logs**. Check `MONGODB_URI` and the Atlas Network Access step. |

## Later: the Android app

The Android app needs a file called `assetlinks.json` at the very top of the website address, which a project page like `mrbrown098.github.io/IDK-org/` cannot provide. When you get to the Android step, create a repository named exactly `mrbrown098.github.io`, put the contents of `docs/` in it, and use that address instead. Nothing in the steps above needs to change before then.
