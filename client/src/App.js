import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Quotes from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Carousel from "./components/carousel";
import NavBar from "./components/NavBar"
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
    </Router>
  );
}

export default App;
