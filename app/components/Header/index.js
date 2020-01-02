import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import './header.css'

function Header() {
  return (
    <>
      <Navbar className='my-nav'>
        <Navbar.Brand href="#home" className='text-white'>
          <span>Opion_cue</span>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown
            alignRight
            title={<i className="fa fa-user Nav" />}
            id="basic-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1"> <i className="fa fa-user" />Account</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            <i className="fas fa-cogs"/> Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"> <i className="fas fa-sign-out-alt"/>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
