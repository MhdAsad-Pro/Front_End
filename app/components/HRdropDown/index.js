import React from 'react';
import{Button, ButtonToolbar} from 'react-bootstrap';
import './dropdown.css'


export default function () {
    return (
        <ButtonToolbar>
        <Button size="lg">
          Department
        </Button>
        <Button className='btn' size="lg">
          Team
        </Button>
      </ButtonToolbar>
        

    );
}