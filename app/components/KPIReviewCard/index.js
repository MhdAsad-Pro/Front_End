import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card, Col, Row} from 'react-bootstrap';

export default function KPIReviewCard(props) {
    return (
      <div>
        <Card>
            <Card.Body>
              <Row>
                <Col sm='12' md="6" >
                  <h2>{props.KPITitle} </h2>
                </Col>
                <Col  sm='12' md="6" className='text-right'>
                  <StarRatingComponent name="rate1" starCount={props.rating} />
                </Col>
                <hr/>
                <Col md="12">
                    <h4>Notes</h4>
                  <div className='lead'>{props.review}</div>
                </Col>
              </Row>
            </Card.Body>
        </Card>
      </div>
    );
 
}
