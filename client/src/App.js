import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Quotes from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Carousel from "./components/carousel";

function App() {
  return (
    <Router>
      <div>
      <Carousel />
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
