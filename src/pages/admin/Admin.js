/** @format */

import React from "react";
import { Row } from "react-bootstrap";
import SideBar from "../../components/admin/sidebar/SideBar";
import { Col } from "react-bootstrap";

function Admin({ children }) {
  return (
    <>
      <Row>
        <Col md="3">
          <br></br>
          <br></br>

          <SideBar />
        </Col>

        <Col md="8">
          <br></br>
          <br></br>
          <br></br>

          {children}
        </Col>

        <Col md="1"></Col>
      </Row>
    </>
  );
}

export default Admin;
