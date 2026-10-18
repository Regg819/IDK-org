# Project Status

Last verified: 2026-10-17, against `Regg819/IDK-org` `main` at commit `4896c2b` (includes the fix-paths, env/secrets and test-setup work). Anything merged after that commit, such as a quiz or tutor backend, is not covered here and may make parts of "Documented but NOT implemented" out of date.

This file separates what was actually checked from what is only documented. If something is not listed under "Working now", assume it is unverified.

---

## Working now (verified)

- `npm install` succeeds from a clean checkout (252 packages).
- `npm start` boots the server and serves `GET /` and `GET /health`.
- The server exits immediately with a clear error when `JWT_SECRET` is missing. In production it also rejects placeholder values and secrets shorter than 32 characters.
- The server exits with code 1 and a database connection error when MongoDB is unreachable.
- Auth tokens use second-based `iat`/`exp` and expire 7 days after issue (previously they effectively never expired).
- Protected routes return 401 with no token, a garbage token, and a token signed with a different secret.
- The 8 database-free tests pass (`tests/health-and-tokens.test.js`).
- The real `User` model's email validation accepts `.info`, `.academy` and similar addresses and rejects malformed ones (checked directly, without a database).

### Not yet verified

- **Register, login and profile have not been run against a real MongoDB.** They are implemented and mounted at `/api/auth/*`, but the environment used for this check had no MongoDB and could not download one.
- The 15 database tests in `tests/auth.test.js` passed only against a throwaway fake `User` model, which checks the test logic and the route/controller wiring but not Mongoose itself. They need to be run on a machine that can download a `mongod` binary: `npm test`.
- What was observed with no database: `POST /api/auth/register` returned HTTP 500 after a 10 second Mongoose buffering timeout, while `GET /` and `GET /health` kept working until the server gave up on the database and exited.

---

## Documented but NOT implemented

### Endpoints in API.md

| Documented | Status |
|---|---|
| `POST /auth/register`, `POST /auth/login`, `POST /auth/logout` | Implemented |
| `GET /user/profile`, `PUT /user/profile` | Exists, but at `/api/auth/profile` (docs use a different path) |
| `POST /auth/refresh-token` | Missing |
| `GET /user/settings`, `PUT /user/settings` | Missing |
| `GET /quiz/questions`, `POST /quiz/submit`, `GET /quiz/result` | Missing |
| `POST /tutor/chat`, `GET /tutor/history`, `POST /tutor/subject` | Missing |
| `GET /learning/progress`, `POST /learning/session`, `PUT /learning/session/:id`, `GET /learning/recommendations` | Missing |

Also not implemented from API.md: the documented rate limits (100 and 1000 requests/hour, 100 tutor chats/day) and the `X-Request-ID` / `X-Response-Time` response headers.

### Structure described in PROJECT_STRUCTURE.md

- `frontend/` (React) and `mobile/` (React Native): do not exist.
- `docs/`: does not exist.
- `src/services/`, `src/middleware/`, `src/utils/`: do not exist. Auth middleware currently lives in `src/config/jwt.js`.
- Models: only `User` exists. `Quiz`, `LearningSession`, `Ideotype` and `Progress` do not.
- `tests/unit`, `tests/integration`, `tests/e2e`: not split this way; tests are flat files in `tests/`.

### Product features in README.md

The 10-question diagnostic quiz, the AI tutor, adaptive difficulty and learning progress tracking have no implementation. There is no Anthropic SDK dependency (only `axios`), and `CLAUDE_API_KEY` / `CLAUDE_MODEL` are defined in `.env.example` but not read by any code.

---

## Known remaining issues

1. **Logout does nothing server-side.** There are no refresh tokens and tokens cannot be revoked.
2. **No rate limiting and no security headers** (for example `helmet`).
3. **Database errors reach the client as HTTP 500 with the raw error message.** From reading the code (not run against MongoDB): Mongoose validation failures such as a name shorter than 2 characters are caught by the generic handler and returned as 500 instead of 400, and `error.message` is exposed.
4. **Token lifetime is hardcoded in responses.** `authController.js` returns `expiresIn: '7d'` even though the real lifetime comes from `JWT_EXPIRY`.
5. **`package-lock.json` is gitignored**, so installs are not reproducible. For an application it should be committed.
6. **Input validation is manual** in the controller; there is no shared validation middleware.
7. **The server starts listening before the database is connected**, so requests can arrive during startup and fail with a 500.
8. **No CI** runs the tests.
9. **README claims are ahead of the code and the science.** Statements such as "scientifically maps your learning style" and "based on neuroscience" are not supported by anything in the repository, and matching teaching to a quiz-derived learning style is not well supported by research. Consider rewording them.
