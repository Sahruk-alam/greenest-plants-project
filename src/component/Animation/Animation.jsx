import React from 'react';
import Slider from './Slider';
import flower from '../../assets/flower.png';
import flowers from '../../assets/flowers.png';
const Animation = () => {
    return (
        <div className=' w-11/12 mx-auto mb-2 mt-7'>
            
            <div className="md:grid grid-cols-12 gap-3">
              <div className="shadow-xl col-span-7">
                <Slider></Slider>
                </div>

             <div className='col-span-5 gap-3 flex flex-col'>
                 <div className="h-fit shadow-xl "> 
                    
                <div className=" flex bg-base-300 justify-between items-center">
                            <div className="flex flex-1 ml-2 flex-col p-2 justify-center items-center">
                            <h4 className="text-sm text-green-600 font-semibold">wow !</h4>
                            <h2 className='text-sm font-semibold'>Get 20% off</h2>
                            <h5 className='text-xs'>price : $40</h5>
                            <button className="btn btn-success mt-3.5"> Shop Now</button>
                            </div>
                            <div className="">
                                <img className="" src={flower} alt="" />
                                </div>
                          </div>
                </div> 
                
                <div className='h-fit shadow-xl'>
                 <div className=" flex bg-base-300 justify-between items-center">
                            <div className="flex flex-1 ml-2 flex-col p-2 justify-center items-center">
                            <h4 className="text-sm text-green-600 font-semibold">Wonderful!</h4>
                            <h2 className='text-sm font-semibold'>Get 20% off</h2>
                            <h5 className='text-xs'>price : $35</h5>
                            <button className="btn btn-success mt-3.5"> Shop Now</button>
                            </div>
                            <div className="">
                                <img className="" src={flowers} alt="" /></div>
                          </div>
                </div> 

             </div>

            </div>
            
        </div>
    );
};

export default Animation;