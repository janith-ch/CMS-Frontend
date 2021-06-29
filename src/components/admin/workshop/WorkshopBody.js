/** @format */

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

class WorkshopBody extends Component {
  state = {};

  render() {
    return (
      <tr>
        <td>{this.props.ws.firstName}</td>
        <td>{this.props.ws.lastName}</td>
        <td>{this.props.ws.email}</td>
        <td>{this.props.ws.country}</td>
        <td>{this.props.ws.title}</td>
        <td>{this.props.ws.date}</td>
        <td>{this.props.ws.time}</td>
        <td>
          <a href={this.props.ws.fileUrl}>
            <PictureAsPdfIcon />
          </a>
        </td>

        <td>
          <Button
            className="m-1 "
            variant="success"
            id="edit"
            onClick={() => {
              this.props.editWorkshop(this.props.ws.id);
            }}
          >
            <EditIcon />
          </Button>

          <Button
            className="m-1 "
            variant="danger"
            id="delete"
            onClick={() => {
              this.props.deleteAlert(this.props.ws.id);
            }}
          >
            <DeleteForeverIcon />
          </Button>
        </td>
      </tr>
    );
  }
}

export default WorkshopBody;
