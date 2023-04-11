const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
    isAdmin: user.isAdmin
  };

  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

function authenticateUser(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

function authorizeAdmin(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Admin authorization required' });
  }

  next();
}

module.exports = { generateToken, authenticateUser, authorizeAdmin };
