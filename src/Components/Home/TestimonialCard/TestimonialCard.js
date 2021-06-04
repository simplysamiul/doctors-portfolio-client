import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = (props) => {
    const {quote, img, name, from} = props.testimonialData
    return (
        <div className="col-md-4 card">
            <div className="card-body">
            <p className="text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <div className="row">
                    <div className="col-md-5 ">
                        <img className="mx-3" src={img} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h5 style={{color:"#1CC7C1"}}>{name}</h5>
                        <p className="text-secondary">{from}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TestimonialCard;