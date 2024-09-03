import React, { useEffect } from 'react';
import Auth0Lock from 'auth0-lock';

const Auth = () => {
    useEffect(() => {
        const lock = new Auth0Lock(
            process.env.REACT_APP_AUTH0_CLIENT_ID,  // Your Auth0 Client ID
            process.env.REACT_APP_AUTH0_DOMAIN,     // Your Auth0 Domain
            {
                auth: {
                    redirectUrl: window.location.origin, // Where to redirect after login
                    responseType: 'token id_token',
                    audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`,
                    sso: false // Whether to use Single Sign-On (set to true if needed)
                },
                theme: {
                    primaryColor: '#31324F' // Customize the color scheme
                },
                languageDictionary: {
                    title: "Log In", // Customize the title
                    signup: {
                        title: "Sign Up",
                    }
                },
                allowedConnections: ['Username-Password-Authentication', 'google-oauth2'], // Ensure Google is included
                socialButtonStyle: 'big' // Makes social login buttons more prominent
            }
        );

        lock.show(); // Display the Lock widget
    }, []);

    return <div id="auth0-lock-container" />; // Div to contain the Lock widget
};

export default Auth;
