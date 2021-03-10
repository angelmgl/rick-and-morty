import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, image, status, specie, gender }) => {
    return(
        <Link to={`/rick-and-morty/characters/${id}`} style={{textDecoration: 'none', color: '#000'}}>
            <div className="card">
                <div className="card-header">
                    <div className="status" style={{ backgroundColor: status === "Alive" ? "#0f0" : (status === "Dead") ? '#f00' : '#ccc' }} />
                    <div className="id">{id}</div>
                    <img src={image} alt={name} />
                </div>
                <div className="card-body">
                    <h2 style={{ fontSize: name.length < 28 ? '2em':'1.5em' }}>{name}</h2>
                    <p>Specie: {specie}</p>
                    <p>Gender: {gender}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;