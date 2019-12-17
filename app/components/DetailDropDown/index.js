
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './DetailPage.css'
function DetailDropDown() {
    let [currentKPI, setCurrentKPI] = useState('Productivity');

    function changeHandeler(e) {
        console.log(e.target.value);
        let value = e.target.value;
        setCurrentKPI(value);
    }

    return (
        <div className="my-2">
            <div className="form-row mb-2">
                <div className="col-4">
                    <Form.Control as="select" onChange={changeHandeler}>
                        <option>Productivity</option>
                        <option>Quality</option>
                        <option>Job Knowledge and Skills</option>
                        <option>Problem Solving</option>
                        <option>Entrepreneurship and Initiative</option>
                        <option>Teamwork</option>
                        <option>Communication</option>
                        <option>Discipline</option>
                    </Form.Control>
                </div>
                <div className="col-4">
                    <Form.Control as="select" onChange={changeHandeler}>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>Augest</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </Form.Control>
                </div>
                <div className="col-4">
                    <Form.Control as="select" onChange={changeHandeler}>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                    </Form.Control>
                </div>



            </div>
            <div className="card">
                <div className="card-header">
                    <h3>{currentKPI}</h3>
                </div>

                <div className="card-body">Some text</div>

            </div>
        </div>
    );
}


export default DetailDropDown;