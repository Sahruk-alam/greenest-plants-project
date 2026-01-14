import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
// import Animation from '../Animation/Animation';
// import PlantDetail from '../pages/PlantDetail';

const MainHome = () => {
    return (
        <div className="bg-base-200">
            <Navbar />
            <Outlet ></Outlet>
            <div className=''>
                {/* <Animation /> */}
            </div> 
            {/* <PlantDetail /> */}
            <Footer />
        </div>
    );
};

export default MainHome;