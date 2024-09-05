import React, { useState } from "react";
import Auth0Lock from 'auth0-lock';

const Auth = () => {
    const [showModal, setShowModal] = useState(false);
    const [isGuest, setIsGuest ] = useState(false);

    const lock = new Auth0Lock (
        process.env.REACT_APP_AUTH0_CLIENT_ID,
        process.env.REACT_APP_AUTH0_DOMAIN,
        {
            auth: {
                redirectUrl: window.location.origin,
                responstType: 'token_id_token',
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
    

    const handleAuth0Login = () => {
        lock.show();
    };

    const handleContinueWithoutSignIn = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const proceedAsGuest = () => {
        setShowModal(false);
        setIsGuest(true);
    };

    return (
        <div className='auth__container'>
            {/* Auth0 Lock Button */}
            <button onClick={handleAuth0Login}>
                Sign In / Sign Up
            </button>

            {/* Continue Without Signing In Button */}
            <button onClick={handleContinueWithoutSignIn} style={{ marginTop: '10px', backgroundColor: 'orange', color: 'white' }}>
                Continue Without Signing In
            </button>

            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Proceed as Guest?</h2>
                        <p>If you proceed without an account, your chat history won't be saved.</p>
                        <button onClick={proceedAsGuest}>Proceed as Guest</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Display appropriate message based on user status */}
            {isGuest ? (
                <p>Welcome, guest! Please note that your chat history will not be saved.</p>
            ) : (
                <p>Please sign in or continue as a guest to start chatting.</p>
            )}
        </div>
    );
}

export default Auth;