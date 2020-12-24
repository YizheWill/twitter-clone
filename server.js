import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import pspt from './config/passport.js';

import { mongoURI } from './config/keys.js';

import users from './routes/api/users.js';
import tweets from './routes/api/tweets.js';

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to the mongodb'))
  .catch((err) => console.log('err', err));

const app = express();
app.use(passport.initialize());
pspt(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/users', users);
app.use('/api/tweets', tweets);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on ', port));
