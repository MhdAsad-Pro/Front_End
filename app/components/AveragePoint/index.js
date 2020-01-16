import React from 'react';
import { Table } from 'react-bootstrap';


export default function Average() {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Average Rating </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>January</td>
                    <td>3</td>
                </tr>


            </tbody>
        </Table>

    );
}