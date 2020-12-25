import { getTweets, getUserTweets, writeTweet } from '../util/TweetApiUtil';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_USER_TWEETS = 'RECEIVE_USER_TWEETS';
export const RECEIVE_NEW_TWEET = 'RECEIVE_NEW_TWEET';

export const receiveTweets = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets,
});

export const receiveUserTweets = (tweets) => ({
  type: RECEIVE_USER_TWEETS,
  tweets,
});

export const receiveNewTweet = (tweet) => ({
  type: RECEIVE_NEW_TWEET,
  tweet,
});

export const fetchTweets = () => (dispatch) =>
  getTweets()
    .then((tweets) => {
      console.log('tweets', tweets);
      dispatch(receiveTweets(tweets));
    })
    .catch((err) => console.log('err', err));

export const fetchUserTweets = (userId) => (dispatch) =>
  getUserTweets(userId)
    .then((tweets) => dispatch(receiveUserTweets(tweets)))
    .catch((err) => console.log('err', err));
export const composeTweet = (tweet) => (dispatch) =>
  writeTweet(tweet)
    .then((twt) => dispatch(receiveNewTweet(twt)))
    .catch((err) => console.log('err', err));
