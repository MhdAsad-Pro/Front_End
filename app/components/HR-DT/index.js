import React from 'react';
import { Nav} from 'react-bootstrap';
import './dropdown.css'
//import { Link } from 'react-router-dom';

export default function HRDT () {
  return (
  
    <Nav className='hrDT' >
    <Nav.Item>
      <Nav.Link href="/depart-main">Department</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='/hr-team'>Team</Nav.Link>
    </Nav.Item>
  </Nav>
  


  );
}