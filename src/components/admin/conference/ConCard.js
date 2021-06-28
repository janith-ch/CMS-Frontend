/** @format */

import React, { Component } from "react";
import { ListGroupItem, Card, ListGroup, Col } from "react-bootstrap";
class ConCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://img.icons8.com/bubbles/100/000000/user.png"
            />
            <Card.Body>
              <Card.Title>{this.props.item.product_name}</Card.Title>
              <Card.Text>{this.props.item.product_name}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{this.props.item.product_name}</ListGroupItem>
              <ListGroupItem>{this.props.item.product_name}</ListGroupItem>
              <ListGroupItem>{this.props.item.product_name}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default ConCard;
