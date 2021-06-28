/** @format */

import React, { Component } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import ConCard from "../../../components/admin/conference/ConCard";
import product_card from "../../../data/product_data";
class ViewConference extends Component {
  state = {};
  CardItems() {
    return product_card.map((item) => {
      return (
        <Col md="3">
          <ConCard item={item} key={item.id} />
        </Col>
      );
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Col md="5"></Col>
          <Col md="6">
            <h3>
              <b>Conference</b>
            </h3>
          </Col>
          <Col md="1">
            <Button
              className=" btn btn-md"
              variant="warning"
              onClick={() => {
                // this.addUser();
              }}
            >
              <b>Create</b>
            </Button>
          </Col>
        </Row>
        <br></br>
        <Container fluid="true">
          <Row>
            <Row>{this.CardItems()}</Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewConference;
