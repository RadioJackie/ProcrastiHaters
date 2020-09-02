import React from "react";
import { Button } from 'reactstrap';
import Timer from '../Timer/timer'

function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Button variant="primary">Primary</Button>
      <a className="navbar-brand" href="/">
      ProcrastiHaters
      </a>
     <Timer style={{textAlign: 'right'}}></Timer>
    </nav>
    </div>
  );
} 

export default Nav;
