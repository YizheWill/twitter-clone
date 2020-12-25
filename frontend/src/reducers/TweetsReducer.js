import {
  RECEIVE_TWEETS,
  RECEIVE_USER_TWEETS,
  RECEIVE_NEW_TWEET,
} from '../actions/TweetActions';

const _initState = {
  all: {},
  user: {},
  new: undefined,
};

export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...oldState,
        // TODO check the value come back from the backend
        all: action.tweets.data,
      };
    case RECEIVE_USER_TWEETS:
      return {
        ...oldState,
        user: action.tweets.data,
      };
    case RECEIVE_NEW_TWEET:
      return {
        ...oldState,
        new: action.tweet.data,
      };
    default:
      return oldState;
  }
};
