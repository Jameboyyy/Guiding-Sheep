import React from 'react';
import '../css/nav.css'
import Auth0Lock from 'auth0-lock';
import { Link }from 'react-router-dom';
import sheepImg from '../assets/brownsheepTrans.png'

const Nav = () => {
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

    // Function for login
    const handleAuth0Login = () => {
        lock.show();
    };

    // Function for sign-up
    const handleAuth0SignUp = () => {
        lock.show({
            initialScreen: 'signUp',
            screen_hint: 'signup'
        });
    };
    return (
        <nav>
            <div className="nav__container">
                <div className="nav__left">
                        <a href="/" className="nav__brand">
                            <img src={sheepImg} alt="" className="nav__img" />
                            <h1 className="nav__brand--name">GuidingSheep.ai</h1>
                        </a>
                    <ul className="nav__lists">
                        <li className="nav__list">
                            <a href="#whatGSAI__container" className="nav__link">What is GS AI</a>
                        </li>
                        <li className="nav__list">
                            <a href="#whyGSAI__container" className="nav__link"> Why GS AI</a>
                        </li>
                        <li className="nav__list">
                            <Link to="/pricing" className="nav__link">Pricing</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav__right">
                    <ul className="nav__lists">
                        <li className="nav__list nav__auth--btn">
                            <button onClick={handleAuth0Login} className="nav__log-in--btn">Log In</button>
                        </li>
                        <li className="nav__list nav__auth--btn">
                            <button onClick={handleAuth0SignUp} className="nav__get-started--btn">Get Started</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
