/** @format */

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/admin/dashboard" component={Admin} />
      </Router>
    </>
  );
}

export default App;
