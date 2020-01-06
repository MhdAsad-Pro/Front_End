import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './widget.css';
function WidgetKpi() {
  let [currentKPI, setCurrentKPI] = useState('Productivity');

  function changeHandeler(e) {
    console.log(e.target.value);
    let value = e.target.value;
    setCurrentKPI(value);
  }

  return (
    <div className="my-2 ">
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
      </div>
      <div className="card">
        <div className="card-header">
          <h3>{currentKPI}</h3>
        </div>
        <div className="card-body">
          <input className="form-control mb-2" type="number" placeholder="1" />
          <textarea className="w-100 form-control" placeholder="Some Text" />
          <div className=" mt-2">
            <button className="btn btn-primary mr-2">Done</button>
            <button className="btn btn-primary mr-2">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetKpi;
