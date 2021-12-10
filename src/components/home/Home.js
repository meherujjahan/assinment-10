import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    return (
            <div className='background'>
                <div className='home-text'>
                    <h3> The Best learning Institution</h3>
                <h1> Welcome To Our Dhaka University</h1>
                <p>We Belive There Is Nothing More Important Than Educations</p>
                </div>
             <div className='home-img'>
                 <img src="https://i.dawn.com/primary/2016/03/56df20c28d29d.jpg" alt="" />
                <div className='DU-text-2'>
                    <h1>Public University Of Dhaka</h1>
                    <b>Information</b>
    <p>The University of Dhaka is a public university located in Dhaka, Bangladesh. It is the oldest university in Bangladesh. On the first day of July 1921, the university opened its doors to students. Today, it is the largest public research university in Bangladesh, with a student body of 37,018 and a faculty of 1,992. <Link to ='/aboutUs'><h5>Read More...</h5></Link></p></div> 
             </div>

            </div>
   
    );
};

export default Home;