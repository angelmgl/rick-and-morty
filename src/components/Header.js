import React from 'react';

import Nav from './Nav';
import RM from '../img/rick-and-morty.png';

const Header = (props) => {
    return(
        <header>
            <div>
                <img className="logo" src={RM} alt="Rick and Morty" />
                <Nav />
            </div>
        </header>
    )
}

export default Header;