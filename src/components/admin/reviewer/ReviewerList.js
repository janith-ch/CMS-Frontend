/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class ReviewerList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>ReviewerList</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default ReviewerList;
