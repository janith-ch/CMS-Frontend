/** @format */

import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { getUserList, updateUserRole } from "../../../service/User";
import { PENDING_USERS } from "../UserRole";
import Swal from "sweetalert2";
import Animation from "../../../components/admin/Animation";
import PendingUsersBody from "../../../components/admin/pending users/PendingUsersBody";
import "../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css";
const $ = require("jquery");
$.DataTable = require("datatables.net");

class PendingUsers extends Component {
  state = {
    users: [],
    userRole: "",
    loading: false,
  };
  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      this.setState({ loading: true });
      const response = await getUserList(`${PENDING_USERS}`);
      console.log(response.data);
      this.setState({ users: response.data || [] });
      this.setState({ loading: false });
    } catch (e) {
      console.log(e);
    }
  };

  pendingUsers() {
    return this.state.users.map((currentUser) => {
      return (
        <PendingUsersBody
          user={currentUser}
          key={currentUser.id}
          changeUserRole={this.changeUserRole}
          reloadUser={this.fetchUser}
        />
      );
    });
  }
  changeUserRole = async (id, userRole) => {
    console.log(userRole);
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
          text: "Do you want to Accept this request!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Accept it!",
          cancelButtonText: "No, Cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const userRoles = {
              userRole: userRole,
            };
            updateUserRole(id, userRoles);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "User not Accepted :)",
              "error"
            );
          }
        });
    } catch (e) {
      console.log(e);
    }
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
            <Col md="4"></Col>
            <Col md="6">
              <h3>
                <b>PENDING USERS</b>
              </h3>
            </Col>
            <Col md="2"></Col>
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
                <th>Current User Type</th>
                <th>Requested User Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.pendingUsers()}</tbody>
            <tfoot>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Current User Type</th>
                <th>Requested User Type</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }
  }
}

export default PendingUsers;
