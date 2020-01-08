import React from 'react';
import UserProfile from '../../components/User-Profile'
import { Row, Col} from 'react-bootstrap';

export default function User(){
    return(
        <Row>
            <Col md='12'>
            <UserProfile/>
            </Col>
        </Row>

    );
}