/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";
import "../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css";
import { Col, Button, Row } from "react-bootstrap";
import { getUserList, deleteUser } from "../../../service/User";
const $ = require("jquery");
$.DataTable = require("datatables.net");

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

  removeUser = async (id) => {
    const response = await deleteUser(id);
    try {
      this.setState({
        users: this.state.users.filter((el) => el.id !== id),
      });
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
          deleteAlert={this.deleteAlert}
          key={currentUser.id}
        />
      );
    });
  }

  deleteAlert = (id) => {
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
        text: "Do you want to remove this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.removeUser(id);
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "User has been removed.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "User not removed :)",
            "error"
          );
        }
      });
  };

  componentDidUpdate() {
    this.$el = $(this.el);
    this.$el.DataTable();
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
            <Button variant="primary">
              <b>Add User</b>
            </Button>
          </Col>
        </Row>
        <br></br>
        <table className="display" ref={(el) => (this.el = el)}>
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
          <tfoot>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
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
    <td>
      <Button className="m-2 " variant="success">
        edit
      </Button>

      <Button
        className="m-1 p-1.5"
        variant="danger"
        onClick={() => {
          props.deleteAlert(props.user.id);
          // props.deleteUser(props.user.id);
        }}
      >
        delete
      </Button>
    </td>
  </tr>
);
