import React from 'react';
import '../css/landscape.css'
import sheepImg from '../assets/brownsheepTrans.png'

const Landscape = () => {
    return (
        <div className='landscape__container'>
            <div className="landscape__left">
                <div className="landscape__left--content">
                    <h1 className="landscape__title">
                        Shepherd's Way
                    </h1>
                    <p className="landscape__paragraph">
                    Guiding Sheep is an AI-driven platform that offers personalized guidance, prayer support, and biblical knowledge for those seeking to grow in their faith. <br />

                    <br />Our AI is rooted in biblical teachings, providing users with a trusted companion for prayer, scripture exploration, and spiritual insight. <br />

                    <br />Embrace a new way to connect with God’s Word, supported by an AI designed to guide, inspire, and encourage you in your spiritual journey.
                    </p>
                </div>
            </div>
            <div className="landscape__right">
                <div className="landscape__img--container">
                    
                </div>
            </div>
        </div>
    );
}

export default Landscape;
