import React from 'react';

import HRcards from '../../components/HRcards';
import HRgraph from '../../components/HRgraph';
import HRdropDown from '../../components/HRdropDown';
import './hr.css';
export default function HRdashBoard() {

    return (
        <div className='MainDiv py-5'>
            < HRdropDown />

            <div className='row'>
                <div className='col-md-6'>
                    <HRcards />
                </div>
                <div className='col-md-6'>
                    <HRgraph />
                </div>
            </div>
        </div>

    );
}
