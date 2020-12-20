const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));
app.get('/', (req, res) => res.send('hello world'));
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
