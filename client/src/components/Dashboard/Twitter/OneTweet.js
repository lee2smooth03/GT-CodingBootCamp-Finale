// import React from "react";
import React, { Component } from "react";

import Twitter from "./Twitter";
import TwitterCard from "./TwitterCard";


// const OneTweet = React.createClass({
class OneTweet extends Component {//({
	
    state = 
        {
			tweets: {
				user: 'NNSF',
				tweet: ["HKJHKJ", "KKHKHGUJGJ", "KJHUKHUU", "I like this stuff", "Great Event!", "Come back next", "7"]
			}
		}//,

	// getTweets () {
	// 	// const init = firebase.initializeApp(this.config);
	// 	// init.database().ref('tweets').on('value', snapshot => {
    //         // const data = snapshot.val();
            
	// 		this.setState({
	// 			tweets: {
    //                 user: 'NSF',
    //                 // user: data.user,
    //                 tweet: ["HKJHKJ", "KKHKHGUJGJ", "KJHUKHUU"]
	// 				// tweet: data.tweetText
	// 			}
	// 		})	 			
	// 	// });
	// },													
	
	// componentDidMount() {
	// 	this.getTweets();
	// },	
		
	//render: function(){
    render() {
		return(
			<div>
                {this.state.tweets.tweet.map(tweet => (
                    <TwitterCard tweet={ tweet } />
                ))}
			</div>
		)
	}
	
//})
}

// ReactDOM.render(<App/>, document.getElementById('app'));
export default OneTweet;