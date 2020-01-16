import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './DetailPage.css';
function DetailDropDown() {
  let [filterObj, setFilterObj] = useState({
    kpi: 'Productivity',
    month: 'January',
    year: '2010',
  });

  function filterChangeHandeler(key, e) {
    console.log({ ...filterObj, key: value }, key, e.target.value);
    let value = e.target.value;
    let obj = { ...filterObj };
    obj[key] = value;
    setFilterObj(obj);
  }

  return (
    <div className="my-2 py-5">
      <div className="form-row mb-2">
        <div className="col-4">
          <Form.Control
            as="select"
            onChange={e => filterChangeHandeler('kpi', e)}
          >
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
          <Form.Control
            as="select"
            onChange={e => filterChangeHandeler('month', e)}
          >
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
          <Form.Control
            as="select"
            onChange={e => filterChangeHandeler('year', e)}
          >
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
      <div className="text-right my-4">
        <button className="btn btn-secondary px-4">Filter</button>
      </div>
      <div className="card">
        <div className="card-header">
          <h3>
            {filterObj.kpi} | {filterObj.month} | {filterObj.year}
          </h3>
        </div>

        <div className="form-row p-2">
          <div className="col-md-1">
            <div className="form-group">
            <Rater total={5} rating={2} />
            </div>
          </div>
        </div>    
        <div className="card-body">Some description will be shown here</div>
      </div>
    </div>
  );
}

export default DetailDropDown;
