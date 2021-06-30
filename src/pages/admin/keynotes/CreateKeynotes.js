/** @format */

import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { addKeynotes } from "../../../service/keynote/keynotes";
import Swal from "sweetalert2";

class CreateKeynotes extends Component {
  state = {
    name: "",
    affiliation: "",
    email: "",
    bio: "",
    image: "",
  };

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onChangeAffiliation = (e) => {
    this.setState({
      affiliation: e.target.value,
    });
  };
  onChangeEmail = (e) => {
    console.log(e);
    this.setState({
      email: e.target.value,
    });
  };
  onChangeBio = (e) => {
    this.setState({
      bio: e.target.value,
    });
  };
  onChangeImage = (e) => {
    if (e.target.type === "file") {
      const scope = this;
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        scope.setState({ image: reader.result });
      };
    } else {
      this.setState({ image: e.target.value });
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const keynotes = {
      name: this.state.name,
      affiliation: this.state.affiliation,
      email: this.state.email,
      bio: this.state.bio,
      imageUrl: this.state.image,
    };

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
          text: "Do you want to Add this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Add it!",
          cancelButtonText: "No, Cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            addKeynotes(keynotes);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire("Cancelled", "not Add :)", "error");
          }
        });
    } catch (ex) {
      // error handling
      console.log(e);
    }

    this.setState({ name: "" });
    this.setState({ affiliation: "" });
    this.setState({ bio: "" });
    this.setState({ email: "" });
    this.setState({ image: "" });
  };
  render() {
    return (
      <html>
        <head></head>
        <body>
          <Row>
            <Col md="2"></Col>
            <Col md="8">
              <br></br>
              <center>
                <b>CREATE KEYNOTES</b>
              </center>

              <form onSubmit={this.onSubmit} className="was-validated">
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationName"
                    placeholder="Required Conference Heading"
                    required
                    onChange={this.onChangeName}
                  ></input>
                  <div className="invalid-feedback">Please enter Name.</div>
                </div>
                <div className="mb-3">
                  <label>Affiliation</label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationAffiliaion"
                    placeholder="Required "
                    required
                    onChange={this.onChangeAffiliation}
                  ></input>
                  <div className="invalid-feedback">
                    Please enter Affiliation.
                  </div>
                </div>

                <div className="mb-3">
                  <label>Bio</label>
                  <textarea
                    className="form-control is-invalid"
                    id="validationEmail"
                    placeholder="Required  textarea"
                    required
                    onChange={this.onChangeBio}
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter a bio in the textarea.
                  </div>
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control is-invalid"
                    id="validationEmail"
                    placeholder="Required Email"
                    required
                    onChange={this.onChangeEmail}
                  ></input>
                  <div className="invalid-feedback">Please enter Email.</div>
                </div>
                <div className="mb-3">
                  <label>Select Image</label>
                  <input
                    type="file"
                    className="form-control is-invalid"
                    id="validationImage"
                    placeholder="Required Image"
                    required
                    onChange={this.onChangeImage}
                  ></input>
                  <div className="invalid-feedback">Please Select Image.</div>
                </div>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            </Col>
            <Col md="2"></Col>
          </Row>
        </body>
      </html>
    );
  }
}

export default CreateKeynotes;
