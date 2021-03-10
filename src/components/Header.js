import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';
import RM from '../img/rick-and-morty.png';

const Header = (props) => {
    return(
        <header>
            <div>
                <Link to="/rick-and-morty">
                    <img className="logo" src={RM} alt="Rick and Morty" />
                </Link>
                <Nav />
            </div>
        </header>
    )
}

export default Header;