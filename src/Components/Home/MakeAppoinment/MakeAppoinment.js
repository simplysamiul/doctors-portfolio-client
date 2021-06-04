import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppoinment.css';

const MakeAppoinment = () => {
    return (
        <div className="container">
            <div className="make-appoinment">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 appoinment-text">
                        <h5 className="pb-2">APPOINMENT</h5>
                        <h1 className="pb-3 text-white">Make an appoinment <br /> Today</h1>
                        <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of apages when looking at it's layout</p>
                        <br />
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;