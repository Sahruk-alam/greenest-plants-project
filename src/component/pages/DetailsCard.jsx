import React from 'react';

const DetailsCard = ({ plant }) => {
    return (
        <div className='border gap-3'>
            <div>
                <img src={plant.image} alt={plant.plantName} />
            <h2>{plant.plantName}</h2>
            <p>Price: ${plant.price}</p>
            <p>{plant.description}</p>
            <p>{plant.rating}</p>
            </div>
            <button className='btn btn-success'>Buy Now</button>
        </div>
    );
};

export default DetailsCard;