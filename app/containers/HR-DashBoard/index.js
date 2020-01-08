import React from 'react';
import HRcards from '../../components/HRcards';
import HRgraph from '../../components/HRgraph';
import HRDT from '../../components/HR-DT';
import {Card} from 'react-bootstrap';
import './hr.css';
export default function HRdashBoard() {

    return (

        <section>
            <div className='row'>
                <div className='col-md-12'>
                    < HRDT />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>
                    <HRcards />
                </div>
                <div className='col-md-6 graph'>
 <Card>
  <Card.Body>
    <HRgraph/>
    </Card.Body>
</Card>
 </div>
 </div>
        </section>
    );
}
