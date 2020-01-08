import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './depart.css'
function HRdepart() {
  let [currentDepart, setCurrentDepart] = useState('Enterprise');

  function changeHandeler(e) {
    console.log(e.target.value);
    let value = e.target.value;
    setCurrentDepart(value);
  }

  return (
    <div className="">
      <div className="Team">
        <div className="col-12">
          <Form.Control as="select" onChange={changeHandeler} className="">
            <option>Enterprise</option>
            <option>IT Department</option>
            <option>Ecommerce Service</option>
            <option>Mobile</option>
            <option>Small Business</option>
            <option>Teamwork</option>
          </Form.Control>
        </div>
      </div>
      <h6 className='Heading1'>{currentDepart}</h6>
    </div>

  );
}

export default HRdepart;
