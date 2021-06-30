/** @format */

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

class PendingBody extends Component {
  state = {
    date: new Date(),
    time: "",
  };
  onChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  onChangeTime = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  render() {
    return (
      <tr>
        <td>{this.props.ws.firstName}</td>
        <td>{this.props.ws.lastName}</td>
        <td>{this.props.ws.email}</td>
        <td>{this.props.ws.country}</td>
        <td>{this.props.ws.title}</td>
        <td>
          <input
            type="date"
            placeholder="add date"
            onChange={this.onChangeDate}
          ></input>
        </td>
        <td>
          <input
            type="time"
            placeholder="add time"
            onChange={this.onChangeTime}
          />
        </td>
        <td>
          <a href={this.props.ws.fileUrl}>
            <PictureAsPdfIcon />
          </a>
        </td>

        <td>
          <Button
            className="m-1 "
            variant="primary"
            id="edit"
            onClick={() => {
              this.props.approvedAlert(
                this.props.ws.id,
                this.state.date,
                this.state.time
              );
            }}
          >
            Approved
          </Button>
        </td>
      </tr>
    );
  }
}

export default PendingBody;
