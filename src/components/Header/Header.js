import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
<>
<div className='header'>
  <Link to = '/home'>Home</Link>
<Link to = '/aboutUs'>About Us</Link>
<Link to = '/teacher'>Teacher</Link>
<Link to = '/course'>Courses</Link>
</div>


  
</>






    
    );
};

export default Header;