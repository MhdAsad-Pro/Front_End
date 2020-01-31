import React from 'react';
import './employee.css';
import { Col, Form, Button } from 'react-bootstrap'
export default function Add() {    
                                                                                                                           
  return (
    
    <Form className='form px-4'>
      <h4 className='text-left'>Create Employee</h4>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Father Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Father Name" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="Enter D.O.B" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>CNIC</Form.Label>
          <Form.Control type="text"  data-inputmask="'mask': '99999-9999999-9'"  placeholder="XXXXX-XXXXXXX-X"  name="cnic" required="" ></Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md='6' controlId="formGridEmail">
          <Form.Label>Moblie number</Form.Label>
          <Form.Control type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required  placeholder='Enter Mobile Number'/>
        </Form.Group>

        <Form.Group  as={Col} sm='0' id="formGridCheckbox">
          <Form.Label>Gender</Form.Label>
        </Form.Group>
        <Form.Group className='radio' as={Col} sm='0' id="formGridRadio">
          <Form.Check type="radio" label="Male" name='radio'/>
          <Form.Check type="radio" label="Female" name='radio'/>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md='6' controlId="formGridPassword">
          <Form.Label>Nationality</Form.Label>
          <Form.Control type="text" placeholder=" Enter Nationality " />
        </Form.Group>
        <Form.Group  as={Col} sm='0' id="formGridCheckbox">
          <Form.Label>Status</Form.Label>
        </Form.Group>
        <Form.Group className='radio' as={Col} sm='0' id="formGridRadio">
          <Form.Check type="radio" label="Active" name='check' />
          <Form.Check type="radio" label="Inactive" name='check'/>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Department</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Joining Date</Form.Label>
          <Form.Control type="date" placeholder="Enter D.O.B" />
         
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>Religion</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Address</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Country</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Save employee
  </Button>
  <Button variant="primary" type="submit" style={{marginLeft:'2px'}}>
        Edit employee
  </Button>
    </Form>
  );
}
