import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact d-flex align-items-center mb-5">
            <div className="container">
                <div className="section-header text-center text-white pb-5">
                    <h5>CONTACT US</h5>
                    <h1>Always Contact With Us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <from action="">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Email Address*" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Subject*" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Message*"></textarea>
                        </div>
                        <div className="form-group text-center contact-btn">
                            <button className="text-white">SUBMIT</button>
                        </div>
                    </from>
                </div>
            </div>

        </div>
    );
};

export default Contact;