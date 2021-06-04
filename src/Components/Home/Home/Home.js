import React from 'react';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedServices />
            <MakeAppoinment />
            <Testimonial />
        </div>
    );
};

export default Home;