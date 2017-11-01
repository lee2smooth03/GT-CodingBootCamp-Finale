import React, { Component } from 'react';
import './SideBar.css';

import {Input} from "../../Form";
import {DropDwn} from "../../Form";
import Calendar from "../Calendar";

const SideBar = () =>

    <div className="form-panel">
        <h2>Create an Event</h2>
        {<DropDwn />}

        <Input />
        <Input />

        <Calendar />

        <button type="button" class="btn btn-default">Submit Info</button>
    </div>

export default SideBar;