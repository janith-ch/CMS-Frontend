/** @format */

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteIcon from "@material-ui/icons/Delete";
import Status from "../Status";

class UserBody extends Component {
  state = {
    userRole: `${this.props.user.userRole}`,
  };
  render() {
    return (
      <tr>
        <td>{this.props.user.firstName}</td>
        <td>{this.props.user.lastName}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.country}</td>

        <td>
          <b>
            <Status status={this.props.user.userRole}></Status>
          </b>
        </td>
        <td>
          <Button
            className="m-1 "
            variant="success"
            onClick={() => {
              this.props.editUser(this.props.user.id);
            }}
          >
            <DeleteIcon />
          </Button>

          <Button
            className="m-1 "
            variant="danger"
            onClick={() => {
              this.props.deleteAlert(this.props.user.id);
            }}
          >
            <DeleteForeverIcon />
          </Button>
        </td>
      </tr>
    );
  }
}

export default UserBody;
