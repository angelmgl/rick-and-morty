import React from 'react';

const Card = ({ name, image, status, specie, gender }) => {
    return(
        <div className="card">
            <div className="card-header">
                <div className="status" style={{ backgroundColor: status === "Alive" ? "#0f0" : "#f00"}} />
                <img src={image} alt={name} />
            </div>
            <div className="card-body">
                <h2>{name}</h2>
                <p>Specie: {specie}</p>
                <p>Gender: {gender}</p>
            </div>
        </div>
    );
}

export default Card;