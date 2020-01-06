import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';
import './dropdown.css'
import { Link } from 'react-router-dom';


export default function () {
  return (
    <div className='koi'>
    <Row>
      <Col md='6'>
        <Card style={{ width: '10rem'}}>
          <Card.Body>
            <Link to='/hr-depart' className='depart'>
              Department
        </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md='6'>
        <Card style={{ width: '10rem'}}>
          <Card.Body>
            <Link to='/hr-team' className='depart'>
              Team
        </Link>
          </Card.Body>
        </Card>

      </Col>
    </Row>
    </div>


  );
}