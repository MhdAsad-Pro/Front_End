import React from 'react';
import { Card, Table } from 'react-bootstrap';
import './page.css'


export default function TrackingPage() {
    return (


        <div className='page'>
            <Card>
                <Card.Header>
                  <h5>Review Status</h5>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th> Name</th>
                                <th>Designation</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hira</td>
                                <td>Front-end</td>
                                <td>Done</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Done</td> 
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>Done</td>  
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}