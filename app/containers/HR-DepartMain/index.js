import React from 'react';
import HRdepart from '../../components/HRdepart'
import HRcards from '../../components/HRcards';
import HRgraph from '../../components/HRgraph';
import { Card } from 'react-bootstrap'

export default function HRdashBoard() {

  return (

    <div>
      <HRdepart />
      <div className='row'>

        <div className='col-md-6'>
          <HRcards />
        </div>
        <div className='col-md-6 graph'>
          <Card>
            <Card.Body>
              <HRgraph />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
