import React from 'react';
import Header from '../../components/Header';
import './basepage.css';
import SideBar from '../../components/SideNav';
//import { Link } from 'react-router-dom';
export default function BasePage(props) {
  return (
    <div className="overflow-hidden">
      <Header />

      <SideBar />

      <div className="container main-container">{props.children}</div>
    </div>
  );
}
