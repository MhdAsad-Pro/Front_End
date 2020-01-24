import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useState,handleClose  } from 'react';
//import Review from '../ReviewForm';
import KpiForm from '../../components/KpiForm';
export default function KPIListPage() {
  const [show, setShow] = useState(false);

  return (
    <section>
    <>
    <br/>
     

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <KpiForm/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Draft
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>




    <div className="row">
      <div class="col-md-6">
         
        <div className="form-group">
       <label for="sel1">Department List</label>
     <select className="form-control" id="sel1">
     <option>HR Department</option>
    <option>Software Department</option>
    <option>Graphic Department</option>
    <option>Marketing Department</option>
    <option>Accounts and Finance</option>
    <option>Sales and marketing</option>
    <option>IT services</option>
    <option>Product development</option>
    <option>Quality Assurance</option>
    <option>Technical Support</option>
    <option>Research Department</option>
    <option>Operations Department</option>
    <option>Maintenance Department</option>
    
  </select>
  
</div>
</div>

 


</div>
<h1>KPI List</h1>
<div className="row">
  
      <div class="col-md-6">
       
      <div className="form-group">  
      <form action="/KPIListPage">
  <input type="checkbox" name="vehicle1" value="Smart"/> Smart <br/>
  <input type="checkbox" name="vehicle2" value="Measurable"/>Measurable <br/>
  <input type="checkbox" name="vehicle3" value="Relevant" />Relevant<br/>
  <input type="checkbox" name="vehicle1" value="Time-Bound"/>Time-Bound <br/>
  <input type="checkbox" name="vehicle2" value="Workforce stability"/> Workforce stability<br/>
  <input type="checkbox" name="vehicle3" value="Staffing efficiency" />Staffing efficiency <br/>
  <input type="checkbox" name="vehicle1" value="Productivity"/>Productivity <br/>
  <input type="checkbox" name="vehicle2" value="Quality"/> Quality<br/>
  <input type="checkbox" name="vehicle3" value="Problem Solving" />Problem Solving<br/>
  <input type="checkbox" name="vehicle1" value="Discipline"/>Discipline <br/>
  <input type="checkbox" name="vehicle2" value="Job Knowledge and Skills"/>Job Knowledge and Skills <br/>
  
  </form>
</div>
</div>
 <div class="col-md-6">
      <div className="form-group">
      <input type="checkbox" name="vehicle1" value="Teamwork"/>Teamwork <br/>
  <input type="checkbox" name="vehicle2" value="Communication"/> Communication<br/>
  <input type="checkbox" name="vehicle3" value="Discipline" />Discipline<br/>
  <input type="checkbox" name="vehicle1" value="Performance"/> Performance<br/>
  <input type="checkbox" name="vehicle2" value="Product Performancer"/>Product Performance<br/>
  <input type="checkbox" name="vehicle3" value="planning" />planning <br/>
  <input type="checkbox" name="vehicle1" value="Make better use of resources"/> Make better use of resources<br/>
  <input type="checkbox" name="vehicle2" value="Customer Satisfaction"/>Customer Satisfaction <br/>
  <input type="checkbox" name="vehicle3" value="Profitability" />Profitability<br/>
  <input type="checkbox" name="vehicle3" value=" Entrepreneurship and Initiative" /> Entrepreneurship and Initiative <br/>
  <input type="checkbox" name="vehicle2" value=" Security Support"/>  Security Support<br/>
  </div>
  <br/>
  <br/>
 
</div>

          </div>
          <div class="float-right" >
          <Button variant="primary" className='px-5 ' onClick={() => setShow(true)} >
            Save
          </Button>
         </div>
   
          
    </section>
  );
}
