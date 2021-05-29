/** @format */

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Status from "../user/Status";

class PendingUserBody extends Component {
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
          <b>
            <Status status={this.props.user.requestedUserRole}></Status>
          </b>
        </td>
        <td>
          <Button
            className="m-1 "
            variant="warning"
            onClick={() => {
              this.props.changeUserRole(
                this.props.user.id,
                this.props.user.requestedUserRole
              );
            }}
          >
            <ThumbUpAltIcon />
          </Button>
        </td>
      </tr>
    );
  }
}

export default PendingUserBody;
