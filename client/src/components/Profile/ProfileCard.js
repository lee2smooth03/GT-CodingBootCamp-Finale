import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";

import "./ProfileCard.css";



// stateful = class
// dumb = const

const ProfileCard = props => (

    <div className="card">

        {/* create the rounded picture at the top of the profile card */}
        <div className="img-container">
            <img
                alt={props.name}
                src={props.img}
            />
        </div>

        {/* state the individual's title beneath their picture */}
        <div>
            <p>
                {props.title}
            </p>
        </div>

        {/* list all of the attributes that are particular to this user */}
        <div>
                {/* <List>
                    
                </List> */}
                <Link to="/events">
                <button className="btn btn-default btn-lg" type="button" id="btn-up">
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
                </Link>
        </div>

    </div>
);

export default ProfileCard;