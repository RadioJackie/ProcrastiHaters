import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Quotes from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Carousel from "./components/carousel";
import NavBar from "./components/NavBar"
import MyCalendar from "./components/Calendar"
// import Navbar from "./components/NavBar";
import Qdata from "./Qdata"
import Error from './Error'
import './App.css'


function App() {
  return (
    <Router>
      <div>
        <Carousel />
        <div>
          <NavBar />
        </div>
        <Nav />
        <Switch>
          <div>
            <Route path="/" component={Qdata} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}


export default App;