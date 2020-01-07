import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';
import './dropdown.css'
import { Link } from 'react-router-dom';


export default function HRDT () {
  return (
  
    <Row className="HR-main">
      <Col md='6' sm='6'>
        <Card style={{ width: '10rem', backgroundColor:'#e3e5e6'}} >
          <Card.Body>
            <Link to='/Depart-main' className='depart' style={{color:'#21118a'}}>
              Department
        </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md='6' sm='6'>
        <Card style={{ width: '10rem',backgroundColor:'#e3e5e6'}}>
          <Card.Body>
            <Link to='/hr-team' className='depart' style={{color:'#21118a', font:'bold'}}>
              Team
        </Link>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  


  );
}