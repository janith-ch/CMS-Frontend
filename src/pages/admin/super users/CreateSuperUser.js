/** @format */

import React, { Component } from "react";
import { Col, Button, Form, Row } from "react-bootstrap";
import { addUser } from "../../../service/User";
import Swal from "sweetalert2";

class CreateSuperUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    userRole: "",
    password: "",
    country: "",
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
  onChnageUserRole = (e) => {
    this.setState({
      userRole: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      userRole: this.state.userRole,
      password: this.state.password,
      country: this.state.country,
    };
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
          text: "Do you want to Add this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Add it!",
          cancelButtonText: "No, Cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            addUser(user);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "User not Add :)",
              "error"
            );
          }
        });
    } catch (ex) {
      // error handling
      console.log(e);
    }

    this.setState({ firstName: "" });
    this.setState({ lastName: "" });
    this.setState({ email: "" });
    this.setState({ userRole: "" });
    this.setState({ password: "" });
    this.setState({ country: "" });
  };

  render() {
    return (
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <br></br>
          <center>
            <b>ADD SUPER USER</b>
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
              <Form.Label>User Role</Form.Label>
              <Form.Control
                as="select"
                value={this.state.userRole}
                onChange={this.onChnageUserRole}
              >
                <option>select user role</option>
                <option>Admin</option>
                <option>Editor</option>
              </Form.Control>
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

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Super User
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

export default CreateSuperUser;
