import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { FaStar } from 'react-icons/fa';   
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
const Details = () => {
    const {id}=useParams();
    const [plant,setPlant]=useState();
    useEffect(()=>{
        fetch('/plants.json')
        .then(res=>res.json())
        .then(data=>{
       const selectedPlant=data.find(plant=>plant.plantId===Number(id));
               setPlant(selectedPlant);     
            
        })
        .catch(err => {
            console.error('Error fetching plants:', err);
        })             
    },[id])
  
    const handleBook=(event)=>{
        event.preventDefault();
        event.target.reset();
        toast.success('Booking consultation booked successfully!🌱');
    }

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
        <div className="card-actions items-center ">
    <h2 className="badge font-semibold text-xl">Price: ${plant?.price}</h2>
    <h3 className='text-xl font-semibold'>stock: {plant?.availableStock}</h3> 
    </div>
  </div>
</div>
    <div className='shadow-xl py-3 px-4 mt-10 max-w-sm mx-auto'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>Book a Consultation</h2>
       <form onSubmit={handleBook}>
          <fieldset className="fieldset">
          <label className="label font-medium">Name</label>
          <input type="text" required name='name' className="input" placeholder="Name" />
          <label className="label font-medium">Email</label>
          <input type="email" required name='email' className="input" placeholder="Email" />
           <button className="btn btn-success mt-4">Book Now</button>     
          </fieldset>
        </form>

            </div>
            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default Details;