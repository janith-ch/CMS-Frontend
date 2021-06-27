/** @format */

import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    first_name: "",
    email: "",
    type: "1",
    selectedFile: null,
    password: "",
    country: "",
  };

  inputsHandler = (e) => {
    this.setState({
      type: e.target.value,
    });
  };
  onChageFile = (e) => {
    console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  add = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  remove = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
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
              />
              <input
                className="input-dev"
                type="text"
                placeholder="Last Name"
              />
              <input className="input-dev" type="email" placeholder="Email" />
              <input
                className="input-dev"
                type="password"
                placeholder="Password"
              />
              <input
                className="input-dev"
                type="country"
                placeholder="country"
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
                hidden={this.state.type === "1" || this.state.type === "3"}
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
                <input className="input-dev" type="file" name="file" />
                <input
                  className="input-dev"
                  type="text"
                  placeholder="Work shop Title"
                />
                <input
                  className="input-dev"
                  type="text"
                  placeholder="Work shop Description"
                />
                <input
                  className="input-dev"
                  type="text"
                  placeholder="Work shop date and time"
                />
              </div>

              <br />
              <button className="button-dev">Sign Up</button>
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
