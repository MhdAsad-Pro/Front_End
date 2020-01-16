import React from 'react';
import TeamCard from '../../components/TeamCard';
import HRgraph from '../../components/HRgraph';
import '../HRteamDetail/detail.css'

export default function HRdepartDetail() {

  return (
    <div className='mainDiv'>
       <h4></h4>
    <div className='row'>
     
      <div className='col-md-6'>
      <TeamCard/>
      </div>
 <div className='col-md-6 graph'>
   <HRgraph/>
 </div>
    </div>
    </div>
   
  
  );
}
