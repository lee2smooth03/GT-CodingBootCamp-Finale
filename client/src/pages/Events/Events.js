import React, { Component } from "react";
import {Col, Container, Row} from "../../components/Grid";

// Bring in the map and sidebar
import Map from "../../components/Events/Map";
import Sidebar from "../../components/Events/SideBar";

const Events = () =>

    <Container fluid>
        <Row>
            <Col size="md-9">
                <Map />
            </Col>
            
            <Col size="md-3">
                <Sidebar />
            </Col>
        </Row>
    </Container>

export default Events;