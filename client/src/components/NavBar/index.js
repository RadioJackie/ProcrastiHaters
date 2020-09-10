import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';

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


// import Timer from '../Timer/timer'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
            <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ProcrastiHaters</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="./pages/quotes">Quotes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Journal</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="./pages/Register">Register</NavLink>  
                </DropdownItem>
                <DropdownItem>
                 Option 2 
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
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