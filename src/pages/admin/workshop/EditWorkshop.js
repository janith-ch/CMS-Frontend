/** @format */

import React, { Component } from "react";
import { Col, Button, Form, Row } from "react-bootstrap";
import {
  getSingleWorkshop,
  updateWorkshop,
} from "../../../service/workshop/workshop";
import Swal from "sweetalert2";

class Editworkshop extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    userRole: "",
    password: "",
    country: "",
    date: new Date(),
    time: "",
  };

  componentDidMount() {
    this.fetchWorkshop();
  }

  fetchWorkshop = async () => {
    try {
      const response = await getSingleWorkshop(this.props.match.params.id);
      console.log(response);
      this.setState({
        id: response.data.id,
        firstName: response.data.dataBundle.firstName,
        lastName: response.data.dataBundle.lastName,
        email: response.data.dataBundle.email,
        password: response.data.dataBundle.password,
        country: response.data.dataBundle.country,
        date: response.data.dataBundle.date,
        time: response.data.dataBundle.time,
      });
    } catch (e) {
      // error handling
      console.log(e);
    }
  };
  onChangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  onChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onChangeCountry = (e) => {
    this.setState({
      country: e.target.value,
    });
  };
  onChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  onChangeTime = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  onSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    const workshop = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      country: this.state.country,
      date: this.state.date,
      time: this.state.time,
    };
    console.log(workshop);
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success m-2",
          cancelButton: "btn btn-danger m-2",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "Do you want to Update this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Update it!",
          cancelButtonText: "No, Cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            updateWorkshop(this.props.match.params.id, workshop);

            this.setState({ firstName: "" });
            this.setState({ lastName: "" });
            this.setState({ email: "" });
            this.setState({ password: "" });
            this.setState({ country: "" });

            swalWithBootstrapButtons.fire(
              "Updated!",
              "User has been Updates.",
              "success"
            );

            // this.props.history.push("/admin/user-list");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "User not Updated :)",
              "error"
            );
          }
        });
    } catch (e) {
      // error handling
      console.log(e);
    }
  };

  render() {
    return (
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <br></br>
          <center>
            <b>EDIT WORKSHOP</b>
          </center>
          <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="Enter first name"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastName"
                placeholder="Enter last name"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="country"
                placeholder="Enter country"
                value={this.state.country}
                onChange={this.onChangeCountry}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date"
                value={this.state.date}
                onChange={this.onChangeDate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter Time"
                value={this.state.time}
                onChange={this.onChangeTime}
              />
            </Form.Group>
            <br></br>
            <br></br>
            <Button variant="success" type="submit">
              Update
            </Button>
            <br></br>
            <br></br>
          </Form>
        </Col>
        <Col md="2"></Col>
      </Row>
    );
  }
}

export default Editworkshop;
