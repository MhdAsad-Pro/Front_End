import React, { useState } from 'react';
import { OverlayTrigger, Button } from 'react-bootstrap';
import WidgetKpi from './WidgetKpi';
import './widget.css';

const popover = (
  <div className="widget m-2">
    <div className="card mb-2">
      <div className="card-body">
        <h4>Review Me</h4>
        <WidgetKpi />
        <div className="text-right pt-1">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
);

const Widget = () => (
    <OverlayTrigger trigger="click" placement="auto" overlay={popover}>
      <Button variant="success">Hey! Let's Generate Review</Button>
    </OverlayTrigger>
);

export default Widget;
