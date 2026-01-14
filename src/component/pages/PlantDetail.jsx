import React, { use } from 'react';
import DetailsCard from './DetailsCard';
const promise=fetch('/plants.json').then(res=>res.json());
const PlantDetail = () => {
    const data =use(promise);
    console.log(data);
    return (
        <div className=''>
            <h2 className='text-center text-green-700 text-2xl font-semibold my-10'>Healthy Plants, Happy Life</h2>
           <div className='my-6 w-11/12 mx-auto gap-3  md:grid grid-cols-3'>
             {
                data.map(plant=> <DetailsCard key={plant.id} plant={plant} ></DetailsCard>) 
            }
           </div>
        </div>
    );
};

export default PlantDetail;