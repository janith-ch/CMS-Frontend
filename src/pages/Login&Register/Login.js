/** @format */

import React, { Component } from "react";
import "./Login.css";
import { addUser } from "../../service/User";
import Swal from "sweetalert2";

import axios, { post } from "axios";
import { addWorkshop } from "../../service/workshop/workshop";

class Login extends Component {
  state = {
    firstName: "",
    email: "",
    lastName: "",
    type: "1",
    file: null,
    password: "",
    url: "",
    country: "",
    workshopName: "",
    workshopDescription: "",
  };

  inputsHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      type: e.target.value,
    });
  };
  // onChageFile = (e) => {
  //   console.log(e.target.files[0]);
  //   this.setState({
  //     file: e.target.files[0],
  //   });
  //   console.log(this.state.selectedFile);
  //   addPdf(e.target.files[0]);
  // };

  onChageFile = (e) => {
    this.setState({ file: e.target.files[0] });
    const response = this.fileUpload(e.target.files[0]).then((result) => {
      console.log(result.data.fileDownloadUri);
      this.setState({
        url: result.data.fileDownloadUri,
      });
    });
  };

  fileUpload(file) {
    const url = "http://localhost:9090/uploadFile/";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return post(url, formData, config);
  }
  onChangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  onChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onChangeCountry = (e) => {
    this.setState({
      country: e.target.value,
    });
  };

  onChangeWorkshopTitle = (e) => {
    this.setState({
      workshopName: e.target.value,
    });
  };

  onChangeWorkshopDescription = (e) => {
    this.setState({
      workshopDescription: e.target.value,
    });
  };

  add = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
    // this.onSubmit();
  };

  remove = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  // submitPdf = async (e) =>{

  // }

  onSubmit = async (e) => {
    // e.preventDefault();

    if (this.state.type === "1") {
      console.log("working");
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        userRole: "Attendee",
        password: this.state.password,
        country: this.state.country,
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
              addUser(user);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                "Cancelled",
                "User not Add :)",
                "error"
              );
            }
          });
      } catch (ex) {
        // error handling
        console.log(e);
      }
    }

    if (this.state.type === "2") {
      console.log("working");
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        userRole: "Attendee",
        password: this.state.password,
        country: this.state.country,
        filename: this.state.selectedFile,
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
              addUser(user);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                "Cancelled",
                "User not Add :)",
                "error"
              );
            }
          });
      } catch (ex) {
        // error handling
        console.log(e);
      }
    }

    if (this.state.type === "3") {
      console.log("working");
      const workshop = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        country: this.state.country,
        userRole: "Attendee",
        email: this.state.email,
        title: this.state.workshopName,
        description: this.state.workshopDescription,
        fileUrl: this.state.url,
      };

      console.log(workshop);
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
              addWorkshop(workshop);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                "Cancelled",
                "User not Add :)",
                "error"
              );
            }
          });
      } catch (ex) {
        // error handling
        console.log(e);
      }
    }

    this.setState({ firstName: "" });
    this.setState({ lastName: "" });
    this.setState({ email: "" });
    this.setState({ userRole: "" });
    this.setState({ password: "" });
    this.setState({ country: "" });
  };

  render() {
    return (
      <div className="hero-containers">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form className="dev-form" action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#link" className="social">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#link" className="social">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#link" className="social">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                className="input-dev"
                type="text"
                placeholder="First Name"
                onChange={this.onChangeFirstName}
              />
              <input
                className="input-dev"
                type="text"
                placeholder="Last Name"
                onChange={this.onChangeLastName}
              />
              <input
                className="input-dev"
                type="email"
                placeholder="Email"
                onChange={this.onChangeEmail}
              />
              <input
                className="input-dev"
                type="password"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
              <input
                className="input-dev"
                type="country"
                placeholder="country"
                onChange={this.onChangeCountry}
              />
              <br />

              <div className="select">
                <select
                  name="type"
                  id="slct"
                  defaultValue={"DEFAULT"}
                  onChange={this.inputsHandler}
                >
                  <option value="DEFAULT" disabled>
                    I want to Register As
                  </option>
                  <option value="1">Attendee</option>
                  <option value="2">Researcher</option>
                  <option value="3">Workshop Conductor</option>
                  {/*<option value="3">Reviwer</option>*/}
                </select>
              </div>

              <div
                className="form-group mt-3"
                hidden={this.state.type === "2" || this.state.type === "3"}
              >
                <label className="mr-2">Upload the Research Paper file:</label>
                <h6 className="h6-dev">*PDF file format only</h6>
                <input
                  className="input-dev"
                  type="file"
                  name="file"
                  onChange={this.onChageFile}
                />
              </div>
              <div
                className="form-group mt-3"
                hidden={this.state.type === "1" || this.state.type === "2"}
              >
                <label className="mr-2">Upload Your Workshop Proposal:</label>
                <h6 className="h6-dev">*PDF file format only</h6>
                <input
                  className="input-dev"
                  type="file"
                  name="file"
                  onChange={this.onChageFile}
                />
                <input
                  className="input-dev"
                  type="text"
                  placeholder="Workshop Title"
                  onChange={this.onChangeWorkshopTitle}
                />
                <input
                  className="input-dev"
                  type="text"
                  placeholder="Workshop Description"
                  onChange={this.onChangeWorkshopDescription}
                />
              </div>

              <br />
              <button className="button-dev" onClick={() => this.onSubmit()}>
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="dev-form" action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#link" className="social">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#link" className="social">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#link" className="social">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              <span>or use your account</span>
              <input className="input-dev" type="email" placeholder="Email" />
              <input
                className="input-dev"
                type="password"
                placeholder="Password"
              />
              <a href="#link">Forgot your password?</a>
              <button className="button-dev">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p className="p-dev">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost button-dev"
                  id="signIn"
                  onClick={() => this.remove()}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p className="p-dev">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost button-dev"
                  id="signUp"
                  onClick={() => this.add()}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
