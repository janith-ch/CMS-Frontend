/** @format */

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Navbar from "../components/home/Navbar";

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/Admin' exact component={Admin} />
          {/*<Route path='/Aboutus' exact component={Aboutus} />*/}
          {/*<Route path='/PageDescription' exact component = {PageDescription}/>*/}
        </Switch>
      </Router>
    </>
  );
}

export default App;
