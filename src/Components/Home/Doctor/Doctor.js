import React from 'react';
import doctor from '../../../images/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-md-4 ">
            <img className="img-fluid mb-3" src={doctor} alt="" />
            <h3 className="text-center">Dr. Coudi</h3>
            <p className="text-center"> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
            
        </div>
    );
};

export default Doctor;