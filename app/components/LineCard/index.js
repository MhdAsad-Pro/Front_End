import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';

function LineCard() {
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
                                <th>Designation</th>
                                <th>Email</th>
                                <th>Picture</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>abc</td>
                                    <td>Software Engineer</td>
                                    <td>abc@gmail.com</td>
                                    <td>.jpg</td>
                                    <td>Done</td>
                                </tr>
                                <tr>
                                    <td>abc</td>
                                    <td>Quality Assurance</td>
                                    <td>abc@gmail.com</td>
                                    <td>.jpg</td>
                                    <td>Done</td>
                                </tr>
                                <tr>
                                    <td>abc</td>
                                    <td>UI Engineer</td>
                                    <td>abc@gmail.com</td>
                                    <td>.jpg</td>
                                    <td>Done</td>
                                </tr>
                                <tr>
                                    <td>abc</td>
                                    <td>Project Manager</td>
                                    <td>abc@gmail.com</td>
                                    <td>.jpg</td>
                                    <td>Done</td>
                                </tr>
                                <tr>
                                    <td>abc</td>
                                    <td>Pending</td>
                                    <td>Graphic Designer</td>
                                    <td>.jpg</td>
                                    <td>Not Done</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
         );
        }

export default LineCard;