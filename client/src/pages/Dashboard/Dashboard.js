import React, { Component } from "react";
import {Col, Container, Row} from "../../components/Grid";

import Card from "../../components/Profile";
import Friends from "../../friends.json";
import Twitter from "../../components/Dashboard/Twitter";
import DumbList from "../../components/Dashboard/DummyList";

const Dashboard = () =>

    <Container fluid>
        <Row>
            {/* left of the page */}
            <Col size="md-2">
                <Card 
                    img={Friends[3].image}
                    name={Friends[3].name}
                    title={Friends[3].occupation}
                />
            </Col>

            {/* middle of the page */}
            <Col size="md-8">

                {/* add two rows of list elements */}

                <Row> 
                    {/* <DumbList />  */}
                    <ul>
                        <li>Assignment #0</li>
                        <li>Assignment #0</li>
                        <li>Assignment #0</li>
                        <li>Assignment #0</li>
                        <li>Assignment #0</li>
                    </ul>
                
                </Row>

                <Row> <DumbList /> </Row>

            </Col>

            {/* right of the page */}
            <Col size="md-2">
                <Twitter />
            </Col>

        </Row>
    </Container>
    
export default Dashboard;