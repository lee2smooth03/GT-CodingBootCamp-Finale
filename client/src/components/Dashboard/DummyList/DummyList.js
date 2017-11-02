import React from "react";
import "./DummyList.css";

import { List, ListItem } from "../../List";
const DemoAssign = [
    {
        id: 1,
        challenger: "Stephen King",
        category: "Science",
        theme: "Music",
        submitted: 1,
        reviewed: 1,
        approved: 1,
        date: new Date(Date.now())
    }, 
    {
        id: 2,
        challenger: "LeBron James",
        category: "Math",
        theme: "Weather",
        submitted: 1,
        reviewed: 1,
        approved: 0,
        date: new Date(Date.now()) 
    }, 
    {
        id: 3,
        challenger: "John Oliver",
        category: "Engineering",
        theme: "Cosmotology",
        submitted: 1,
        reviewed: 0,
        approved: 0,
        date: new Date(Date.now())
    },
    {
        id: 4,
        challenger: "John Oliver",
        category: "Technology",
        theme: "Weather",
        submitted: 1,
        reviewed: 0,
        approved: 0,
        date: new Date(Date.now())
    },
    {
        id: 5,
        challenger: "Leon",
        category: "Arts",
        theme: "Medical (5 Heartbeats)",
        submitted: 1,
        reviewed: 1,
        approved: 0,
        date: new Date(Date.now())
    }];

const DummyList =(props) =>
    <div className="panel panel-default">

        <div className="panel-heading">{props.listName}</div>
        <div className="panel-body">
            {/* <ul>
                        <li>Assignment #0</li>
                        <li>Assignment #0</li>
                        <li>Assignment #0</li>
                        <li>Assignment #0</li>
                        <li>Assignment #0</li>
            </ul> */}
            <List>
                {DemoAssign.map(Assignment =>{
                    <ListItem key={Assignment.id}>
                        <strong>{Assignment.category} by {Assignment.challenger}</strong>
                    </ListItem>
                })}
            </List>

        </div>

    </div>
export default DummyList;