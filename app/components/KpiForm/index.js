import React from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import './KpiForm.css';
export default function KpiForm() {
  return (
    <Container className="py-3">
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder=""/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Selected KPI's</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>

              <Form.Control as="textarea" rows="10" />
            </Form.Group>
          
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
