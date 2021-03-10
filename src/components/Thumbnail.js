import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = ({ name, img, charId }) => (
    <Link to={`/rick-and-morty/characters/${charId}`} style={{textDecoration: 'none'}}>
        <div className="thumbnail">
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    </Link>
);

export default Thumbnail;