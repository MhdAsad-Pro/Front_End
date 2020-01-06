import React from 'react';
import{Button, ButtonToolbar} from 'react-bootstrap';
import './dropdown.css'
import { Link } from 'react-router-dom';


export default function () {
    return (
        <ButtonToolbar>
        <Link to='/hr-depart' className='btn btn-primary' size="lg">
          Department
        </Link>
        <Link to='/hr-team' className='btn' size="lg">
          Team
        </Link>
      </ButtonToolbar>
        

    );
}