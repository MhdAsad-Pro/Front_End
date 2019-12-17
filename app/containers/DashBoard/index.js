import React from 'react';
import KPIReview from '../../components/KPIReview'
import App from '../../components/Emp-ProgressGrpah'
//import {Col,Row, Container} from 'react-bootstrap'
export default function DashBoard() {
  return (
    <section>
       
      <App/>
   
      <KPIReview/>
     
    </section>
  );
}
