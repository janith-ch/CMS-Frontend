/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Button, Row, Table } from "react-bootstrap";
import { getUserList } from "../../../service/User";
class ReviewerList extends Component {
  state = { users: [] };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const response = await getUserList("admin");
      console.log(response.data);
      this.setState({ users: response.data || [] });
    } catch (e) {
      console.log(e);
    }
  };

  userList() {
    return this.state.users.map((currentUser) => {
      return (
        <UserList
          user={currentUser}
          deleteUser={this.removeUser}
          key={currentUser.id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col md="4"></Col>
          <Col md="6">
            <h3>Users List</h3>
          </Col>
          <Col md="2">
            <Button variant="warning">
              <b>Add User</b>
            </Button>
          </Col>
        </Row>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </Table>
      </div>
    );
  }
}
export default ReviewerList;

const UserList = (props) => (
  <tr>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
    <td>{props.user.email}</td>
    <td>{props.user.country}</td>
    <td>edit| | delete</td>
  </tr>
);
