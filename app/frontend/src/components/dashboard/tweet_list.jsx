import React from 'react';

class TweetList extends React.Component {
    constructor(props){
        super(props);
        this.tweets = this.props.tweets;
        this.tweetList = "";
        this.state = {};
    }
    
    componentWillReceiveProps(){
        this.setState({tweets: this.props.tweets});
    }

    render(){
        let tweets;
        if (this.tweets !== undefined){
            tweets = 
                this.tweets.map((tweet,idx) => {
                    return (
                        <li key={idx} className="tweet-item"> 
                            {tweet.fullText}
                        </li>
                    ) 
                })
        } else if (localStorage.tweets !== undefined) { // use tweets that have been previously stored in localStorage from prior search
            tweets = JSON.parse(localStorage.getItem('tweets')).map((tweet, idx) => {
                return (
                    <li key={idx} className="tweet-item">
                        <a className="tweetBody">{tweet.fullText}</a>
                    </li>
                )
            })
        }

        return (
            <ul className="tweets">
                {tweets}
            </ul>
        )
    }
}


export default TweetList;
