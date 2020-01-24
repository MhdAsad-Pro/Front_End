import React from 'react';
import ManagerCard from '../../components/ManagerCard';
import { Link } from 'react-router-dom';
//import ManagerGraph from '../../components/ManagerGraph'
export default function ManagerDashBoard() {
    return (
        <section>
        <div className="py-3">
            <h5>Employee Reviews</h5>
            <ManagerCard />
        </div> 
        <div className='btn btn-primary'>
          <Link to='/track'><h6 style={{color:'white', paddingRight:'2px'}}>View List</h6> </Link>
        </div>
        </section>
    );
}