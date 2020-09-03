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


function App() {
  return (
    <Router>
      <div>
      <Carousel />
      <NavBar />
        <Nav />
        <Switch>
          {/* <Route exact path={["/", "/quotes"]}>
            <Quotes />
          </Route>
          <Route exact path="/quotes/:id">
            <Detail />
          </Route>
          <Route> */}
            {/* <NoMatch />
          </Route> */}
        </Switch>
      </div>
      <div>
      <MyCalendar />
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </div>
    </Router>
  );
}


export default App;
