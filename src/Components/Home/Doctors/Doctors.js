import React from 'react';
import './Doctors.css'
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <div className="doctors">
            <div className="container">
                <h5 style={{ color: "#1CC7C1", fontSize:"22px", fontWeight:"700"}} className="text-center mb-5">Our Doctors</h5>
                <div className="row">
                    <Doctor />
                    <Doctor />
                    <Doctor />
                </div>
            </div>
        </div>
    );
};

export default Doctors;