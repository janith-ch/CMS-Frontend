/** @format */

import React, { Component } from "react";
import {
  ListGroupItem,
  Card,
  ListGroup,
  Col,
  FormLabel,
  Button,
} from "react-bootstrap";
class ConCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={this.props.item.imageUrl} />
            <Card.Body>
              <Card.Title>{this.props.item.name}</Card.Title>
              <Card.Text>{this.props.item.bio}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <FormLabel>
                <b>Email</b>
              </FormLabel>
              <ListGroupItem>{this.props.item.email}</ListGroupItem>
              <FormLabel>
                <b>Affiliation</b>
              </FormLabel>
              <ListGroupItem>{this.props.item.affiliation}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button
                className="m-1 "
                variant="danger"
                onClick={() => {
                  this.props.deleteAlert(this.props.item.id);
                }}
              >
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default ConCard;
