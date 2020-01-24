import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link } from 'react-router-dom';
//import Header from '../Header';
import user1 from '../../images/user1.jpg';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import './side.css';

export default function SideBar() {
  return (
    <SideNav
      className="mt-5"
      onSelect={selected => {
        // start of  code
      }}
    >
      <SideNav.Toggle />
      <br />
      <br />
      <br /> <br /> <br />
      {/* for the img prav */}
      <div class="logo-image">
        <img src={user1} class="img-fluid" />
      </div>

      <SideNav.Nav defaultSelected="Dashboard">
        <br />

        <NavItem eventKey="Dashboard">
          <NavIcon>
          <Link to='/hrdashboard'> <i className="fa fa-tachometer" style={{ fontSize: '1.25em' , color:'white' }} /></Link>  
          </NavIcon>
          <NavText>
            <Link to="/hrdashboard">Dashboard</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="Message">
          <NavIcon>
            <Link to='/message'> <i className="fa fa-envelope-o" style={{ fontSize: '1.25em' , color:'white'}} /> </Link>
          </NavIcon>
          <NavText>
            <Link to="/message"> Message</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="Add Employee">
          <NavIcon>
            <Link to='/add'>  <i className="fa fa-plus" style={{ fontSize: '1.25em' , color:'white'}} /></Link>
          </NavIcon>
          <NavText>
            <Link to="/add">Add Employee</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey=" Reminder">
          <NavIcon>
            <i className="fa fa-tachometer" style={{ fontSize: '1.25em' , color:'white'}} />
          </NavIcon>
          <NavText><Link to='/hr-dashboard'> HR Dashboard for team and </Link></NavText>
        </NavItem>
        <NavItem eventKey="  Initiate Review">
          <NavIcon>
            <Link to='/kpilist'> <i className="fa fa-pencil" style={{ fontSize: '1.25em', color:'white' }} /></Link>
          </NavIcon>
          <NavText>
            {' '}
            <Link to="/kpilist"> Initiate Review</Link>{' '}
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}