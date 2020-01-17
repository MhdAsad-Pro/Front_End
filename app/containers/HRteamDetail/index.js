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
    <div className=''>
      <HRteam />
      <div className='row'>
        {(ele => (
          <div className='col-md-6'>
            <TeamCard
              TotalEmployee={ele.TotalEmployee}
              NoReview={ele.NoReview}
              Done={ele.Done}
              NotDone={ele.NotDone}
            />
          </div>
        ))}
        <div className='col-md-6 graph'>
          <Link to="/team-emp" className="btn btn-primary py-02"> View Total Employee</Link>
        </div>
      </div>
    </div>


  );
}
