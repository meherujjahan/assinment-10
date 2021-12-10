import React from 'react';
import { Link } from 'react-router-dom';



import './Footer.css'
const Footer = () => {
    
    return (
        <>
        <div className='footer'>
            <ul>
                <ol>
                <h5>University Of Dhaka</h5>
                <p>Administrative Building (Ground Floor)</p>
                <p>Dhaka-1200, Bangladesh</p>
                <p>+88 09666911463 / 4003</p>
                <p>info@du.ac.bd</p>
                </ol>
            </ul>
            <ul>
                <ol>
                    <h5>
                        Online Services
                    </h5>
                    <div  className='service'>
                    <Link > Student Online Service</Link><br/>
                    <Link >Student SchollerShip</Link><br/>
                    <Link> Du Jobs</Link><br/>
                    <Link> Contact Us</Link></div>
                </ol>
            </ul>
            <div>
            <i class="fab fa-facebook-square icon"></i><i class="fab fa-twitter-square icon"></i><i class="fab fa-instagram-square icon"></i><i class="fab fa-whatsapp-square icon"></i><i class="fab fa-google icon"></i>
            </div>
        </div>
        <p className='copyright'> copyright&copy; 2021 University of Dhaka</p>

        </>
    );
};

export default Footer;