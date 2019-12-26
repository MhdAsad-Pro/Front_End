import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import './card.css'


function HRcards() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <h4>Review Summary</h4>
          </Card.Header>
          <Card.Body>
            <Table>
              <tbody>
                <tr>
                  <td>Total Employee</td>
                  <td>350</td>

                </tr>
                <tr>
                  <td>No of review generated</td>
                  <td>300</td>

                </tr>
                <tr>
                  <td>No of done</td>

                  <td>250</td>
                </tr>
                <tr>
                  <td>No of not done</td>

                  <td>50</td>
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