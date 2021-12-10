import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Teacherdetails.css'

const TeacherDetail = (props) => {
    console.log(props.teacher);
    const {img, name} = props.teacher
    return (
        <div>
            <Col>
      <Card>
        <Card.Img className='cart-img'  variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          Haider completed his bachelor's and master's in nuclear physics from the University of Dhaka in 1969 and 1970 respectively. He earned his Ph.D. from Australian National University in 1984.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default TeacherDetail;