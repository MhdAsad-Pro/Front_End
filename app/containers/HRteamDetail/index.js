import React from 'react';
import TeamCard from '../../components/TeamCard';
import HRgraph from '../../components/HRgraph';
import HRteam from '../../components/HR-Team';

export default function HRteamDetail() {

  return (
    <div className='mainDiv py-5'>
    <HRteam/>  
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
