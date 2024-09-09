import React from 'react';
import '../css/landscape.css'
import brownSheep from '../assets/brown sheep.png'
import Auth0Lock from 'auth0-lock';

const Landscape = () => {

    const lock = new Auth0Lock(
        process.env.REACT_APP_AUTH0_CLIENT_ID,
        process.env.REACT_APP_AUTH0_DOMAIN,
        {
            auth: {
                responseType: 'token id_token',
            },
            authorizationParams: {
                redirect_uri: window.location.origin
            },
            theme: {
                primaryColor: '#c3b192',
            },
            languageDictionary: {
                title: "Log In",
                signup: "Sign Up"
            }
        }
    );

    const handleAuth0SignUp = () => {
        lock.show({
            initialScreen: 'signUp',
            screen_hint: 'signup'
        });
    };

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
                    <button className="landscape__btn" onClick={handleAuth0SignUp}>Get Started</button>
                </div>
            </div>
            <div className="landscape__right">
                <div className="landscape__img--container">
                    <img src={brownSheep} alt="" className="landscape__img" />
                </div>
            </div>
        </div>
    );
}

export default Landscape;
