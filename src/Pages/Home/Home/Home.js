import React from 'react';
import Banner from '../Banner/Banner';
import PhysicalInfo from '../PhysicalInfo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhysicalInfo></PhysicalInfo>
            <Services></Services>
        </div>
    );
};

export default Home;