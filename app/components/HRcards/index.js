import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import './card.css'
function HRcards(props) {

  return (
    <Row className='hrcard'>
      <Col>
        <Card>
          <Card.Header>
            <h4 >Review Summary</h4>
          </Card.Header>
          <Card.Body>
            <Table>
              <tbody>
                <tr>
                  <td>Total Employee</td>
                  <td>{props.TotalEmployee}</td>
                </tr>
                <tr>
                  <td>No of review generated</td>
                  <td>{props.NoReview}</td>

                </tr>
                <tr>
                  <td>No of done</td>

                  <td>{props.Done}</td>
                </tr>
                <tr>
                  <td>No of not done</td>

                  <td>{props.NotDone}</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  );
}
export default HRcards;