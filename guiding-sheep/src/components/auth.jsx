import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './auth.css'

const Auth = () => {
    const { loginWithRedirect } = useAuth0();
    const [isSignUp, setIsSignUp ] = useState(true);
    const [showModal, setShowModal] = useState(false);

    // Handler to either sign up or log in based on the current state
    const handleAuth = () => {
        if (isSignUp) {
            loginWithRedirect({ screen_hint: 'signup'}); //Redirect to sign up
        } else {
            loginWithRedirect(); // Redirect to log in
        }
    };

    const toggleAuthMode = () => {
        setIsSignUp((prev) => !prev);
    };

    const handleContinueWithoutAccount = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const proceedWithoutSaving = () => {
        setShowModal(false);

    }

    return(
        <div className='auth__form'>
            <h2 className='auth__btn-label'>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            <button onClick={handleAuth}>
                {isSignUp ? 'Sign Up' : 'Log In'}
            </button>
            <p className='para__auth-form'>
                {isSignUp ? 'Already have an account?' : 'Need an account?'}{' '}
                <button onClick={toggleAuthMode} style={{ color: 'blue', border: 'none', background: 'none', cursor: 'pointer' }}>
                    {isSignUp ? 'Log In' : 'Sign Up'}
                </button>
            </p>
            <p className='para__auth-form'>
                Or <button onClick={handleContinueWithoutAccount} style={{ color: 'blue', border: 'none', background: 'none', cursor: 'pointer' }}>
                    Continue without an account
                </button>
            </p>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Proceed without an Account?</h2>
                        <p>If you proceed without creating an account, your progress will not be saved.</p>
                        <button onClick={proceedWithoutSaving}>Proceed</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Auth;