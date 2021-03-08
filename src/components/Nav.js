import React, { useState } from 'react';
import { FaTimes, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [ nav, setNav ] = useState(false);

    return(
        <nav>
            <div className="meeseks" onClick={() => setNav(!nav)}>
                {
                    nav ? <FaTimes /> : 
                    <svg viewBox="0 0 500 200">
                        <circle id="eye-1" cx="200" cy="50" r="28" fill="black"></circle>
                        <circle id="eye-e" cx="280" cy="50" r="30" fill="black"></circle>  
                        
                        <circle cx="200" cy="40" r="4" fill="white"></circle>
                        <circle cx="280" cy="40" r="5" fill="white"></circle>
                        
                        <path d="M150 130 C 170 170, 330 170, 350 110" stroke="black" strokeWidth="8" fill="transparent"/>
                        
                        <path d="M150 100 C 100 130, 140 180, 150 180" stroke="black" strokeWidth="5" fill="transparent" />
                        <path d="M350 90 C 400 100, 360 150, 340 160" stroke="black" strokeWidth="5" fill="transparent" />
                        
                        <path d="M220 180 C 220 190, 280 190, 280 175" stroke="black" strokeWidth="5" fill="transparent"/>
                        
                        <path d="M170 20 C 170 0, 210 5, 225 8" stroke="black" strokeWidth="5" fill="transparent"/>  
                        <path id="eyebrow-2" d="M260 5 C 280 0, 300 0, 320 20" stroke="black" strokeWidth="5" fill="transparent"/>   
                    </svg>
                }
            </div>
            <ul className={`nav-links ${nav ? 'active' : ''}`} >
            
                <li className={`${nav ? 'open' : ''}`}>
                    <a href="https://github.com/angelmgl/rick-and-morty/" target="_blank" rel="noreferrer"><FaGithub /></a>
                </li>
                <li className={`${nav ? 'open' : ''}`}>
                    <Link to="/characters">Characters</Link>
                </li>
            
            </ul>
        </nav>
    )
}

export default Nav;