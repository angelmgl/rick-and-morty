import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Header = (props) => {
    return(
        <header>
            <ul>
                <li><span>R&M Deck</span></li>
                <li>
                    <nav id="nav">
                        <a className="link" href="https://github.com/angelmgl/rick-and-morty.git" target="_blank" rel="noreferrer">Like</a>
                        <a className="link" href="https://twitter.com/angelmgljpr/" target="_blank" rel="noreferrer">See more</a>
                        <FaTimes className="close" />
                    </nav>
                </li>
            </ul>
        </header>
    )
}

export default Header;