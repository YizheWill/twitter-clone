import axios from 'axios';

export const getTweets = () => {
  console.log('here');
  return axios.get('/api/tweets/');
};

export const getUserTweets = (userId) => axios.get('/api/tweets/user/' + userId);

export const writeTweet = (tweet) => axios.post('/api/tweets/', tweet);
