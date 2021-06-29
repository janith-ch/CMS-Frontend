/** @format */

import React, { Component } from "react";
import {
  ListGroupItem,
  Card,
  ListGroup,
  Col,
  Row,
  FormLabel,
  Button,
} from "react-bootstrap";
class ConCard extends Component {
  state = {};
  componentDidMount() {
    this.buttonEnable();
  }
  buttonEnable() {
    if (this.props.item.status === "pending") {
      document.getElementById("post-btn").style.display = "none";
    } else {
      document.getElementById("post-btn").style.display = "";
    }
  }

  render() {
    return (
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={this.props.item.image} />
            <Card.Body>
              <Card.Title>{this.props.item.header}</Card.Title>
              <Card.Text>{this.props.item.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <FormLabel>Date</FormLabel>
              <ListGroupItem>{this.props.item.date}</ListGroupItem>
              <FormLabel>Time</FormLabel>
              <ListGroupItem>{this.props.item.time}</ListGroupItem>
              <FormLabel>Organizer</FormLabel>
              <ListGroupItem>{this.props.item.organizer}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Row>
                <Col md="4">
                  <Button
                    className="m-1 "
                    variant="success"
                    onClick={() => {
                      //   this.props.editUser(this.props.user.id);
                    }}
                  >
                    Update
                  </Button>
                </Col>
                <Col md="4">
                  <Button
                    className="m-1 "
                    variant="danger"
                    onClick={() => {
                      this.props.deleteAlert(this.props.item.id);
                    }}
                  >
                    Delete
                  </Button>{" "}
                </Col>

                <Col md="4">
                  <Button
                    className="m-1 "
                    variant="primary"
                    id="post-btn"
                    onClick={() => {
                      this.props.deleteAlert(this.props.item.id);
                    }}
                  >
                    Post
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default ConCard;
