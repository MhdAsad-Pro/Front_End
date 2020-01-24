import React from 'react';
import { useState, useEffect } from 'react';
import TeamCard from '../../components/TeamCard';
import HRteam from '../../components/HR-Team';
import {Link} from 'react-router-dom'
import { fetchHRTeam } from '../../api';

export default function HRteamDetail() {
  const [HRTeamSummary, setHRTeamSummary] = useState([]);

  useEffect(() => {
    fetchHRTeam(1, onHRSummaryFetchSuccess);
  }, []);

  function onHRSummaryFetchSuccess(data) {
    console.log('Sucessfully fetched', data);
    setHRTeamSummary(data);
  }
  return (
    <div className='container'> 
    <div className=''>
      <HRteam/>
          <div className='team ' style={{paddingRight:'100px', paddingLeft:'100px'}}>
            <TeamCard
              TotalEmployee={HRTeamSummary.TotalEmployee}
              NoReview={HRTeamSummary.NoReview}
              Done={HRTeamSummary.Done}
              NotDone={HRTeamSummary.NotDone}
            />
          </div>
          <div className='view'>
          <Link to="/depart-emp" className='btn btn-primary' style={{float:'right', marginTop:'10px', marginRight:'100px'}}>View Employee List</Link>
        </div>
      </div>
      </div>
  );
}
