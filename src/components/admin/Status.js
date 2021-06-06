/** @format */

import React from "react";
import Chip from "@material-ui/core/Chip";
import { green, blue, grey, red, yellow } from "@material-ui/core/colors";

function colorForStatus(status) {
  switch (status) {
    case "researcher":
      return green;
    case "attendee":
      return blue;
    case "presenter":
      return red;
    case "ws_user":
      return yellow;
    case "reviewer":
      return blue;
    case "Admin":
      return red;
    case "Editor":
      return blue;
    default:
      return grey;
  }
}

function Status({ status }) {
  return (
    <Chip
      label={status}
      style={{ backgroundColor: colorForStatus(status)[400], color: "dark" }}
    />
  );
}

export default Status;
