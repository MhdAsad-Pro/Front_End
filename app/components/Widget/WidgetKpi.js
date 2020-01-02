import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './widget.css'
function WidgetKpi() {
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
        <div>
          
          <input type='number' placeholder='1' />
        </div>

        <div className="card-body"><textarea rows="4" cols="60" placeholder='Some Text'></textarea>
        <button>Done</button>
        <button className='btn1'>Edit</button>

        </div>

      </div>
    </div>
  );
}

export default WidgetKpi;
