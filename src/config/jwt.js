import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_change_this_in_production';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

// Generate JWT Token
export const generateToken = (userId, email) => {
  try {
    const token = jwt.sign(
      {
        userId: userId,
        email: email,
        iat: Date.now()
      },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRY,
        algorithm: 'HS256'
      }
    );

    return token;
  } catch (error) {
    console.error('Token generation error:', error);
    throw new Error('Failed to generate token');
  }
};

// Verify JWT Token
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      algorithms: ['HS256']
    });
    return decoded;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token has expired');
    }
    if (error.name === 'JsonWebTokenError') {
      throw new Error('Invalid token');
    }
    throw error;
  }
};

// Decode token without verification (for debugging)
export const decodeToken = (token) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    console.error('Token decode error:', error);
    return null;
  }
};

// Middleware to protect routes
export const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided',
        code: 'NO_TOKEN'
      });
    }

    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
      code: 'INVALID_TOKEN'
    });
  }
};
