# IDK.org - Project Structure

This document explains the organization of the IDK.org repository for the backend API, web interface, and mobile app.

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
│   │   ├── aiTutorService.js       # AI tutor communication
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
│   │   ├── services/               # API calls
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
│   │   ├── services/               # API calls
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
└── 📁 tests/                       # Test files
    ├── unit/                       # Unit tests
    ├── integration/                # Integration tests
    └── e2e/                        # End-to-end tests
```

---

## Directory Descriptions

### `/src` - Backend Source Code
The core backend API server. All business logic, database operations, and AI integration.

### `/frontend` - Web Application
React-based web interface for IDK.org accessed through browsers.

### `/mobile` - Mobile Application
React Native app for iOS and Android with same features as web, optimized for mobile.

### `/docs` - Documentation
Complete project documentation for developers.

### `/tests` - Test Suite
Unit, integration, and end-to-end tests for quality assurance.

---

## Architecture Overview

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

---

## Data Flow

1. **User Action** (Web/Mobile)
   - User takes quiz or interacts with tutor

2. **API Request**
   - Frontend sends request to Express API

3. **Backend Processing**
   - Controller receives and processes request
   - Service layer handles business logic
   - Database operations as needed

4. **AI Integration**
   - Claude API processes personalized responses
   - Learning recommendations generated

5. **Response**
   - Backend sends JSON response
   - Frontend displays to user

---

## Important Notes

- **Never commit .env file** - Use .env.example as template
- **Never commit node_modules/** - Listed in .gitignore
- **Frontend and Mobile** share the same backend API
- **Database** is centralized (MongoDB)
- **AI Integration** in backend for security and efficiency
