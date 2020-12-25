import React from 'react';
import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/TweetActions';

class TweetBox extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    };
  }

  componentWillMount() {
    console.log(this.props.currentUser.id);
    this.props.fetchUserTweets(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {
    if (this.state.tweets.length === 0) {
      return <div>This user has no Tweets</div>;
    } else {
      return (
        <div>
          <h2>All of This User's Tweets</h2>
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
    tweets: Object.values(state.tweets.user),
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserTweets: (id) => dispatch(fetchUserTweets(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
