import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Quotes from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
<<<<<<< HEAD
import Carousel from "./components/carousel";
=======
//import Button from "./components/Button"
>>>>>>> d1d31b98c37f01c0bbd7b6634da798a4ee817279

function App() {
  return (
    <Router>
      <div>
      <Carousel />
        <Nav />
        <Switch>
<<<<<<< HEAD
          {/* <Route exact path={["/", "/quotes"]}>
            <Quotes />
=======
          {/* <Route exact path={["/button" component={Button}]}></Route> */}
          <Route exact path={["/", "/books"]}>
            <Books />
>>>>>>> d1d31b98c37f01c0bbd7b6634da798a4ee817279
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
