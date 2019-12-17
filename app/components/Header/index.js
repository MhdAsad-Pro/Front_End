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
            <NavDropdown.Item href="#action/3.1"> <i class="fas fa-user"></i>Account</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <i class="fas fa-cogs"></i> Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"> <i class="fas fa-sign-out-alt"></i>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
