import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import TeacherDetail from '../TeacherDetails/TeacherDetail';


const Teacher = () => {
   const [teachers, setTeachers] = useState([]);
   useEffect(() => {
       fetch('./fakebd.json')
       .then(res =>res.json())
       .then(data =>setTeachers(data))
   },[])

    return (
        <>
            <div className='home-img'>
    <img src="https://ssl.du.ac.bd/fontView/images/leader/1638107718VC_Sir_PP_Picture_1.original.jpg" alt="" />
<div className='DU-text-2'>
    <h2>Professor Dr. Md. Akhtaruzzaman</h2>
    <h4>Vice Chancellor</h4>
    <p>Welcome to the University of Dhakas website, featuring the oldest, largest and the premier multidisciplinary university of Bangladesh!  Founded in 1921, The University of Dhaka has always had the mission of uplifting the educational standards of the people of the region.Du is committed to providing quality education and to nurturing creativity for producing successful graduates who will serve our society and the world.The University of Dhaka has always had the mission of uplifting the educational standards of the people of the region.</p>
</div>
        </div>

<div>
<div  className='button'> <Button variant="outline-dark">Vice Chancellor</Button></div>
    <Row xs={1} md={2} className="g-4">
  {
      teachers.map(teacher =><TeacherDetail 
      teacher= {teacher}
      key={teacher.id}
      ></TeacherDetail>)
  }
    </Row>
</div>

        </>
    );
};

export default Teacher;