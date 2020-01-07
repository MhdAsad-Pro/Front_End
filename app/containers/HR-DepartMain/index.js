import React from 'react';
import HRdepart from '../../components/HRdepart'
import HRcards from '../../components/HRcards';
import HRgraph from '../../components/HRgraph';

export default function HRdashBoard() {

  return (
    //
    <div className='MainDiv py-05'>
      <HRdepart/>
    
    <div className='row py-5'>
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
