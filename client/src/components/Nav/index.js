import React from "react";
//import { Button } from 'react-bootstrap';
function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* <Button variant="primary">Primary</Button> */}
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
    </nav>
    </div>
  );
} 

export default Nav;
