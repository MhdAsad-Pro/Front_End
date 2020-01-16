import React from 'react';
import EmployeeList from '../../components/EmployeeList'
import HRteam from '../../components/HR-Team';

export default function TeamEmployeeList(){
    return(
        <section>
            <HRteam/>
            <EmployeeList/>
        </section>
        
    )
}