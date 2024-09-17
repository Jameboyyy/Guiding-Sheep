import React from 'react';
import '../css/whyGSAI.css';
import whyGSAIimg from '../assets/imageplaceholder.jpg'

const WhyGSAI = () => {
    return (
        <section id="whyGSAI__container">
            <div className="whyGSAI__content">
                <h1 className="whyGSAI__title">Why GS AI?</h1>
                <p className="whyGSAI__paragraph">GS AI offers unparalleled clarity and relevance, delivering answers rooted in Christian values and principles. With a commitment to accuracy and user-centric design, it provides a reliable and engaging resource for spiritual guidance, helping you explore and understand your faith with confidence.</p>
                <img src={whyGSAIimg} alt="" className="whyGSIAI__img" />
            </div>
        </section>
    );
}

export default WhyGSAI;
