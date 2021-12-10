import React, {  } from 'react';
import { Card, Col } from 'react-bootstrap';

const Event = (props) => {
  const {img, date, eventName} = props.event;

    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{eventName}</Card.Title>
          <Card.Text>
           {date}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col> 
        </div>
    );
};

export default Event;