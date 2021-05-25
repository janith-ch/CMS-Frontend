/** @format */

import React from "react";
import { Row } from "react-bootstrap";
import SideBar from "../../components/admin/sidebar/SideBar";
import NavBar from "../../components/admin/navbar/NavBar";
import { Col } from "react-bootstrap";

function Admin({ children }) {
  return (
    <>
      <Row>
        <NavBar />
        <Col md="1">
          <SideBar />
        </Col>
        <Col md="11">
          <br></br>
          <Row>
            <Col md="1"></Col>
            <Col md="10">{children}</Col>
            <Col md="1"></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Admin;
