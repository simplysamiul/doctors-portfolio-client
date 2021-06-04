import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';
const InfoCard = (data) => {
    const { title, description, icon, background } = data.info;
    return (
        <div className="col-md-4 info-card">
            <div className={`d-flex text-white info-container justify-content-center align-items-center info-${background}`}>
                <div className="mr-4">
                    <FontAwesomeIcon className="info-icon" icon={icon} />
                </div>
                <div className="">
                    <h5>{title}</h5>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;