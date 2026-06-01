# IDK.org - Project Structure

This document explains how the IDK.org repository is organized for the backend API, web interface, and mobile app.

---

## Overall Structure

```
idk-org/
│
├── 📄 README.md                    # Project overview
├── 📄 LICENSE                      # MIT License
├── 📄 package.json                 # Node.js dependencies
├── 📄 .env.example                 # Environment variables template
├── 📄 .gitignore                   # Files to exclude from Git
├── 📄 server.js                    # Main backend server entry point
│
├── 📁 src/                         # Source code directory
│   │
│   ├── 📁 config/                  # Configuration files
│   │   ├── database.js             # MongoDB connection
│   │   ├── jwt.js                  # JWT authentication setup
│   │   └── env.js                  # Environment variables loader
│   │
│   ├── 📁 routes/                  # API routes/endpoints
│   │   ├── auth.js                 # User login, signup, profiles
│   │   ├── quiz.js                 # Quiz questions and answers
│   │   ├── tutor.js                # AI tutor endpoints
│   │   ├── learning.js             # Learning progress and recommendations
│   │   └── user.js                 # User profile management
│   │
│   ├── 📁 controllers/             # Business logic (handles requests)
│   │   ├── authController.js       # Login/signup logic
│   │   ├── quizController.js       # Quiz logic
│   │   ├── tutorController.js      # AI tutor logic
│   │   ├── learningController.js   # Learning progress logic
│   │   └── userController.js       # User profile logic
│   │
│   ├── 📁 models/                  # Database schemas
│   │   ├── User.js                 # User schema
│   │   ├── Quiz.js                 # Quiz results schema
│   │   ├── LearningSession.js      # Learning session schema
│   │   ├── Ideotype.js             # User's learning profile schema
│   │   └── Progress.js             # Learning progress schema
│   │
│   ├── 📁 middleware/              # Express middleware
│   │   ├── auth.js                 # JWT authentication
│   │   ├── errorHandler.js         # Error handling
│   │   ├── validator.js            # Request validation
│   │   └── logger.js               # Logging middleware
│   │
│   ├── 📁 services/                # Business services
│   │   ├── aiTutorService.js       # AI tutor communication with Claude
│   │   ├── quizService.js          # Quiz processing
│   │   ├── userService.js          # User operations
│   │   ├── ideotypeService.js      # Learning profile analysis
│   │   └── emailService.js         # Email notifications
│   │
│   ├── 📁 utils/                   # Utility functions
│   │   ├── constants.js            # App constants
│   │   ├── helpers.js              # Helper functions
│   │   ├── validators.js           # Input validation
│   │   └── formatters.js           # Data formatting
│   │
│   └── 📁 logs/                    # Application logs (gitignored)
│
├── 📁 frontend/                    # Web interface (React)
│   ├── src/
│   │   ├── components/             # React components
│   │   ├── pages/                  # Page components
│   │   ├── services/               # API calls to backend
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── styles/                 # CSS/styling
│   │   ├── utils/                  # Frontend utilities
│   │   └── App.js                  # Main App component
│   ├── public/                     # Static files
│   ├── package.json                # Frontend dependencies
│   └── .env.example                # Frontend environment variables
│
├── 📁 mobile/                      # Mobile app (React Native)
│   ├── src/
│   │   ├── screens/                # App screens
│   │   ├── components/             # Reusable components
│   │   ├── navigation/             # Navigation setup
│   │   ├── services/               # API calls to backend
│   │   ├── hooks/                  # Custom hooks
│   │   ├── styles/                 # StyleSheet definitions
│   │   └── utils/                  # Mobile utilities
│   ├── ios/                        # iOS specific files
│   ├── android/                    # Android specific files
│   ├── app.json                    # App configuration
│   └── package.json                # Mobile dependencies
│
├── 📁 docs/                        # Documentation
│   ├── API.md                      # API documentation
│   ├── ARCHITECTURE.md             # Architecture details
│   ├── SETUP.md                    # Setup instructions
│   └── CONTRIBUTING.md             # Contribution guidelines
│
└── 📁 tests/                       # Test files (coming later)
    ├── unit/                       # Unit tests
    ├── integration/                # Integration tests
    └── e2e/                        # End-to-end tests
```

---

## Directory Descriptions

### `/src` - Backend Source Code
The core backend API server. All business logic, database operations, and AI integration happens here.

### `/frontend` - Web Application
React-based web interface. Users access IDK.org from their browsers here.

### `/mobile` - Mobile Application
React Native app for iOS and Android. Same features as web, optimized for mobile.

### `/docs` - Documentation
All project documentation for developers, including API specs and setup guides.

### `/tests` - Test Suite
Unit tests, integration tests, and end-to-end tests (added in Phase 2).

---

## Architecture Flow

```
┌─────────────────┬──────────────────┐
│   Web Browser   │  Mobile App      │
│    (React)      │  (React Native)  │
└────────┬────────┴────────┬─────────┘
         │                  │
         └──────────┬───────┘
                    │
            ┌───────▼────────┐
            │  Express API   │
            │  (Node.js)     │
            └───────┬────────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
   ┌────▼──┐  ┌────▼────┐  ┌──▼────────┐
   │MongoDB│  │Claude AI│  │Services   │
   │(Data) │  │(Tutor)  │  │(Email,etc)│
   └───────┘  └─────────┘  └───────────┘
```

### Data Flow

1. **User Action** (Web/Mobile)
   - User takes quiz or asks for tutoring

2. **API Request**
   - Frontend sends request to Express API

3. **Backend Processing**
   - Controller receives request
   - Service/middleware processes logic
   - Database operations if needed

4. **AI Integration** (if needed)
   - Call Claude API for intelligent responses
   - Get personalized teaching recommendations

5. **Response**
   - Backend sends JSON response
   - Frontend displays to user

---

## Phase-Based Development

### Phase 1 (Current - Q2 2026)
- ✅ Backend API core structure
- ✅ User authentication
- ✅ Quiz module
- ✅ Basic AI tutor
- ✅ Web frontend (React)

### Phase 2 (Q3 2026)
- Mobile app (React Native)
- Advanced analytics
- Social features

### Phase 3 (Q4 2026)
- Institutional partnerships
- Course libraries
- Gamification

---

## Key Files by Purpose

### Getting Started
- `README.md` - Start here
- `package.json` - Install dependencies
- `.env.example` - Setup your API keys
- `server.js` - Run the backend

### Backend Logic
- `src/routes/` - Define API endpoints
- `src/controllers/` - Handle business logic
- `src/models/` - Define database schemas
- `src/services/` - Integrate with Claude AI

### Frontend
- `frontend/src/pages/` - User-facing screens
- `frontend/src/services/` - API calls

### Mobile
- `mobile/src/screens/` - Mobile screens
- `mobile/src/services/` - API calls (same as frontend)

---

## Next Steps

We'll create each folder and file incrementally:

**Week 1:**
- ✅ Backend structure and config
- ✅ User authentication
- ✅ Quiz module

**Week 2:**
- ✅ AI tutor integration
- ✅ Learning progress tracking

**Week 3:**
- ✅ Web frontend

**Week 4:**
- ✅ Mobile app setup

---

## Important Notes

- **Never commit .env file** - Use .env.example as template
- **Never commit node_modules/** - Listed in .gitignore
- **Frontend and Mobile** are separate but share the same backend API
- **Database** is centralized (MongoDB) for all platforms
- **AI Integration** happens only in backend for security and cost efficiency

---

For detailed setup, see `docs/SETUP.md` (coming next)
