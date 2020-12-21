const passport = require('passport');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const users = require('./routes/api/user');
const tweets = require('./routes/api/tweets');
const bodyParser = require('body-parser');
const User = require('./models/User');
// connect to the mongo Atlas database we created.
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

// bodyParser is to parse the json we send to frontend
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const user = new User({ handle: 'handle', email: 'email', password: 'password' });
  user.save().then((user) => res.json(user));
});

app.use('/api/users', users);
app.use('/api/tweets', tweets);
app.use(passport.initialize());
require('./config/passport')(passport);
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
