# IDK.org - Setup Guide

Complete step-by-step instructions to set up IDK.org locally for development.

---

## Prerequisites

Before you start, make sure you have these installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local or MongoDB Atlas account) - [Setup](https://www.mongodb.com/try/download/community)
- **Git** (for version control) - [Download](https://git-scm.com/)
- **Text Editor** (VS Code recommended) - [Download](https://code.visualstudio.com/)

---

## Step 1: Clone or Download the Repository

### Option A: Using Git (recommended)
```bash
git clone https://github.com/yourusername/idk-org.git
cd idk-org
```

### Option B: Download ZIP
- Go to GitHub repository
- Click **Code** → **Download ZIP**
- Extract the ZIP file
- Open terminal in the extracted folder

---

## Step 2: Install Backend Dependencies

```bash
npm install
```

This installs all required Node.js packages from `package.json`.

**What gets installed:**
- Express (web server)
- MongoDB driver (database)
- JWT (authentication)
- Claude API client
- CORS (cross-origin requests for web/mobile)
- And more...

---

## Step 3: Set Up Environment Variables

### Create `.env` file

Copy `.env.example` and rename it to `.env`:

```bash
cp .env.example .env
```

### Edit `.env` with your values

Open `.env` in your text editor and fill in:

```
PORT=5000
NODE_ENV=development
SERVER_URL=http://localhost:5000

# MongoDB - choose one:

# Option A: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/idk-org

# Option B: MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/idk-org?retryWrites=true&w=majority

DATABASE_NAME=idk-org

# Claude API - Get from https://console.anthropic.com
CLAUDE_API_KEY=sk-ant-v3-your_actual_key_here

JWT_SECRET=your_super_secret_key_make_it_long_and_random
JWT_EXPIRY=7d

WEB_URL=http://localhost:3000
MOBILE_URL=idk://app
```

**Important:**
- ⚠️ Never commit `.env` to GitHub
- ⚠️ Keep API keys secret
- ✅ Different keys for development and production

---

## Step 4: Set Up MongoDB

### Option A: Local MongoDB (easiest for development)

1. **Install MongoDB Community** - [Guide](https://docs.mongodb.com/manual/installation/)

2. **Start MongoDB server:**

   **On Mac:**
   ```bash
   brew services start mongodb-community
   ```

   **On Windows:**
   - MongoDB installs as a service, should start automatically
   - Or search "Services" and start "MongoDB"

   **On Linux:**
   ```bash
   sudo systemctl start mongod
   ```

3. **Verify it's running:**
   ```bash
   mongo
   # or
   mongosh
   ```

### Option B: MongoDB Atlas (Cloud - recommended for production)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Add it to `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/idk-org
   ```

---

## Step 5: Get Claude API Key

1. Go to [Anthropic Console](https://console.anthropic.com)
2. Sign up or log in
3. Navigate to **API Keys**
4. Create a new API key
5. Copy it and paste into `.env`:
   ```
   CLAUDE_API_KEY=sk-ant-v3-your_key_here
   ```

---

## Step 6: Start the Backend Server

```bash
npm start
```

**Expected output:**
```
🚀 IDK.org server running on http://localhost:5000
📚 Ready to revolutionize learning...
```

**Test it's working:**
- Open browser: `http://localhost:5000`
- Should see: `{"message":"IDK.org API is running","version":"0.1.0","status":"online"}`

---

## Step 7: Test the API

### Using a tool like Postman or Thunder Client:

**Test Quiz Endpoint:**
- **Method:** GET
- **URL:** `http://localhost:5000/api/quiz`
- **Response:** Should return quiz info

---

## Development Workflow

### Daily Development Process

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Make code changes** in the `/src` folder

3. **Server automatically restarts** (with nodemon)

4. **Test your changes:**
   - Use Postman or similar tool
   - Check terminal for errors

5. **Commit to GitHub:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

---

## Folder Structure (Quick Reference)

After setup, your folder should look like:

```
idk-org/
├── node_modules/          # Installed dependencies (gitignored)
├── src/
│   ├── config/            # Configuration (coming next)
│   ├── routes/            # API routes (coming next)
│   ├── controllers/       # Business logic (coming next)
│   ├── models/            # Database schemas (coming next)
│   ├── services/          # AI & utilities (coming next)
│   └── middleware/        # Middleware (coming next)
├── frontend/              # Web app (coming next)
├── mobile/                # Mobile app (coming next)
├── .env                   # Your API keys (NEVER upload!)
├── .env.example           # Template (reference only)
├── .gitignore            # Files to exclude
├── package.json          # Dependencies
├── server.js             # Main entry point
└── README.md             # Project info
```

---

## Troubleshooting

### "npm: command not found"
- Node.js not installed
- [Download and install Node.js](https://nodejs.org/)

### "Cannot find module 'express'"
- Run `npm install` in the correct folder

### "MongoDB connection failed"
- MongoDB not running
- Check if MongoDB server is started
- Verify MONGODB_URI in .env is correct

### "CLAUDE_API_KEY is invalid"
- API key not set in .env
- API key is incorrect
- Get a new one from Anthropic Console

### "Port 5000 already in use"
- Another app is using port 5000
- Change PORT in .env to 5001, 5002, etc.

### "CORS error"
- Frontend/Mobile trying to access API
- Make sure CORS is enabled in server.js
- Check WEB_URL and MOBILE_URL in .env

---

## Next Steps

Once setup is complete:

1. ✅ Backend is running
2. ⏳ Create authentication routes (Day 2)
3. ⏳ Build quiz module (Day 3)
4. ⏳ Integrate AI tutor (Day 4)
5. ⏳ Frontend setup (Day 5)

---

## Getting Help

**Issues with setup?**
- Check error messages in terminal
- Review this guide again
- See troubleshooting section above

**Questions about architecture?**
- Read `PROJECT_STRUCTURE.md`
- Check `README.md` for overview

---

## Important Commands

```bash
# Install dependencies (one time)
npm install

# Start server
npm start

# Stop server
Ctrl + C

# Check Node version
node --version

# Check npm version
npm --version

# See all available scripts
cat package.json
```

---

**You're all set!** 🎉

Your IDK.org backend is ready for development. Next, we'll build the core modules.
