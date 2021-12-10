
import React, { useEffect, useState } from 'react';
import './couse.css';
import { Row, Button } from 'react-bootstrap';
import CourseDetail from '../courseDetails/CourseDetail';

const Cource = () => {
   const [courses, setCourses] =useState([]);

   useEffect(()=> {
       fetch('./fakedb2.json')
       .then(res => res.json())
       .then(data => setCourses(data))
   },[])
    return (
      <>
      <div  className='button'> <Button variant="outline-dark">Courses</Button></div>
       
        <div>
          
            <Row xs={1} md={2} className="g-4">
  {
      courses.map(course => <CourseDetail 
        key = {course.id}
        course={course}></CourseDetail>)
  }
</Row>
        </div>
        </>
    );
};

export default Cource;