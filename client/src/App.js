import React from "react";
import Login from "./pages/Login";
import Nav from "./components/Nav";

import {Col, Container, Row} from "./components/Grid";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Friends from "./friends.json";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";

import "./components/allSite.css";


const App = () => 
<Router>
  <div>
    {/* <Login /> */}
    {/* /* {<Events />} */}

    {/* if(window.path === "localhost:3000"){
      render <Dashboard/>
    }else if(window.path === "localhost:3000/events"){
      render <Events/>
    } */}

    <Route exact path="/" component={ Dashboard } />
    <Route exact path="/events" component={ Events } />
  </div>
</Router>

export default App;