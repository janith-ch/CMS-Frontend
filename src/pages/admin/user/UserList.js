/** @format */

import React, { Component } from "react";
import { Col, Button, Row } from "react-bootstrap";
import { getUserList, deleteUser } from "../../../service/User";
import UserBody from "../../../components/admin/user/UserBody";
import { USERS } from "../UserRole";
import "../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css";
import Animation from "../../../components/admin/Animation";
import Swal from "sweetalert2";
const $ = require("jquery");
$.DataTable = require("datatables.net");

class UserList extends Component {
  state = {
    users: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchUser();
    console.log("working");
  }

  fetchUser = async () => {
    try {
      this.setState({ loading: true });
      const response = await getUserList(`${USERS}`);
      console.log(response.data);
      this.setState({ users: response.data || [] });
      this.setState({ loading: false });
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
          viewUser={this.viewUser}
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

  viewUser = (id) => {
    this.props.history.push("/admin/user-list/detail/" + id);
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
    if (this.state.loading === true) {
      return <Animation />;
    } else {
      return (
        <div>
          <Row>
            <Col md="5"></Col>
            <Col md="6">
              <h3>
                <b>ATTENDEE LIST</b>
              </h3>
            </Col>
            <Col md="1">
              <Button
                className=" btn btn-md"
                variant="warning"
                onClick={() => {
                  this.addUser();
                }}
              >
                <b>Add Attendee</b>
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
                <th>User Type</th>
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
                <th>User Type</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }
  }
}
export default UserList;
