/** @format */

import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { addConference } from "../../../service/conference/conference";
import Swal from "sweetalert2";

class CreateConference extends Component {
  state = {
    heading: "",
    date: new Date(),
    time: null,
    venue: "",
    aboutConference: "",
    image: "",
    organizer: "",
  };

  onChangeHeading = (e) => {
    this.setState({
      heading: e.target.value,
    });
  };
  onChangeDate = (e) => {
    console.log(e);
    this.setState({
      date: e.target.value,
    });
  };
  onChangeTime = (e) => {
    console.log(e);
    this.setState({
      time: e.target.value,
    });
  };
  onChangeVenue = (e) => {
    this.setState({
      venue: e.target.value,
    });
  };
  onChangeAboutConference = (e) => {
    this.setState({
      aboutConference: e.target.value,
    });
  };
  onChangeOrganizer = (e) => {
    this.setState({
      organizer: e.target.value,
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

    const conference = {
      heading: this.state.heading,
      date: this.state.date,
      time: this.state.time,
      venue: this.state.venue,
      description: this.state.aboutConference,
      organizer: this.state.organizer,
      status: "pending",
      image: this.state.image,
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
            addConference(conference);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire("Cancelled", "not Add :)", "error");
          }
        });
    } catch (ex) {
      // error handling
      console.log(e);
    }

    this.setState({ heading: "" });
    this.setState({ time: "" });
    this.setState({ date: "" });
    this.setState({ venue: "" });
    this.setState({ aboutConference: "" });
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
                <b>ADD Conference</b>
              </center>

              <form onSubmit={this.onSubmit} className="was-validated">
                <div className="mb-3">
                  <label>Conference Heading</label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationHeading"
                    placeholder="Required Conference Heading"
                    required
                    onChange={this.onChangeHeading}
                  ></input>
                  <div className="invalid-feedback">
                    Please enter Conference Heading.
                  </div>
                </div>
                <div className="mb-3">
                  <label>Organizer</label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationHeading"
                    placeholder="Required organizer name "
                    required
                    onChange={this.onChangeOrganizer}
                  ></input>
                  <div className="invalid-feedback">
                    Please enter Organizer name.
                  </div>
                </div>

                <div className="mb-3">
                  <label>About</label>
                  <textarea
                    className="form-control is-invalid"
                    id="validationTextarea"
                    placeholder="Required  textarea"
                    required
                    onChange={this.onChangeAboutConference}
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter a about in the textarea.
                  </div>
                </div>
                <div className="mb-3">
                  <label>Venue</label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationVenue"
                    placeholder="Required Venue"
                    required
                    onChange={this.onChangeVenue}
                  ></input>
                  <div className="invalid-feedback">Please enter Venue.</div>
                </div>
                <div className="mb-3">
                  <label>Time</label>
                  <input
                    type="time"
                    className="form-control is-invalid"
                    id="validationVenue"
                    placeholder="Required Time"
                    required
                    onChange={this.onChangeTime}
                  ></input>
                  <div className="invalid-feedback">Please Select Time.</div>
                </div>
                <div className="mb-3">
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control is-invalid"
                    id="validationVenue"
                    placeholder="Required Date"
                    required
                    onChange={this.onChangeDate}
                  ></input>
                  <div className="invalid-feedback">Please Select Date.</div>
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

export default CreateConference;
// <Row>
//   <Col md="2"></Col>
//   <Col md="8">
//     <br></br>
//     <center>
//       <b>ADD Conference</b>
//     </center>
//     <Form onSubmit={this.onSubmit}>
//       <Form.Group>
//         <Form.Label>Conference Heading</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter  Heading"
//           value={this.state.heading}
//           onChange={this.onChangeHeading}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Venue</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Venue"
//           value={this.state.venue}
//           onChange={this.onChangeVenue}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Date</Form.Label>
//         <Form.Control
//           type="date"
//           placeholder="Select Date"
//           value={this.state.date}
//           onChange={this.onChangeDate}
//         />
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Time</Form.Label>
//         <Form.Control
//           type="time"
//           placeholder="Select Time"
//           value={this.state.time}
//           onChange={this.onChangeTime}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>about</Form.Label>
//         <Form.Control
//           type="text-area"
//           placeholder="Enter about"
//           value={this.state.aboutConference}
//           onChange={this.onChangeAboutConference}
//         />
//          <br></br>

//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Image</Form.Label>
//         <br></br>
//         <Form.Control
//           type="file"
//           placeholder="Select Image"
//           value={this.state.image}
//           onChange={this.onChangeImage}
//         />
//       </Form.Group>

//        <br></br>
//       <br></br>
//       <Button variant="primary" type="submit">
//         Create
//       </Button>
//     </Form>

//   </Col>
//   <Col md="2"></Col>
// </Row>
