import React from 'react';
import ManagerDashBoard from '../../components/ManagerDashBoard';
import ManagerKPI from '../../components/ManagerKPI'
import Graph from '../../components/Emp-ProgressGrpah';
import Average from '../../components/AveragePoint';
import {Col,Row} from 'react-bootstrap'
export default function ManagerMain(){
    return (
        <section>
            <Row>
                <Col md='9'>
                <Graph/>
                </Col>
                <Col md='3' className='Average'>
           <Average/>
                </Col>
            </Row>
          
            <ManagerKPI/>
            <ManagerDashBoard/>
        </section>
        
    );
}