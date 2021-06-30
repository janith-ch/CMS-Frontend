/** @format */

import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import {
  updateConference,
  getSingleConference,
} from "../../../service/conference/conference";
import Animation from "../../../components/admin/Animation";
import Swal from "sweetalert2";

class EditConference extends Component {
  state = {
    heading: "",
    date: new Date(),
    time: null,
    venue: "",
    aboutConference: "",
    image: "",
    organizer: "",
    loading: false,
    status: "",
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      this.setState({ loading: true });
      const response = await getSingleConference(this.props.match.params.id);
      console.log(response.data);
      this.setState({
        id: response.data.dataBundle.id,
        heading: response.data.dataBundle.heading,
        date: response.data.dataBundle.date,
        time: response.data.dataBundle.time,
        organizer: response.data.dataBundle.organizer,
        venue: response.data.dataBundle.venue,
        aboutConference: response.data.dataBundle.description,
        image: response.data.dataBundle.image,
        status: this.state.status,
      });
      this.setState({ loading: false });
    } catch (e) {
      // error handling
      console.log(e);
    }
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
      id: this.props.match.params.id,
      heading: this.state.heading,
      date: this.state.date,
      time: this.state.time,
      venue: this.state.venue,
      description: this.state.aboutConference,
      organizer: this.state.organizer,
      status: this.state.status,
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
            updateConference(conference);
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
    if (this.state.loading === true) {
      return <Animation />;
    } else {
      return (
        <html>
          <head></head>
          <body>
            <Row>
              <Col md="2"></Col>
              <Col md="8">
                <br></br>
                <center>
                  <b>EDIT CONFERENCE</b>
                </center>

                <form onSubmit={this.onSubmit} className="was-validated">
                  <div className="mb-3">
                    <label>Conference Heading</label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      id="validationHeading"
                      placeholder="Required Conference Heading"
                      value={this.state.heading}
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
                      value={this.state.organizer}
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
                      value={this.state.aboutConference}
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
                      value={this.state.venue}
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
                      value={this.state.time}
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
                      value={this.state.date}
                      onChange={this.onChangeDate}
                    ></input>
                    <div className="invalid-feedback">Please Select Date.</div>
                  </div>
                  <div className="mb-3">
                    <label>Select Image</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Required Image"
                      onChange={this.onChangeImage}
                    ></input>
                    <div className="invalid-feedback">Please Select Image.</div>
                  </div>
                  <div className="mb-3">
                    <img src={this.state.image} width="200px" alt="..."></img>
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
}

export default EditConference;
