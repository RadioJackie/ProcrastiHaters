import React, { component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Quote from "./pages/Quote";
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
// import Nav from "./components/Nav";
import Carousel from "./components/carousel";
import NavBar from "./components/NavBar"
import Scheduler from "./Scheduler"
import Journal from "./pages/Journal"
// import Navbar from "./components/NavBar";
import Timer from "./components/Timer/timer"







import './App.css'


function App() {
  return (
    <Router>
      <Carousel />
      <NavBar />
      <div id="container">
      {/* <Nav /> */}
      <Route exact path='/Scheduler' component={Scheduler}></Route>
      <Route exact path='/Quote' component={Quote}></Route>
      <Route exact path='/Login' component={Login}></Route>
      <Route exact path='/SignUp' component={SignUp}></Route>
      <Route exact path='/useJournal' component={Journal}></Route>
      <Route exact path='/Timer' component={Timer}></Route>
     </div>
    </Router>
  );
}

export default App;