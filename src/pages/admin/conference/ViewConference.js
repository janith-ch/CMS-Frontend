/** @format */

import React, { Component } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import ConCard from "../../../components/admin/conference/ConCard";
import Animation from "../../../components/admin/Animation";
import {
  getConference,
  deleteConference,
} from "../../../service/conference/conference";
import Swal from "sweetalert2";
class ViewConference extends Component {
  state = {
    conference: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchConference();
  }

  fetchConference = async () => {
    try {
      this.setState({ loading: true });
      const response = await getConference();
      console.log(response.data);
      this.setState({ conference: response.data.dataBundle || [] });
      this.setState({ loading: false });
      console.log(this.state.conference);
    } catch (e) {
      console.log(e);
    }
  };
  CardItems() {
    return this.state.conference.map((item) => {
      return (
        <Col md="4">
          <ConCard
            item={item}
            key={item.id}
            deleteAlert={this.deleteAlert}
            editConference={this.editConference}
          />
        </Col>
      );
    });
  }
  removeConference = async (id) => {
    const response = await deleteConference(id);
    console.log(response.data);
    try {
      this.setState({
        conference: this.state.conference.filter((el) => el.id !== id),
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
          this.removeConference(id);
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

  addConference() {
    this.props.history.push("/admin/conference/create");
  }
  editConference = (id) => {
    this.props.history.push("/admin/conference/edit/" + id);
  };
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
                <b>Conference</b>
              </h3>
            </Col>
            <Col md="1">
              <Button
                className=" btn btn-md"
                variant="warning"
                onClick={() => {
                  this.addConference();
                }}
              >
                <b>Create</b>
              </Button>
            </Col>
          </Row>
          <br></br>
          <Container fluid="true">
            <Row>
              <Row>{this.CardItems()}</Row>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default ViewConference;
