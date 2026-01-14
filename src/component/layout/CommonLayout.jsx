import React from 'react';
import MainHome from './MainHome';
import Animation from '../Animation/Animation';
import PlantDetail from '../pages/PlantDetail';

const CommonLayout = () => {
    return (
        <div>
            <MainHome></MainHome>
            <Animation></Animation>
            <PlantDetail></PlantDetail>
        </div>
    );
};

export default CommonLayout;