import React from 'react';
import EmployeeList from '../../components/EmployeeList';
import HRdepart from '../../components/HRdepart'

export default function DepartEmployeeList(){
    return(
        <section>
            <HRdepart/>
  <EmployeeList/>
        </section>
      
    )
}