import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const Nav = () => {
    const [ nav, setNav ] = useState(false);

    return(
        <nav>
            <div className="hamburger" onClick={() => setNav(!nav)}>
                {
                    nav ? <FaTimes /> : <FaBars />
                }
            </div>
            <ul className={`nav-links ${nav ? 'active' : ''}`} >
            
                <li className={`${nav ? 'open' : ''}`}>
                    <a href="https://github.com/angelmgl/rick-and-morty/" target="_blank" rel="noreferrer">Github</a>
                </li>
                <li className={`${nav ? 'open' : ''}`}>
                    <a href="https://twitter.com/angelmgljpr/" target="_blank" rel="noreferrer">See more</a>
                </li>
            
            </ul>
        </nav>
    )
}

export default Nav;