/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import BasePage from '../BasePage';
import DashBoard from '../DashBoard';
//import AddEmployee from '../AddEmployee';
//import DetailPage from'../DetailPage';
//import Login from '../Login';
//import HRdashBoard from '../HRdashBoard';
//import HRmainDashBoard from '../HRmainDashBoard';
//import HRteamDetail from '../HRteamDetail';
//import HRdepartDetail from '../DepartDetail';
//import ManagerDashBoard from '../ManagerDashBoard'

export default function App() {
  return (
    // <DetailPage/>
    // <AddEmployee/>
    //<HRmainDashBoard/>
    //<HRteamDetail />
    //<HRdashBoard/> 
   // <HRdepartDetail/>
   //<ManagerDashBoard/>
    <BasePage>
     <DashBoard/>
    </BasePage>


    //  <Login/>
  );
}
