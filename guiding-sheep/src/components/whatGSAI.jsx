import React from 'react';
import '../css/whatGSAI.css'
import whatGSAIimg from '../assets/imageplaceholder.jpg'

const WhatGSAI = () => {
    return (
        <section id="whatGSAI__container">
            <div className="whatGSAI__content">
                <h1 className="whatGSAI__title">
                    What is GS AI?
                </h1>
                <p className="whatGSAI__paragraph">
                    Guiding Sheep AI offers insightful, faith-driven responses with unmatched clarity and respect, ensuring a personalized and confidential spiritual support experience.
                </p>
                <img src={whatGSAIimg} alt="" className="whatGSAI__img" />
            </div>
        </section>
    );
}

export default WhatGSAI;
