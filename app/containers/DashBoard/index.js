import React from 'react';
import KPIReview from '../../components/KPIReview'
import Graph from '../../components/Emp-ProgressGrpah';
//import App from '../App';
//import {Col,Row, Container} from 'react-bootstrap'
export default function DashBoard() {
  return (
     //
    <section>
      <div className='row'>
        <div className='col-md-12'>
        <Graph/>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
        <KPIReview/>
        </div>
      </div>
    </section>
  );
}
