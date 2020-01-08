import React from 'react';
import TeamCard from '../../components/TeamCard';
import HRteam from '../../components/HR-Team';
import {Card} from 'react-bootstrap';
import HRgraph from '../../components/HRgraph';

export default function HRteamDetail() {

  return (
    <div className=''>
    <HRteam/>  
    <div className='row'>
     
      <div className='col-md-6'>
      <TeamCard/>
      </div>
 <div className='col-md-6 graph'>
 <Card>
  <Card.Body>
    <HRgraph/>
    </Card.Body>
</Card>
 </div>
    </div>
    </div>
   
  
  );
}
