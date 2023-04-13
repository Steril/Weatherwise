import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { JWT_SECRET } from '../config/env';

async function login(req, res, next) {
  try {
    // Retrieve the user record from the database
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      // User not found
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the input password with the stored hash
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordMatch) {
      // Password doesn't match
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the input API key with the stored hash
    const isApiKeyMatch = await bcrypt.compare(req.body.sendinblueApiKey, user.sendinblueApiKeyHashed);

    if (!isApiKeyMatch) {
      // API key doesn't match
      return res.status(401).json({ message: 'Invalid API key or secret' });
    }

    // Compare the input API secret with the stored hash
    const isApiSecretMatch = await bcrypt.compare(req.body.sendinblueApiSecret, user.sendinblueApiSecretHashed);

    if (!isApiSecretMatch) {
      // API secret doesn't match
      return res.status(401).json({ message: 'Invalid API key or secret' });
    }

    // Password, API key, and API secret all match
    // Create and return a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
}

export default { login };
