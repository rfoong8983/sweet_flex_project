import TweetList from './tweet_list';
import { connect } from 'react-redux';
import { fetchTwitterData } from '../../actions/search_actions';

const msp = state => ({
    tweets: state.entities.tweets.allTweets
});

const mdp = dispatch => ({
    fetchTwitterData: searchData => dispatch(fetchTwitterData(searchData))
});

export default connect(msp, mdp)(TweetList);