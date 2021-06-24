/** @format */

import { Image } from "react-bootstrap";
import React, { Component } from "react";
import { getSingleUser } from "../../../service/User";

import "./UserDetails.css";

class UserDetail extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    userRole: "",
    password: "",
    country: "",
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const response = await getSingleUser(this.props.match.params.id);

      this.setState({
        id: response.data.id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        userRole: response.data.userRole,
        password: response.data.password,
        country: response.data.country,
      });
    } catch (e) {
      // error handling
      console.log(e);
    }
  };

  render() {
    return (
      <html>
        <head>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css	"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js	"></script>
        </head>
        <body>
          {" "}
          <div className="padding">
            <div className="row container d-flex ">
              <div className="col-xl-12 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-12 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                        <div className="m-b-25">
                          {" "}
                          <Image
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            className="img-radius"
                            alt="User-Profile-Image"
                          ></Image>{" "}
                        </div>
                        <h3 className="f-w-600">
                          {this.state.firstName} {this.state.lastName}
                        </h3>
                        <h4>{this.state.userRole}</h4>{" "}
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="card-block">
                        <h3 className="m-b-20 p-b-5 b-b-default f-w-600">
                          USER PROFILE
                        </h3>
                        <div className="row">
                          <div className="col-sm-12">
                            <p className="m-b-10 f-w-600">First Name</p>
                            <h4 className="text-muted f-w-400">
                              {this.state.firstName}
                            </h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <p className="m-b-10 f-w-600">Last Name</p>
                            <h4 className="text-muted f-w-400">
                              {this.state.lastName}
                            </h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <p className="m-b-10 f-w-600">Email</p>
                            <h4 className="text-muted f-w-400">
                              {this.state.email}
                            </h4>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <p className="m-b-10 f-w-600">User Role</p>
                              <h4 className="text-muted f-w-400">
                                {this.state.userRole}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <p className="m-b-10 f-w-600">Country</p>
                              <h4 className="text-muted f-w-400">
                                {this.state.country}
                              </h4>
                            </div>
                          </div>
                        </div>

                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="facebook"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-facebook feather icon-facebook facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="twitter"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-twitter feather icon-twitter twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="instagram"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-instagram feather icon-instagram instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default UserDetail;
