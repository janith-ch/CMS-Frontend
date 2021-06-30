/** @format */

import React, { Component } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import KeyCard from "../../../components/admin/keynote/KeyCard";
import Animation from "../../../components/admin/Animation";
import { getKeynotes, deleteKey } from "../../../service/keynote/keynotes";
import Swal from "sweetalert2";
class ViewKeynotes extends Component {
  state = {
    Keynotes: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchKeynote();
  }

  fetchKeynote = async () => {
    try {
      this.setState({ loading: true });
      const response = await getKeynotes();
      console.log(response.data);
      this.setState({ Keynotes: response.data.dataBundle || [] });
      this.setState({ loading: false });
    } catch (e) {
      console.log(e);
    }
  };
  CardItems() {
    return this.state.Keynotes.map((item) => {
      return (
        <Col md="3">
          <KeyCard item={item} key={item.id} deleteAlert={this.deleteAlert} />
        </Col>
      );
    });
  }
  removeKey = async (id) => {
    const response = await deleteKey(id);
    console.log(response.data);
    try {
      this.setState({
        Keynotes: this.state.Keynotes.filter((el) => el.id !== id),
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
          this.removeKey(id);
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

  addKeynotes() {
    this.props.history.push("/admin/keynotes/create");
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
                <b>KEYNOTES</b>
              </h3>
            </Col>
            <Col md="1">
              <Button
                className=" btn btn-md"
                variant="warning"
                onClick={() => {
                  this.addKeynotes();
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

export default ViewKeynotes;
