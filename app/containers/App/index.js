/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasePage from '../BasePage';
import DashBoard from '../DashBoard';
//import DetailPage from'../DetailPage';
//import Login from '../Login';
//import './fontawesome/css/all.min.css';


export default function App() {
  return (
    // <DetailPage/>
    <BasePage>
        <DashBoard/> 
      </BasePage>
        
       
    //  <Login/>
  );
}
