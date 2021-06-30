/** @format */

import React, { Component } from "react";
import { Col, Button, Row } from "react-bootstrap";
import {
  getWorkshopList,
  deleteWorkshop,
} from "../../../service/workshop/workshop";
import "../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css";
import Animation from "../../../components/admin/Animation";
import Swal from "sweetalert2";
import WorkshopBody from "../../../components/admin/workshop/WorkshopBody";
const $ = require("jquery");
$.DataTable = require("datatables.net");

class ViewWorkshop extends Component {
  state = {
    workshop: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchWorkshop();
  }

  fetchWorkshop = async () => {
    try {
      this.setState({ loading: true });
      const response = await getWorkshopList();
      console.log(response.data);
      this.setState({ workshop: response.data.dataBundle || [] });
      this.setState({ loading: false });
    } catch (e) {
      console.log(e);
    }
  };

  removeWorkshop = async (id) => {
    const response = await deleteWorkshop(id);
    console.log(response.data);
    try {
      this.setState({
        workshop: this.state.workshop.filter((el) => el.id !== id),
      });
    } catch (e) {
      console.log(e);
    }
  };
  workshopList() {
    return this.state.workshop.map((currentworkshop) => {
      return (
        <WorkshopBody
          ws={currentworkshop}
          deleteAlert={this.deleteAlert}
          editWorkshop={this.editworkshop}
          key={currentworkshop.id}
        />
      );
    });
  }
  pendings() {
    this.props.history.push("/admin/workshop/pending");
  }
  editworkshop = (id) => {
    this.props.history.push("/admin/workshop/edit/" + id);
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
          this.removeWorkshop(id);
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
                <b>WORKSHOPS</b>
              </h3>
            </Col>
            <Col md="1">
              <Button
                className=" btn btn-md"
                variant="warning"
                onClick={() => {
                  this.pendings();
                }}
              >
                <b>Pendings</b>
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
                <th>Ws Title</th>
                <th>date</th>
                <th>Time</th>
                <th>pdf</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.workshopList()}</tbody>
            <tfoot>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Ws Title</th>
                <th>date</th>
                <th>Time</th>
                <th>pdf</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }
  }
}
export default ViewWorkshop;
