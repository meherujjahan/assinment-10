import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CourseDetail = (props) => {
    const{img, name, duration, fee} = props.course;
    return (
        <div>

            <Col>
      <Card>
        <Card.Img className='cart-img' variant="top" src={img} />
        <Card.Body>
          <Card.Title> Course Name: {name}</Card.Title>
          <Card.Text>
           Duration: {duration} <br/>
           Course Fee: {fee}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default CourseDetail;