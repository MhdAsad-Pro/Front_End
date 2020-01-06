import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Row, Button } from 'react-bootstrap';
import './login.css';
import logo from '../../images/logo.jpg';
export default function Login() {
  return (
    <section className="m-0">
      <Row className=" align-items-center">
        <Col md="6">
          <div className="Image text-center">
            <img src={logo} className="w-50" />
            <div className="text-center p-5">
              <span>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia.
              </span>
            </div>
          </div>
        </Col>
        <Col md="6" className="p-5">
          <Form>
            <div className="form-row">
              <div className="col-12">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    className="m-0"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="m-0"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <div className="row">
                <div className="col-6">
                    <Link className=" " to="/dashboard">
                      Forget Password
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link className="btn btn-primary" type='submit' to="/dashboard">
                      Login
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </section>
  );
}
