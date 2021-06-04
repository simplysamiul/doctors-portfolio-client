import React from 'react';
import Featured from '../../../images/Featured.png';
import './FeaturedServices.css';

const FeaturedServices = () => {
    return (
        <div className="featured-services mt-5 pt-5 pb-0 pb-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src={Featured} alt="" />
                    </div>
                    <div className="col-md-6 pt-3 featured-text">
                        <h2>Exceptional Dental <br />Care, On Your Terms</h2>
                        <p className="text-secondary pt-5">It is a long established fact that a reader will be distracted by the readable content of apages when looking at it's layout. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit tempore quos expedita? Excepturi optio, maxime omnis commodi et minus beatae sint quia recusandae id repellat adipisci iste reprehenderit possimus similique quod debitis! Doloribus ab modi nostrum id facilis quidem dolore, ducimus ullam quaerat numquam quis, labore inventore doloremque minus placeat veritatis. Soluta, perspiciatis incidunt.</p>
                        <button className="mt-5">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedServices;