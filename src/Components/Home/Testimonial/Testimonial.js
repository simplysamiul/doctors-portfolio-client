import React from 'react';
import './Testimonial.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto qui nisi deserunt blanditiis mollitia nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]

const Testimonial = () => {
    return (
        <div className="container p-5">
            <div className="testimonial">
                <div className="section-header mb-5 pb-4">
                    <h5>TESTIMONIAL</h5>
                    <h1>What's Our Patients <br /> Says </h1>
                </div>
                <div className="card-deck">
                    <div className="row">
                        {
                            testimonialData.map(testimonialData => <TestimonialCard testimonialData={testimonialData} key={testimonialData.name}></TestimonialCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;