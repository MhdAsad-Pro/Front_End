import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import './team.css'

function TeamCard() {
  return (
    <Row>
      <Col>
    
        <Card>
          <Card.Header>
            <h4>Review Summary</h4>
          </Card.Header>
          <Card.Body>
            <Table>       
              <thead>
               <th>Name</th>
               <th>Status</th>
               <th>Email</th>
               <th>Picture</th>
               </thead>
               <tbody>
                 <tr>
                 <td>abc</td>
                 <td>Done</td>
                 <td>abc@gmail.com</td>
                 <td>.jpg</td>
                 </tr>
                 <tr>
                 <td>abc</td>
                 <td>Done</td>
                 <td>abc@gmail.com</td>
                 <td>.jpg</td>
                 </tr>
                 <tr>
                 <td>abc</td>
                 <td>Done</td>
                 <td>abc@gmail.com</td>
                 <td>.jpg</td>
                 </tr>
                 <tr>
                 <td>abc</td>
                 <td>Not Done</td>
                 <td>abc@gmail.com</td>
                 <td>.jpg</td>
                 </tr>
                 <tr>
                 <td>abc</td>
                 <td>Pending</td>
                 <td>abc@gmail.com</td>
                 <td>.jpg</td>
                 </tr>
                </tbody>
              
             
            </Table>
          </Card.Body>
        </Card>
      </Col>

    </Row>

  );
}

export default TeamCard;