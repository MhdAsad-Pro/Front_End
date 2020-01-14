import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './HR-Team.css'
//import { Link } from 'react-router-dom';
function HRteam() {
  let [currentTeam, setCurrentTeam] = useState('Software Engineer');

  function changeHandeler(e) {
    console.log(e.target.value);
    let value = e.target.value;
    setCurrentTeam(value);
  }

  return (
    <div className="">
      <div className="Team">
        <div className="col-12">
          <Form.Control as="select" onChange={changeHandeler}>
            <option>Software Engineer</option>
            <option>Front-End Engineer</option>
            <option>Back-End Engineer</option>
            <option>Graphic Designer</option>
            <option>QA Engineer</option>
          </Form.Control>
        </div>
      </div>
      <h6 className='Heading1'>{currentTeam}</h6>
    </div>
  );
}

export default HRteam;
