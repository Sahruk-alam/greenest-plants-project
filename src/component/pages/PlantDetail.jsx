import React, { use } from 'react';
import DetailsCard from './DetailsCard';
const promise=fetch('/plants.json').then(res=>res.json());
const PlantDetail = () => {
    const data =use(promise);
    console.log(data);
    return (
        <div className='my-10 w-11/12 mx-auto'>
            <h2>i am PlantDetail</h2>
            {
                data.map(plant=> <DetailsCard key={plant.id} plant={plant} ></DetailsCard>) 
            }
        </div>
    );
};

export default PlantDetail;