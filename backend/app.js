const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const { initializePassport } = require('./auth/passport');
const indexRouter = require('./routes/index');
const { MONGO_URI, COOKIE_SECRET } = require('./config/env');

// Create an Express app
const app = express();

// Connect to the MongoDB database
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error(error));

// Set up CORS middleware
app.use(cors());

// Set up body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Passport middleware and session handling
initializePassport(passport);
app.use(cookieSession({
  name: 'session',
  secret: COOKIE_SECRET,
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());

// Set up routes
app.use('/', indexRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
