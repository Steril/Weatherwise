const express = require('express');
const authRouter = require('./auth');
const campaignsRouter = require('./campaigns');
const usersRouter = require('./users');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/campaigns', campaignsRouter);
router.use('/users', usersRouter);

module.exports = router;
