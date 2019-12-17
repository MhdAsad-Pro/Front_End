import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';



export default function Login() {

    return (
        <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>
      
        <Button variant="primary" type="submit">
          Login to Dashboard
        </Button>
      </Form>
    );
}