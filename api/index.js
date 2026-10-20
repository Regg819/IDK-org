import app from '../src/app.js';
import { connectDB } from '../src/config/database.js';

// A serverless instance can handle many requests, so the database connection
// is opened once and reused. A failed attempt is not kept, which lets the next
// request try again instead of failing until the instance is replaced.
let connecting = null;

const ensureDatabase = () => {
  if (!connecting) {
    connecting = connectDB().catch((error) => {
      connecting = null;
      throw error;
    });
  }
  return connecting;
};

export default async function handler(req, res) {
  try {
    await ensureDatabase();
  } catch (error) {
    return res.status(503).json({
      success: false,
      message: 'The database is not reachable right now. Please try again.',
      code: 'DATABASE_UNAVAILABLE'
    });
  }

  return app(req, res);
}
