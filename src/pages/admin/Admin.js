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
        <Col md="2">
          <SideBar />
        </Col>
        <Col md="9">
          <br></br>
          {children}
        </Col>
        <Col md="1"></Col>
      </Row>
    </>
  );
}

export default Admin;
