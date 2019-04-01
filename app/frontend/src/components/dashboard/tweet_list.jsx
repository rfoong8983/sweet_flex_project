import React, { Component } from 'react';

class TweetList extends Component{
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
        // debugger;
        let tweets;
        if (this.tweets !== undefined){
            tweets = 
                this.tweets.map((tweet,idx) => {
                    return (
                        <li key={idx} className="tweet-index"> 
                            {tweet.fullText}
                        </li>
                    ) 
                })
        }

        // if (this.state.tweets !== undefined){
        //     this.tweetList = 
        //         this.state.tweets.map((tweet,idx) => {
        //             return (
        //                 <li key={idx} className="tweet-index"> 
        //                     {tweet.fullText}
        //                 </li>
        //             ) 
        //         })
        // }
        // debugger
        // const tweets = this.tweets.map((tweet, idx) => {
        //     return (
        //         <li key={idx} className="tweet-index">
        //             {tweet.fullText}
        //         </li>
        //     )
        // })
        return (
            <div>
                <ul>
                    {tweets}
                </ul>
            </div>
        )
    }
}


export default TweetList;
