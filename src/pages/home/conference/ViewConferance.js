/** @format */

import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./ViewConference.css";
import { getConference } from "../../../service/conference/conference";
import Countdown from "react-countdown";

class ViewConference extends Component {
  state = {
    conference: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchConference();
  }

  fetchConference = async () => {
    try {
      this.setState({ loading: true });
      const response = await getConference();
      console.log(response.data);
      this.setState({ conference: response.data.dataBundle || [] });
      this.setState({ loading: false });
      console.log(this.state.conference);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const listItems = this.state.conference.map((item) => (
      <div className="card" key={item.id}>
        <div className="card_img">
          <Image src={item.image} />
        </div>
        <div className="wd">
          <p>{item.organizer}</p>
        </div>
        <div className="card_header">
          <div className="wn">
            <h1>{item.heading}</h1>
          </div>
          <div className="wd">
            <p>{item.description}</p>
          </div>
          <p className="price">{item.date}</p>
          <p className="price">{item.time}</p>
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
