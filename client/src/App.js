import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quote from "./pages/Quote";
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import Nav from "./components/Nav";
import Carousel from "./components/carousel";
import NavBar from "./components/NavBar"
import MyCalendar from "./components/Calendar"
// import Navbar from "./components/NavBar";

import Qdata from "./Qdata"


import './App.css'


function App() {
  return (
    <Router>
      <Carousel />
      <NavBar />
      <Nav />
      <Route exact path='/Quote' component={Quote}></Route>
      <Route exact path='/Login' component={Login}></Route>
      <Route exact path='/SignUp' component={SignUp}></Route>
     
    </Router>
  );
  }


export default App;