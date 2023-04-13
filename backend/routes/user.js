import express from 'express';
import { authenticateUser, authorizeAdmin } from '../auth/auth.js';
import User from '../models/user.js';

const router = express.Router();

// Get a user by ID
router.get('/:id', authenticateUser, authorizeAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('campaigns');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get user' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with that email already exists' });
    }

    const user = new User({ name, email, password });
    await user.hashPassword();
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

// Update a user by ID
router.put('/:id', authenticateUser, authorizeAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
      await user.hashPassword();
    }

    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update user' });
  }
});

// Delete a user by ID
router.delete('/:id', authenticateUser, authorizeAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.remove();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
});

export default router;
