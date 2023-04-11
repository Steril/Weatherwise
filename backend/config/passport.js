const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const { JWT_SECRET } = require('./env');

// Local strategy for username/password login
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    // Find the user with the given email address
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return done(null, false, { message: 'Invalid email or password' });
    }

    // Compare the input password with the stored hash
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      // Password doesn't match
      return done(null, false, { message: 'Invalid email or password' });
    }

    // Password matches
    return done(null, user);
  } catch (error) {
    done(error);
  }
}));

// JWT strategy for token-based authentication
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};

passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
  try {
    // Find the user associated with the token
    const user = await User.findById(jwtPayload.userId);

    if (!user) {
      // User not found
      return done(null, false, { message: 'Invalid token' });
    }

    // Token is valid and user is authenticated
    return done(null, user);
  } catch (error) {
    done(error);
  }
}));
