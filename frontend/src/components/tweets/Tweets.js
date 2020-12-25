import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTweets } from '../../actions/TweetActions';

class TweetBox extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

class Tweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    };
  }

  componentWillMount() {
    this.props.fetchTweets();
  }

  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {
    if (this.state.tweets.length === 0) {
      return <div>There are no Tweets</div>;
    } else {
      return (
        <div>
          <h2>All Tweets</h2>
          {this.state.tweets.map((tweet) => (
            <TweetBox key={tweet._id} text={tweet.text} />
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.all),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTweets: () => dispatch(fetchTweets()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tweets));
