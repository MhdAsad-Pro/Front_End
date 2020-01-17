import React, { useState, useEffect } from 'react';
import {Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import KPIReviewCard from '../KPIReviewCard';
import { fetchEmployeeReviews } from '../../api';

function KPIReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchEmployeeReviews(1, onReviewFetchSuccess);
  }, []);

  function onReviewFetchSuccess(data) {
    console.log('Sucessfully fetched', data);
    setReviews(data);
  }
  return (
    <Row>
      <Col>
        <Row>
          {reviews.map(ele => (
            <Col md="6" className="my-2">
              <KPIReviewCard
                rating={ele.rating}
                KPITitle={ele.kpi.name}
                review={ele.review}
              />
            </Col>
          ))}
        </Row>

        <div className="text-right my-2">
          <Link to="/detail-page" className="btn btn-secondary px-4">
            View History
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default KPIReview;
