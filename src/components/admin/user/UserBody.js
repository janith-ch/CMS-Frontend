/** @format */

import React, { Component } from "react";
import { Button } from "react-bootstrap";
class UserBody extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.user.firstName}</td>
        <td>{this.props.user.lastName}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.country}</td>
        <td>
          <Button className="m-2 " variant="success">
            edit
          </Button>

          <Button
            className="m-1 p-1.5"
            variant="danger"
            onClick={() => {
              this.props.deleteAlert(this.props.user.id);
            }}
          >
            delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default UserBody;
