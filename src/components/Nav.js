import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Nav = ({ nav, setNav }) => {
    return(
        <nav id="nav" style={{ display: nav ? "flex" : "none" }}>
            <a className="link" 
                href="https://github.com/angelmgl/rick-and-morty.git" 
                target="_blank" rel="noreferrer">Like</a>

            <a className="link" 
                href="https://twitter.com/angelmgljpr/" 
                target="_blank" rel="noreferrer">See more</a>

            <FaTimes className="close" onClick={setNav} />
        </nav>
    )
}

export default Nav;