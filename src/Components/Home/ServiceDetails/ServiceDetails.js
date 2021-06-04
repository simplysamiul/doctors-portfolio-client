import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = (props) => {
    const { title, image } = props.serviceData;
    return (
        <div className="col-md-4 text-center service-description">
            <img src={image} alt="" style={{height:"60px"}} className="img-fluid" />
            <h5>{title}</h5>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolores, optio eos eaque mollitia eum.</p>
        </div>
    );
};

export default ServiceDetails;