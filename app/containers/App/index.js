/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasePage from '../BasePage';
import Login from '../Login';
import DashBoard from '../DashBoard';
import DetailPage from '../DetailPage';
import HRdashBoard from '../HR-DashBoard'
//import HRdepartDetail from '../DepartDetail';
import AddEmployee from '../AddEmployee';
import HRDepartMain from '../HR-DepartMain';
import HRteamDetail from '../HRteamDetail';
import ManagerDashBoard from '../ManagerEmpList';
import WidgetCell from '../WidgetCell';
import Message from '../GenerateMsg';
import LineManager from '../LineManager';
import ForgetPassword from '../ForgetPassWord';
import Review from '../ReviewForm';
import KPIList from '../KPIListPage'
import User from '../UserProfile';
import ManagerMain from '../ManagerDashBoard';
import TeamEmployeeList from '../TeamEmployee';
import DepartEmployeeList from '../DepartEmployee';
import ManagerTrackSystem from '../ManagerTrack';
import KPIListPage from '../KPIListPage';
import HRBoard from '../HRDashBoard';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/forget">
          <ForgetPassword />
        </Route>

        <Route path="/dashboard">
          <BasePage>
            <DashBoard />
          </BasePage>
        </Route>
        <Route path="/detail-page">
          <BasePage>
            <DetailPage />
          </BasePage>
        </Route>
        {/** HR ROUTES START*/}
       
        <Route path="/hr-team">
          <BasePage>
            <HRteamDetail />
          </BasePage>
        </Route>

        <Route path="/depart-main">
          <BasePage>
            <HRDepartMain />
          </BasePage>
        </Route>
        {/* Team Employee List Form Route */}

        <Route path="/team-emp">
          <BasePage>
            <TeamEmployeeList />
          </BasePage>
        </Route>
        {/* Team Employee List Form Route */}

        <Route path="/depart-emp">
          <BasePage>
            <DepartEmployeeList />
          </BasePage>
        </Route>

        {/*HR Main dashboard Form Route */}

        <Route path='/hrdashboard'>
          <BasePage>
            < HRBoard />
          </BasePage>

        </Route>

        <Route path='/hr-dashboard'>
          <BasePage>
          <HRdashBoard />
          </BasePage>
        </Route>
        {/*  Routes for Manger */}

        <Route path="/manager">
          <BasePage>
            <ManagerDashBoard />
          </BasePage>
        </Route>
         {/* Manager Dashboard Form Route */}

         <Route path="/manager-dashboard">
          <BasePage>
            <ManagerMain />
          </BasePage>
        </Route>
        {/* Manager tracking s List Form Route */}

        <Route path="/track">
          <BasePage>
            <ManagerTrackSystem />
          </BasePage>
        </Route>

        {/* LineManager Route */}

        <Route path="/line-manager">
          <BasePage>
            <LineManager />
          </BasePage>
        </Route>
        {/* generate Message Route */}

        <Route path="/message">
          <BasePage>
            <Message />
          </BasePage>
        </Route>
        {/* generate Message Route */}

        <Route path="/add">
          <BasePage>
            <AddEmployee />
          </BasePage>
        </Route>
        {/* User Profile */}

        <Route path="/profile">
          <BasePage>
            <User />
          </BasePage>
        </Route>


        {/* Widget Route */}

        <Route path="/widget">
          <BasePage>
            <WidgetCell />
          </BasePage>
        </Route>
        {/* Review Form Route */}

        <Route path="/form">
          <BasePage>
            <Review />
          </BasePage>
        </Route>
        {/* KPI List Form Route */}

        <Route path="/kpilist">
          <BasePage>
            <KPIList />
          </BasePage>
        </Route>
        {/*kpi List List Form Route */}

        <Route path="/kpi-list">
          <BasePage>
            <KPIListPage />
          </BasePage>
        </Route>
      </Switch>
    </Router>
  );
}
