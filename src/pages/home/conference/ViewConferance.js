/** @format */

import React, { Component } from "react";
import product_card from "../../../data/product_data";
import { Image } from "react-bootstrap";
import "./ViewConference.css";
import Countdown from "react-countdown";

class ViewConference extends Component {
  state = {};
  render() {
    const listItems = product_card.map((item) => (
      <div className="card" key={item.id}>
        <div className="card_img">
          <Image src={item.thumb} />
        </div>
        <div className="card_header">
          <div className="wn">
            <h1>{item.product_name}</h1>
          </div>
          <div className="wd">
            <p>{item.description}</p>
          </div>
          <p className="price">
            {item.price}
            <span>{item.currency}</span>
          </p>
          <div>
            <Countdown date={Date.now() + 4000000000} />
          </div>
          <div className="btn-dev-dev">More Details</div>
        </div>
      </div>
    ));
    return <div className="main_content">{listItems}</div>;
  }
}

export default ViewConference;
