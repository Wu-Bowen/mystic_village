import React, { useState } from 'react';
import richard from './../../../assets/images/richard.jpg';
import { CustomForm } from './customform';
import './../../styles/contact.scss';

export const Contact = (): JSX.Element => {
    return (
        <div className="contact">
            <h1> Our Team </h1>
            <div className="teamContainer">
                <div className="team">
                    <img src={richard} style={{ borderRadius: '6px' }} />
                    <h2> Richard Wu</h2>
                    <h3> (860)-857-0369 </h3>
                    <h3> Kaerholding88@gmail.com </h3>
                </div>
                <div className="team">
                    <img src={richard} style={{ borderRadius: '6px' }} />
                    <h2> Marianne Malerba </h2>
                    <h3> (860)-608-9661 </h3>
                    <h3> yourkeyteam@gmail.com </h3>
                </div>
                <div className="team">
                    <img src={richard} style={{ borderRadius: '6px' }} />
                    <h2> Joseph Malerba </h2>
                    <h3> (860)-912-7315 </h3>
                    <h3> jmmalerba@gmail.com </h3>
                </div>
            </div>
            <h1> Any Questions? </h1>
            <CustomForm />
        </div>
    );
};
