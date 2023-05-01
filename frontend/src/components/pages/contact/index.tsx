import React, { useState } from 'react';
import richard from './../../../assets/images/contact/richard.png';
import joe from './../../../assets/images/contact/joe.png';
import marianne from './../../../assets/images/contact/marianne.png';
import { CustomForm } from './customform';
import './../../styles/contact.scss';

export const Contact = (): JSX.Element => {
    return (
        <div className="contact">
            <h1> Our Team </h1>
            <div className="teamContainer">
                <div className="team">
                    <img src={richard} />
                    <h2> Richard Wu</h2>
                    <h3> (860)-857-0369 </h3>
                    <h3> MalerbaKaer@gmail.com </h3>
                </div>
                <div className="team">
                    <img src={marianne} />
                    <h2> Marianne Malerba </h2>
                    <h3> (860)-608-9661 </h3>
                    <h3> MalerbaKaer@gmail.com </h3>
                </div>
                <div className="team">
                    <img src={joe} />
                    <h2> Joseph Malerba </h2>
                    <h3> (860)-912-7315 </h3>
                    <h3> MalerbaKaer@gmail.com </h3>
                </div>
            </div>
            <h1> Any Questions? </h1>
            <CustomForm />
        </div>
    );
};
