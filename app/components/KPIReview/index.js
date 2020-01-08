import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function KPIReview() {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Header>
                        <h4>Current Review</h4>
                    </Card.Header>
                    <Card.Body>
                        <Table>
                            <thead>
                                <th>KPIs</th>
                                <th>Rating</th>
                                <th>Notes</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Prodectivity</td>
                                    <td>1</td>
                                    <td>abc@gmail.com</td>

                                </tr>
                                <tr>
                                    <td> Quality</td>
                                    <td>2</td>
                                    <td>abc@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Job Knowledge and Skills</td>
                                    <td>3</td>
                                    <td>abc@gmail.com</td>

                                </tr>
                                <tr>
                                    <td>Problem Solving</td>
                                    <td>4</td>
                                    <td>Some description</td>

                                </tr>
                                <tr>
                                    <td>Entrepreneurship and Initiative</td>
                                    <td>3</td>
                                    <td>Some description</td>

                                </tr>
                                <tr>
                                    <td>Teamwork</td>
                                    <td>3</td>
                                    <td>Some description</td>
                                </tr>
                                <tr>
                                    <td> Communication</td>
                                    <td>3</td>
                                    <td>Some description</td>
                                </tr>
                                <tr>
                                    <td>Discipline</td>
                                    <td>3</td>
                                    <td>Some description</td>

                                </tr>
                            </tbody>
                        </Table>
                       
                    </Card.Body>
                </Card>
                <div className="text-right my-2">
                            <Link to='/detail-page' className="btn btn-secondary px-4">View History</Link>
                        </div>
            </Col>
        </Row>
   );
}

export default KPIReview;