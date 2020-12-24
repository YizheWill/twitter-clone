import express from 'express';
import mongoose from 'mongoose';
import { mongoURI } from './config/keys.js';
import users from './routes/api/users.js';
import tweets from './routes/api/tweets.js';
import bodyParser from 'body-parser';

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('connected to the mongodb'))
  .catch((err) => console.log('err', err));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/users', users);
app.use('/api/tweets', tweets);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on ', port));
