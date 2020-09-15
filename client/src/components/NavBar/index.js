import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
// import TimeLeft from '../Timer/TimeLeft'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';  
import Timer from '../Timer/timer';


// import Timer from '../Timer/timer'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* <Nav className="navbar navbar-expand-lg navbar-light bg-light"></Nav> */}
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ProcrastiHaters</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink tag={Link} to="/Scheduler">Scheduler</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Quote">Quotes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/useJournal">Journal</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Timer/Register
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink tag={Link} to="/Login">Login</NavLink>  
                </DropdownItem>
                <DropdownItem>
                 
                <NavLink tag={Link} to="/Signup">SignUp</NavLink>
                </DropdownItem>
                 <DropdownItem divider />
                <DropdownItem>
                  <Timer />
                </DropdownItem>
              </DropdownMenu>
              
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Work Harder on Moving Forward</NavbarText>
        </Collapse>
        
      </Navbar>
    </div>
  );
}

export default Example;