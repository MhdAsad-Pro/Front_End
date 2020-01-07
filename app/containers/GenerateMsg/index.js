import React from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import './msg.css';
export default function Message() {
  return (
    <Container className="py-3">
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>

              <Form.Control as="textarea" rows="10" />
            </Form.Group>
            <Row>
              <Col md='6'>
                <Form.Control type='file' />
              </Col>
              <Col md='6'>
                <Button variant="primary" type="submit" className="msg">
                  Send Message
            </Button>
                <Button variant="primary" type="submit" className='draft'>
                  Save Draft
            </Button>
              </Col>

            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
