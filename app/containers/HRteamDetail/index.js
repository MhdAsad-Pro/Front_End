import React from 'react';
import TeamCard from '../../components/TeamCard';
import HRgraph from '../../components/HRgraph';
import './detail.css'

export default function HRteamDetail() {

  return (
    <div className='mainDiv py-5'>
       <h4>Team A</h4>
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
