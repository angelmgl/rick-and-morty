import React from 'react';
import { FaTimes } from 'react-icons/fa';

import RM from '../img/rick-and-morty.png';

const Header = (props) => {
    return(
        <header>
            <ul>
                <li><img src={RM} alt="Rick and Morty" className="logo" /></li>
                <li>
                    <nav id="nav" className={(props.nav ? "visible" : "" )}>
                        <a className="link" href="https://github.com/angelmgl/rick-and-morty.git" target="_blank" rel="noreferrer">Like</a>
                        <a className="link" href="https://twitter.com/angelmgljpr/" target="_blank" rel="noreferrer">See more</a>
                        <FaTimes className="close" onClick={props.setNav} />
                    </nav>
                </li>
            </ul>
        </header>
    )
}

export default Header;