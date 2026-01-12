import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MainHome = () => {
    return (
        <div className="">
            <Navbar />
            <Outlet ></Outlet>
            {/* <Footer /> */}
        </div>
    );
};

export default MainHome;