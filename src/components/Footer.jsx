import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaBandcamp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="brand"><FaBandcamp/><span>Portfolio</span></div>
            <div>
                <FaFacebookF className='social-icons'/>
                <FaInstagram className='social-icons'/>
                <FaLinkedin className='social-icons'/>
                <FaTwitter className='social-icons'/>
            </div>
            <div className="text"><p>Copyright © 2022 Rainbow-Themes. <br /> All Rights Reserved.</p></div>
        </footer>
    );
};

export default Footer;