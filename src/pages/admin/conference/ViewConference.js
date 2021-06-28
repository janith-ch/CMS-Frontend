/** @format */

import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ConCard from "../../../components/admin/conference/ConCard";
import product_card from "../../../data/product_data";
class ViewConference extends Component {
  state = {};
  CardItems() {
    return product_card.map((item) => {
      return (
        <Col>
          <ConCard item={item} key={item.id} />
        </Col>
      );
    });
  }
  render() {
    return (
      <Container fluid="true">
        <Row>{this.CardItems()}</Row>
      </Container>
    );
  }
}

export default ViewConference;
