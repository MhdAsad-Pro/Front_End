import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
//import StarRatingComponent from 'react-star-rating-component';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Link } from 'react-router-dom';
export default function ManagerKPI() {

    return (
        <section>
            <Row>
                <Col md='6'>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md='6'>
                                    <h3>Prodectivity</h3>
                                </Col>
                                <Col md='6'>
                                    <Rater total={5} rating={2} />
                                </Col>
                            </Row>
                            <h6>notes</h6>
                            <div>Some description</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md='6'>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md='6'>
                                    <h3>Prodectivity</h3>
                                </Col>
                                <Col md='6'>
                                <Rater total={5} rating={2} />
                                </Col>
                            </Row>
                            <h6>notes</h6>
                            <div>Some description</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md='6'>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md='6'>
                                    <h3>Prodectivity</h3>
                                </Col>
                                <Col md='6'>
                                <Rater total={5} rating={4} />
                                </Col>
                            </Row>
                            <h6>notes</h6>
                            <div>Some description</div>
                        </Card.Body>

                    </Card>
                </Col>
                <Col md='6'>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md='6'>
                                    <h3>Prodectivity</h3>
                                </Col>
                                <Col md='6'>
                                <Rater total={5} rating={3} />
                                </Col>
                            </Row>
                            <h6>notes</h6>
                            <div>Some description</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="text-right my-2">
                <Link to="/detail-page" className="btn btn-secondary px-4">
                    View History
          </Link>
            </div>
        </section>
    );
}