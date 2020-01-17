import React from 'react';
import {useEffect,useState} from 'react';
import HRdepart from '../../components/HRdepart'
import HRcards from '../../components/HRcards';
import {fetchDepart} from '../../api'
import {Link} from 'react-router-dom'
export default function HRdashBoard() {
  const [HRDepartSummary, setHRDepartSummary] = useState([]);

  useEffect(() => {
    fetchDepart(onHRDepartFetchSuccess);
  }, []);

  function onHRDepartFetchSuccess(data) {
      console.log('Sucessfully fetched', data);
      setHRDepartSummary(data);
  }
  return (
    <div>
      <HRdepart />
      <div className='row'>
      {HRDepartSummary.map(ele => (
        <div className='col-md-6'>
          <HRcards
           TotalEmployee={ele.TotalEmployee}
           NoReview={ele.NoReview}
           Done={ele.Done}
           NotDone={eles.NotDone}
           />
        </div>
      ))}
        <div className='view'>
          <Link to="/depart-emp" className='btn btn-primary px-2'>View Employee List</Link>
        </div>
      </div>
    </div>
  );
}
