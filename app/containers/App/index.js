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
import HRmainDashBoard from '../HRmainDashBoard';
import HRdepartDetail from '../DepartDetail';
import AddEmployee from '../AddEmployee';

import HRdashBoard from '../HRdashBoard';

import HRteamDetail from '../HRteamDetail';

import ManagerDashBoard from '../ManagerDashBoard';
import WidgetCell from '../WidgetCell';
import Message from '../GenerateMsg';
import LineManager from '../LineManager';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
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
        <Route path="/hr-main">
          <BasePage>
            <HRmainDashBoard />
          </BasePage>
        </Route>
        <Route path="/hr-depart">
          <BasePage>
            <HRdepartDetail />
          </BasePage>
        </Route>

        <Route path="/hr-team">
          <BasePage>
            <HRteamDetail />
          </BasePage>
        </Route>

        <Route path="/hr-dashbaord">
          <BasePage>
            <HRdashBoard />
          </BasePage>
        </Route>
        {/* Manger Route */}

        <Route path="/manager">
          <BasePage>
            <ManagerDashBoard />
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
            <AddEmployee/>
          </BasePage>
        </Route>



         {/* Widget Route */}

         <Route path="/widget">
          <BasePage>
            <WidgetCell/>
          </BasePage>
        </Route>

       




      </Switch>
    </Router>

    // <DetailPage/>
    // <AddEmployee/>
    //<HRmainDashBoard/>
    //<HRteamDetail />
    //<HRdashBoard/>
    // <HRdepartDetail/>
    //<ManagerDashBoard/>
    // <DashBoard/>
    //<HRmainDashBoard/>
    // <WidgetCell />
    //<Message/>
    // <BasePage>
    // <LineManager/>
    // </BasePage>
  );
}
