import React from 'react';
import Header from '../../components/Header';
import { Form, Col, Row, Button } from 'react-bootstrap';
import './login.css';
import logo from '../../images/logo.jpg'
export default function Login() {

  return (
    <section>
      <Header />
      <Row>
        <Col md='6'>
          <div className='Image'>
            <img src={logo} />
          </div>
        </Col>
        <Col md='6'>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Row>
              <Col md='4'>
               <a href='#'> Recover Password</a>
               </Col>
               <Col md='8'>
               <Button variant="primary" type="submit">
                  Login
               </Button>
               </Col>
            </Row>



          </Form>


        </Col>
      </Row>

    </section>
  );
}
