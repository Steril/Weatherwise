import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieSession from 'cookie-session';
import { initializePassport } from './auth/passport';
import indexRouter from './routes/index';
import { MONGO_URI, COOKIE_SECRET } from './config/env';

const app = express();

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error(error));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport(passport);
app.use(cookieSession({
  name: 'session',
  secret: COOKIE_SECRET,
  maxAge: 24 * 60 * 60 * 1000
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
