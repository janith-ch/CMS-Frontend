/** @format */

import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRoutes from "../routes/BaseRoutes";

//import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Router>
        <BaseRoutes />
      </Router>
    </>
  );
}

export default App;
