import React, {  } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css';


const AboutUs = () => {

    return (
        <>
        <div>
            <div className='about-img'>
                 <img src="https://chokkor.com/wp-content/uploads/2019/02/Curzon-Hall.jpg" alt="" />
                 </div>
                <div className='DU-text'>
                    <h1>Public University Of Dhaka</h1>
                    <h3>Information</h3>
    <b>The University of Dhaka is a public university located in Dhaka, Bangladesh. It is the oldest university in Bangladesh. On the first day of July 1921, the university opened its doors to students. Today, it is the largest public research university in Bangladesh, with a student body of 37,018 and a faculty of 1,992.On the first day of July 1921 the University of Dhaka opened its doors to students with Sir P.J. Hartog as the first Vice-Chancellor of the University. The University was set up in a picturesque part of the city known as Ramna on 600 acres of land.The University started its activities with 3 Faculties,12 Departments, 60 teachers, 877 students and 3 dormitories (Halls of Residence) for the students. At present the University consists of 13 Faculties, 83 Departments, 12 Institutes, 20 residential halls, 3 hostels and more than 56 Research Centres. The number of students and teachers has risen to about 37018 and 1992 respectively.The main purpose of the University was to create new areas of knowledge and disseminate this knowledge to the society through its students. Since its inception the University has a distinct character of having distinguished scholars as faculties who have enriched the global pool of knowledge by making notable contributions in the fields of teaching and research. </b></div> 
        </div>
        <div  className='button'> <Button variant="outline-dark">Events</Button></div>

        <Row className='gap-4 mx-auto my-auto'>
  
    <Col>
      <Card>
        <Card.Img variant="top" src="https://ssl.du.ac.bd/fontView/images/event/1622979269100years.PNG" />
        <Card.Body>
          <Card.Title>econd International e-Conference on Celebrating 100 years of the University of Dhaka: Reflections from the International Alumni</Card.Title>
          <Card.Text>
          11 Jan, 2021
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://ssl.du.ac.bd/fontView/images/event/1622978410japanology.PNG" />
        <Card.Body>
          <Card.Title>International e-Conference on Japanology in New Era</Card.Title>
          <Card.Text>
          18 Feb, 2021
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://ssl.du.ac.bd/fontView/images/event/16284848331628179857image(1).png" />
        <Card.Body>
          <Card.Title>3rd International e-Conference on Criminology and Forensic Science in the Global South</Card.Title>
          <Card.Text>
          05 Aug, 2021
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 
</Row>
<div className='home-img'>
    <img src="https://ssl.du.ac.bd/fontView/images/leader/1638107718VC_Sir_PP_Picture_1.original.jpg" alt="" />
<div className='DU-text-2'>
    <h2>Professor Dr. Md. Akhtaruzzaman</h2>
    <h4>Vice Chancellor</h4>
    <p>Welcome to the University of Dhakas website, featuring the oldest, largest and the premier multidisciplinary university of Bangladesh!  Founded in 1921, The University of Dhaka has always had the mission of uplifting the educational standards of the people of the region...<Link to='/teacher'>Read More</Link></p>
</div>
</div>
        </>
    );
};

export default AboutUs;