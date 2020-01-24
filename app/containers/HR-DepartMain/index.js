import React from 'react';
import {useEffect,useState} from 'react';
import HRdepart from '../../components/HRdepart'
import HRcards from '../../components/HRcards';
import {fetchDepart} from '../../api'
import {Link} from 'react-router-dom'
export default function HRDepartMain() {
  const [HRDepartSummary, setHRDepartSummary] = useState([]);

  useEffect(() => {
    fetchDepart(1,onHRDepartFetchSuccess);
  }, []);

  function onHRDepartFetchSuccess(data) {
      console.log('Sucessfully fetched', data);
      setHRDepartSummary(data);
  }
  return (
    <div>
      <HRdepart />
      <div className=''>
    
          <HRcards
           TotalEmployee={HRDepartSummary.TotalEmployee}
           NoReview={HRDepartSummary.NoReview}
           Done={HRDepartSummary.Done}
           NotDone={HRDepartSummary.NotDone}
           />
        </div>
        <div className='view'>
          <Link to="/depart-emp" className='btn btn-primary' style={{float:'right', marginTop:'10px', marginRight:'100px'}}>View Employee List</Link>
        </div>
      </div>
  );
}
