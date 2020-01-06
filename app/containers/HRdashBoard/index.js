import React from 'react';
import HRdepart from '../../components/HRdepart'
import HRcards from '../../components/HRcards';
import HRgraph from '../../components/HRgraph';

export default function HRdashBoard() {

  return (
    <div className='MainDiv py-5'>
      <HRdepart/>
    
    <div className='row'>
      <div className='col-md-6'>
        <HRcards />
      </div>
      <div className='col-md-6'>
        <HRgraph />
      </div>
    </div>
    </div>
  
  );
}
