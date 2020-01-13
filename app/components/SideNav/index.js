import React from 'react';
import user1 from '../../images/user1.jpg'
import './SideBar.css'
import { Link } from 'react-router-dom';
export default function SideBar() {
  return (
    <div className='navi'>
      <div className='row'>
        <div className='col-md-12'>
          <div className="user">
            <img src={user1} style={{ width: '50%' }}>
            </img>
          </div>
          </div>
          
        <br/>
          <div className='col-md-12'>
            <span>Name</span>
            </div>
        
              <div className='col-md-12'>
                   <span>Designation</span>
              </div>
              
              <div className='col-md-12'>
                   <span>Year</span>
              </div>
          </div>
          <br/>
          <br/>
          <br/>
          <div className='DashBoard'>
            <div className='row'>
              <div className='col-md-0'>
                <i class="fa fa-tachometer" aria-hidden="true"></i>
              </div>
              <div className='col-md-0'>
                <Link to="/hr-dashboard"> Dashboard</Link>
              </div>
            </div>
          </div>
          <div className='DashBoard'>
            <div className='row'>
              <div className='col-md-0'>
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className='col-md-0'>
                <Link to="/message"> Message</Link>
              </div>
            </div>
          </div>
          <div className='DashBoard'>
            <div className='row'>
              <div className='col-md-0'>    
              <i class="fa fa-plus" aria-hidden="true"></i>
              </div>
              <div className='col-md-0'>
                <Link to="/add">Add Employee</Link>
              </div>
            </div>
          </div>
          <div className='DashBoard'>
            <div className='row'>
              <div className='col-md-0'>
              <i class="fa fa-tachometer" aria-hidden="true"></i>
              </div>
              <div className='col-md-0'>
                <Link to="/widget"> Reminder</Link>
              </div>
            </div>
          </div>

          <div className='DashBoard'>
            <div className='row'>
              <div className='col-md-0'>
              <i class="fa fa-pencil" aria-hidden="true"></i>
              </div>
              <div className='col-md-0'>
                <Link to='#'> Initiate Review </Link>
              </div>
            </div>
          </div>      
    </div>

  );
}