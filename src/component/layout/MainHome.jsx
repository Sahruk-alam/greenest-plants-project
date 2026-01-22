import React from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import Loading from '../pages/Loading';
// import Animation from '../Animation/Animation';
// import PlantDetail from '../pages/PlantDetail';

const MainHome = () => {
    const {state}=useNavigation();
    return (
        <div className="bg-base-200">
            <Navbar />
           {
             state === 'loading' ? <Loading></Loading> : <Outlet />
           }
            <Footer />
        </div>
    );
};

export default MainHome;