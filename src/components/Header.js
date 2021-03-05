import React from 'react';

import RM from '../img/rick-and-morty.png';

const Header = () => {
    return(
        <header>
            <ul>
                <li><img src={RM} alt="Rick and Morty" className="logo" /></li>
                <li>
                    <nav className="headerNav">
                        <a className="link" 
                            href="https://github.com/angelmgl/rick-and-morty.git" 
                            target="_blank" rel="noreferrer">Like</a>

                        <a className="link" 
                            href="https://twitter.com/angelmgljpr/" 
                            target="_blank" rel="noreferrer">See more</a>
                    </nav>
                </li>
            </ul>
        </header>
    )
}

export default Header;