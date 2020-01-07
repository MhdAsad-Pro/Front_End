import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
function HRteam() {
  let [currentTeam, setCurrentTeam] = useState('Software Engineer');

  function changeHandeler(e) {
    console.log(e.target.value);
    let value = e.target.value;
    setCurrentTeam(value);
  }

  return (
    <div className="myDiv">
      <div className="form-row mb-2">
        <div className="col-12">
          <Form.Control as="select" onChange={changeHandeler} className="My-Form">
            <option>Software Engineer</option>
            <option>Front-End Engineer</option>
            <option>Back-End Engineer</option>
            <option>Graphic Designer</option>
            <option>QA Engineer</option>
          </Form.Control>
        </div>
      </div>
      <h4>{currentTeam}</h4>
    </div>

  );
}

export default HRteam;
