/** @format */

import React, { Component } from "react";
import { Col, Button, Form, Row } from "react-bootstrap";
import { getSingleUser, updateUser } from "../../../service/User";

class EditReviewer extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    userRole: "",
    password: "",
    country: "",
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const response = await getSingleUser(this.props.match.params.id);

      this.setState({
        id: response.data.id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        userRole: response.data.userRole,
        password: response.data.password,
        country: response.data.country,
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
  onChnageUserRole = (e) => {
    this.setState({
      userRole: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      userRole: this.state.userRole,
      password: this.state.password,
      country: this.state.country,
    };
    try {
      const response = await updateUser(this.props.match.params.id, user);
      // success scenario handle here
      if (response.data) {
        console.log(response.data);
      }
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
            <b>EDIT REVIEWER</b>
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
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>User Role</Form.Label>
              <Form.Control
                as="select"
                value={this.state.userRole}
                onChange={this.onChnageUserRole}
              >
                <option>reviewer</option>
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

            <Button variant="success" type="submit">
              Update Reviewer
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

export default EditReviewer;
