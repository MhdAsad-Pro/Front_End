import React from 'react';
import { useState, useEffect } from 'react';
import HRcards from '../../components/HRcards';
import HRDT from '../../components/HR-DT';
import {fetchHRDasboard} from '../../api';
import './hr.css';
export default function HRdashBoard() {
    const [Summary, setSummary] = useState([]);

    useEffect(() => {
        fetchHRDasboard(onHRFetchSuccess);
    }, []);

    function onHRFetchSuccess(data) {
        console.log('Sucessfully fetched', data);
        setSummary(data);
    }
    return (
        <section>
            <div className='row'>
                <div className='col-md-12'>
                    < HRDT />
                </div>
            </div>
            <div className='row'>
                {Summary.map(SummaryItem => (
                    <div className='col-md-12' >
                        <HRcards
                            TotalEmployee={SummaryItem.TotalEmployee}
                            NoReview={SummaryItem.NoReview}
                            Done={SummaryItem.Done}
                            NotDone={SummaryItem.NotDone}
                        />
                    </div>
                ))}
                
            </div>

        </section>
    );
}