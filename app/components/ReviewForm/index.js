import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './form.css'
import { Card, Container, Col, Row, ButtonToolbar, Button } from 'react-bootstrap';

export default class ReviewForm extends React.Component {
    constructor() {
        super();
        this.state = {
            rating: 1
        };
    }
    onStarClick(nextValue, prevValue) {
        this.setState({ rating: nextValue });
    }
    render() {
        const { rating } = this.state;
        return (
            <div className='ReviewForm'>
                <Container>
                    <Card >
                        <Card.Header className='ReviewHeader'>
                            Performance Competencies
              </Card.Header>
                        <Card.Body>
                            {/*productivity */}
                            <div className='TheReview'>
                                <div className='product'>
                                    <h5> 1) Productivity </h5>
                                    <Row>
                                        <Col md='04'>
                                            <p>Needs Improvement</p>
                                        </Col>
                                        <Col md='04'>
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </Col>
                                        <Col md='04'>
                                            <p>Exceeds Expectations</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='textarea'>
                                    <h6>Brief explanation</h6>
                                    <textarea rows="4" cols="80"></textarea>
                                </div>

                                {/*   Quality */}
                                <div className='product'>
                                    <h5 className='Padding'>2) Quality </h5>
                                    <Row>
                                        <Col md=''>
                                            <p>Needs Improvement</p>
                                        </Col>
                                        <Col md=''>
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </Col>
                                        <Col md=''>
                                            <p>Exceeds Expectations</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='textarea'>
                                    <h6>Brief explanation</h6>
                                    <textarea rows="4" cols="80"></textarea>
                                </div>
                                {/*Job Knowledge and Skills*/}
                                <div className='product'>
                                    <h5 className='Padding'>3) Job Knowledge and Skills</h5>
                                    <Row>
                                        <Col md=''>
                                            <p>Needs Improvement</p>
                                        </Col>
                                        <Col md=''>
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </Col>
                                        <Col md=''>
                                            <p>Exceeds Expectations</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='textarea'>
                                    <h6>Brief explanation</h6>
                                    <textarea rows="4" cols="80"></textarea>
                                </div>


                                {/*Problem Solving*/}
                                <div className='product'>
                                    <h5 className='Padding'>4) Problem Solving</h5>
                                    <Row>
                                        <Col md=''>
                                            <p>Needs Improvement</p>
                                        </Col>
                                        <Col md=''>
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </Col>
                                        <Col md=''>
                                            <p>Exceeds Expectations</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='textarea'>
                                    <h6>Brief explanation</h6>
                                    <textarea rows="4" cols="80"></textarea>
                                </div>
                                {/*Entrepreneurship and Initiative*/}
                                <div className='product'>
                                    <h5 className='Padding'>5) Entrepreneurship and Initiative</h5>
                                    <Row>
                                        <Col md=''>
                                            <p>Needs Improvement</p>
                                        </Col>
                                        <Col md=''>
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </Col>
                                        <Col md=''>
                                            <p>Exceeds Expectations</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='textarea'>
                                    <h6>Brief explanation</h6>
                                    <textarea rows="4" cols="80"></textarea>
                                </div>


                                {/*Teamwork*/}
                                <div className='product'>
                                    <h5 className='Padding'>6) Teamwork</h5>
                                    <Row>
                                        <Col md=''>
                                            <p>Needs Improvement</p>
                                        </Col>
                                        <Col md=''>
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </Col>
                                        <Col md=''>
                                            <p>Exceeds Expectations</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='textarea'>
                                    <h6>Brief explanation</h6>
                                    <textarea rows="4" cols="80"></textarea>
                                </div>

                                {/*Communication*/}
                                <div className='product'>
                                    <h5 className='Padding'>7)  Communication</h5>
                                    <Row>
                                        <Col md=''>
                                            <p>Needs Improvement</p>
                                        </Col>
                                        <Col md=''>
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </Col>
                                        <Col md=''>
                                            <p>Exceeds Expectations</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='textarea'>
                                    <h6>Brief explanation</h6>
                                    <textarea rows="4" cols="80"></textarea>
                                </div>
                                {/*Discipline*/}
                                <div className='product'>
                                    <h5 className='Padding'>8) Discipline</h5>
                                    <Row>
                                        <Col md=''>
                                            <p>Needs Improvement</p>
                                        </Col>
                                        <Col md=''>
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </Col>
                                        <Col md=''>
                                            <p>Exceeds Expectations</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='textarea'>
                                  
                                     
                                    <h6>Brief explanation</h6>
                                             
                                    <textarea rows="4" cols="80"></textarea>
                                 
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="ReviewButton" active>
                                Submit
  </Button>
                        </Card.Footer>
                    </Card>
                </Container>
            </div>
        );
    }
}
