import React from 'react';

import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';


const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days and 24hours',
        icon: faClock,
        background: 'primary',
        id: '1'
    },
    {
        title: 'Visit Our Location',
        description: 'College gate,Tongi-Gazipur,Dhaka-1216',
        icon: faMapMarker,
        background: 'dark',
        id: '2'
    },
    {
        title: 'Contact Us Now',
        description: '+880 173 xxx xxxx',
        icon: faPhone,
        background: 'primary',
        id: '3'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info} key={info.id}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;