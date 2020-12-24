import { Router } from 'express';
import validateTweets from '../../validation/tweets.js';
import mongoose from 'mongoose';
import passport from 'passport';
import Tweet from '../../models/Tweet.js';

const router = Router();

router.get('/tweets', (req, res) => {
  Tweet.find()
    .sort({ date: -1 })
    .then((tweets) => res.send(tweets))
    .catch((err) => res.status(404).json({ noTweetsFound: 'No Tweets in db', err }));
});

router.get('/user/:user_id', (req, res) => {
  Tweet.find({ user: req.params.user_id })
    .then((tweets) => res.send(tweets))
    .catch((err) =>
      res.status(404).json({ noTweetsFound: 'No tweets found in db', err })
    );
});

router.get('/:id', (req, res) => {
  Tweet.findById(req.params.id)
    .then((tweet) => res.send(tweet))
    .catch((err) => res.status(404).json({ noTweetsFound: 'No Tweet found in db', err }));
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateTweets(req.body);
  if (!isValid) return res.status(400).json(errors);
  const { text } = req.body;
  const user = req.user.id;
  const newTweet = new Tweet({
    text,
    user,
  });
  newTweet
    .save()
    .then((tweet) => {
      res.json(tweet);
    })
    .catch((err) => console.log('err', err));
});

export default router;
