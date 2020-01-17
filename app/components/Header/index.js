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
            title={<i className="fa fa-user Nav"/>}
            id="basic-nav-dropdown" >
            <NavDropdown.Item href="/profile"><i class="fa fa-user-circle" aria-hidden="true" style={{fontSize:'20px'}}></i>User Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">
            <i class="fa fa-cog" aria-hidden="true" style={{fontSize:'20px'}}></i>Setting
            </NavDropdown.Item>
            
            <NavDropdown.Item href="#"><i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
