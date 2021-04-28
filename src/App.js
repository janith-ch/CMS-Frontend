import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
      <>
        <Router>


          <Navbar/>
          <Switch>

            <Route path='/' exact component={Home} />
            {/*<Route path='/products' exact component={Product} />*/}
            {/*<Route path='/Aboutus' exact component={Aboutus} />*/}
            {/*<Route path='/PageDescription' exact component = {PageDescription}/>*/}
          </Switch>
        </Router>
      </>


  );
}

export default App;
