import React from "react";
// import OneTweet from "./OneTweet"

// const TwitterCard = React.createClass({
const TwitterCard = props => (
	<div className="twitter-card">
		<p className="twitter-card__user">
			@NHF
		</p>
        
		<br/>
		<p className="twitter-card__tweet">
			{props.tweet }
		</p>	
	</div>
)

export default TwitterCard;


// ----------------------------------------
// const OneTweet = React.createClass({
	
// 	getInitialState() {
// 		return {
// 			tweets: {
// 				user: '',
// 				tweet: ''
// 			}
// 		}
// 	},
	
// 	config : {
// 		 apiKey: "AIzaSyC9CWQpGgONxdMCPdIvU-uxiPQPfHeCNW4",
// 		 authDomain: "twitter-feed-e2a09.firebaseapp.com",
// 		 databaseURL: "https://twitter-feed-e2a09.firebaseio.com",
// 		 storageBucket: "twitter-feed-e2a09.appspot.com",
// 	},
	
// 	getTweets () {
// 		// const init = firebase.initializeApp(this.config);
// 		// init.database().ref('tweets').on('value', snapshot => {
//             // const data = snapshot.val();
            
// 			this.setState({
// 				tweets: {
//                     user: 'NSF',
//                     // user: data.user,
//                     tweet: ["HKJHKJ", "KKHKHGUJGJ", "KJHUKHUU"]
// 					// tweet: data.tweetText
// 				}
// 			})	 			
// 		// });
// 	},													
	
// 	componentDidMount() {
// 		this.getTweets();
		
// 	},	
		
// 	render: function(){
// 		return(
// 			<div>
//                 {this.state.tweets.tweet.map(tweet => (
//                     <TwitterCard tweets={ this.state.tweet } />
//                 ))}
// 			</div>
// 		)
// 	}
	
// })

// // ReactDOM.render(<App/>, document.getElementById('app'));
// export default OneTweet;