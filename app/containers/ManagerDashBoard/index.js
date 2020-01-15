import React from 'react';
import ManagerDashBoard from '../../components/ManagerDashBoard';
import ManagerKPI from '../../components/ManagerKPI'
import Graph from '../../components/Emp-ProgressGrpah';
export default function ManagerMain(){
    return (


        <section>
           <Graph/>
            <ManagerKPI/>
            <ManagerDashBoard/>
        </section>
        
    );
}