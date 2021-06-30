/** @format */

import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import {
  getApWorkshopList,
  approvedWorkshop,
} from "../../../service/workshop/workshop";
import "../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css";
import Animation from "../../../components/admin/Animation";
import Swal from "sweetalert2";
import WorkshopBody from "../../../components/admin/workshop/PendingBody";
const $ = require("jquery");
$.DataTable = require("datatables.net");

class PendingWorkshop extends Component {
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
      const response = await getApWorkshopList();
      console.log(response.data);
      this.setState({ workshop: response.data.dataBundle || [] });
      this.setState({ loading: false });
    } catch (e) {
      console.log(e);
    }
  };

  approvedWorkshop = async (id, x, y) => {
    console.log(id);
    const data = {
      date: x,
      time: y,
    };
    const response = await approvedWorkshop(id, data);

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
          approvedAlert={this.approvedAlert}
          key={currentworkshop.id}
        />
      );
    });
  }

  approvedAlert = (id, x, y) => {
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
        text: "Do you want to Approved this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, approved it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.approvedWorkshop(id, x, y);
          swalWithBootstrapButtons.fire(
            "Approved!",
            "Workshop has been Approved.",
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
                <b>PENDINGS</b>
              </h3>
            </Col>
            <Col md="1"></Col>
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
export default PendingWorkshop;
