import React from 'react';
import './Services.css';
import Flouride from '../../../images/Flouride.png';
import Cavity from '../../../images/Cavity.png';
import Teath from '../../../images/Teath.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        title: "Fluoride Treatment",
        image: Flouride,
        id: "1"
    },
    {
        title: "Cavity Filling",
        image: Cavity,
        id: "2"
    },
    {
        title: "Teath Whitening",
        image: Teath,
        id: "3"
    },
]

const Services = () => {
    return (
        <section className="service-container mt-4">
            <div className="service-text text-center">
                <h5 className="">Our Services</h5>
                <h2 className="">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center service-details">
                <div className="w-75 row">
                    {
                        serviceData.map(serviceData => <ServiceDetails serviceData={serviceData} key={serviceData.id}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;