import React from "react";
import OneTweet from "./OneTweet";
import TwitterCard from "./TwitterCard";

import TwitterScroll from "./TwitterScroll";

import "./Twitter.css";

// The "...props" mean: "spread all of the passed props onto this element"
// That way we don't have to define them all individually

const TwitterFeed = props => (
  <div className="feed" {...props}>
    {/* hey */}
    {/* {props.children} */}
    {/* <TwitterCard /> */}
    {/* <OneTweet /> */}
    <TwitterScroll />
  </div>
);

export default TwitterFeed;
//123816