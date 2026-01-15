import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const DetailsCard = ({ plant }) => {
    return (
        <div className='gap-3 p-3 shadow-2xl'>
            <div>
            <img className='w-full h-[350px] md:h-[250px] lg:h-[350px] xl:h-[450px] object-cover' 
            src={plant.image} alt={plant.plantName} />
            <h2 className='font-semibold text-center mt-1.5 '>{plant.plantName}</h2>
            <div className='flex px-2 justify-between mt-2 font-semibold'>
            <p>Price: ${plant.price}</p>
            <p className='flex items-center gap-1'><FaStar className='text-yellow-500' />{plant.rating}</p>
            </div>
            </div >
            <div className='justify-center flex mt-4'>
            <Link to={`/details/${plant.plantId}`} className='btn btn-success '>View Details</Link>
            </div>
        </div>
    );
};

export default DetailsCard;