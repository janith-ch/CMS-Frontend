/** @format */

import React, { Component } from "react";
import Swal from "sweetalert2";
import "../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css";
import { Col, Button, Row } from "react-bootstrap";
import { getUserList, deleteUser } from "../../../service/User";
import UserBody from "../../../components/admin/user/UserBody";
const $ = require("jquery");
$.DataTable = require("datatables.net");

class UserList extends Component {
  state = { users: [] };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const response = await getUserList("user");
      console.log(response.data);
      this.setState({ users: response.data || [] });
    } catch (e) {
      console.log(e);
    }
  };

  removeUser = async (id) => {
    const response = await deleteUser(id);
    console.log(response.data);
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
        <UserBody
          user={currentUser}
          deleteAlert={this.deleteAlert}
          editUser={this.editUser}
          key={currentUser.id}
        />
      );
    });
  }
  addUser() {
    this.props.history.push("/admin/user-list/create");
  }
  editUser = (id) => {
    this.props.history.push("/admin/user-list/edit/" + id);
  };

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
            <h3>
              <b>Users List</b>
            </h3>
          </Col>
          <Col md="2">
            <Button
              variant="primary"
              onClick={() => {
                this.addUser();
              }}
            >
              <b>Add User</b>
            </Button>
          </Col>
        </Row>
        <br></br>

        <table
          className="display"
          ref={(el) => (this.el = el)}
          style={{ boxShadow: "8px 8px  #dce3e0" }}
        >
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
export default UserList;
