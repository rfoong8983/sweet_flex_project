import React, { Component } from 'react'

class TweetList extends Component{
    constructor(props){
        super(props)
        this.tweetList = "";
        this.state = {}
    }

    componentDidMount(){
        // debugger;
    }
    componentWillReceiveProps(){
        // debugger;
        this.setState({tweets: this.props.tweets});
    }

    render(){
        // debugger;
        if (this.state.tweets !== undefined){
            this.tweetList = 
                this.state.tweets.map((tweet,idx) => {
                    return (
                        <li key={idx} class="tweet-index"> 
                            {tweet.fullText}
                        </li>
                    ) 
                })
        }
        return (
            <div>
                <ul>
                    {this.tweetList}
                </ul>
            </div>
        )
    }
}


export default TweetList;
