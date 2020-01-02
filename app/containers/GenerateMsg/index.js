import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import './msg.css'
export default function Message() {
    return (
        <Container>
            <Card>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>

                        <Form.Control as="textarea" rows="10" />

                    </Form.Group>
                    <Button href='#' className='btn-1'> <i class="fas fa-paperclip"></i>Attachments</Button>

                    <Button variant="primary" type="submit" className='btn'>
                      Send Message
  </Button>
                    <Button variant="primary" type="submit">
                    Save Draft
  </Button>
                </Form>
            </Card>
        </Container>


    );
}