import express from 'express';
import mongoose from 'mongoose';
import { mongoURI } from './config/keys.js';

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('connected to the mongodb'))
  .catch((err) => console.log('err', err));

const app = express();
app.get('/', (req, res) => res.send('Hello World'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on ', port));
