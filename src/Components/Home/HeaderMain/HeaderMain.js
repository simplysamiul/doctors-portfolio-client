import React from 'react';
import './HeaderMain.css';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main className="row banner-area d-flex align-items-center">
            <div className="col-md-4 offset-md-1 text-area">
                <h1>Your New Smile <br /> Start's Here</h1>
                <p className="text-secondary text-md-start">Recusandae ducimus ipsa optio nobis porro vel dolorum ut soluta voluptate! Voluptates, sint. Minima tempore nam at similique ipsam.</p>
                <button>GET APPOINMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;