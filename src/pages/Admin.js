/** @format */

import React from "react";
import { Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "../app/App.css";
import SideBar from "../components/admin/sidebar/SideBar";
import Routes from "../routes/admin";

import { Col } from "react-bootstrap";

function Admin() {
  return (
    <>
      <Router>
        <Row>
          <Col md="3">
            <SideBar />
          </Col>
          <Col md="8">
            <br></br>
            <br></br>
            <br></br>

            <Routes />
          </Col>
          <Col md="1"></Col>
        </Row>
      </Router>
    </>
  );
}

export default Admin;
