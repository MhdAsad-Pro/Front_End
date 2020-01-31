import React from 'react';
import { Card, Table } from 'react-bootstrap';
import './list.css'

export default function EmployeeList() {
    return (
        <div className="List">
        <Card>
            <Card.Header>
                <h5>Employee List</h5>
            </Card.Header>
            <Card.Body>

                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hina</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Not Done</td>
                            <td>Software</td>
                        </tr>
                        <tr>
                            <td>Hira</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Not Done</td>
                            <td>FrontEnd</td>
                        </tr>
                        <tr>
                            <td>Mubshra</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Done</td>
                            <td>QA</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        </div>
    );
}