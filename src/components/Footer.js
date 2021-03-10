import React from 'react';

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = (props) => {
    return(
        <footer>
            <div className="social">
                <a href="https://twitter.com/AngelMglJpr" target="_blank" rel="noreferrer">
                    <FaTwitter className="icons" />
                </a>

                <a href="https://www.facebook.com/angel.alemany.79/" target="_blank" rel="noreferrer">
                    <FaFacebook className="icons" />
                </a>
                
                <a href="https://www.instagram.com/angel_mgl/" target="_blank" rel="noreferrer">
                    <FaInstagram className="icons" />
                </a>
                
                <a href="https://www.linkedin.com/in/angelmgl/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="icons" />
                </a>
            </div>
            <p>Angel Mgl 2021&copy;</p>
        </footer>
    )
}

export default Footer;