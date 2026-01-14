import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Details = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen w-11/12 mx-auto mt-6'>
                details page
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Details;