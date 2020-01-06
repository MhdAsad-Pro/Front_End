import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './kpi.css';
import { Link } from 'react-router-dom';
function KPIReview() {
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
      </div>
      <div className="card">
        <div className="card-header">
          <h3>{currentKPI}</h3>
        </div>
        <div className="form-row p-2">
          <div className="col-md-1">
            <div className="form-group">
              <Form.Label>Rating</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
          </div>
        </div>
        <div className="card-body">Some description will be shown here</div>
        <div className="card-footer text-right">
          <Link className="btn-dark btn" to="/detail-page">
            view detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KPIReview;
