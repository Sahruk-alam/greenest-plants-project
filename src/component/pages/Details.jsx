import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
// import { useLoaderData, useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';   
import { useParams } from 'react-router';
import AuthProvider from '../../Authentication/AuthProvider';
import Loading from './Loading';

const Details = () => {
    // const data=useLoaderData();
    // const {loading}=useContext(AuthProvider);
//    const [loading, setLoading] = useState(true);
    const {id}=useParams();
    const [plant,setPlant]=useState();
    useEffect(()=>{
        fetch('/plants.json')
        .then(res=>res.json())
        .then(data=>{
       const selectedPlant=data.find(plant=>plant.plantId===Number(id));
               setPlant(selectedPlant);     
            //    setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching plants:', err);
            // setLoading(false);
        })             
    },[id])
    // if(loading){
    //     return <Loading></Loading>
    // }
      if(!plant) return <div className='text-center py-10'>Plant not found</div>
    return (
        <div>
            <Navbar></Navbar>
        <div className=' w-11/12 mx-auto my-15'>
         <div className="card bg-base-100 shadow-xl ">
    <figure>
    <img className=''
      src={plant?.image}
      alt={plant?.plantName} />
        </figure>
        <div className="card-body justify-center items-center">
        <h2 className="card-title text-4xl gap-10">{plant?.plantName} <span className='flex items-center gap-2.5'><FaStar className='text-yellow-500' /> {plant?.rating}</span></h2>
         <p className='text-2xl'>{plant?.description}</p>
        <div className="card-actions items-center">
    <h2 className="badge font-semibold text-xl">Price: ${plant?.price}</h2>
    <h3 className='text-xl font-semibold'>stock: {plant?.availableStock}</h3> 
    </div>
  </div>
</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;