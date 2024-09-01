import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './auth.css';

const Auth = () => {
    const { loginWithRedirect } = useAuth0();
    const [isSignUp, setIsSignUp ] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleAuth = () => {
        if (isSignUp) {
            loginWithRedirect({ 
                screen_hint: 'signup',
                appState: { formData }
            }); // Redirect to sign up
        } else {
            loginWithRedirect({ appState: { formData } }); // Redirect to log in
        }
    };

    const toggleAuthMode = () => {
        setIsSignUp((prev) => !prev);
    };

    const handleContinueWithoutAccount = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const proceedWithoutSaving = () => {
        setShowModal(false);
        // Implement logic for proceeding without saving
    };

    // Handle Google Sign-In
    const handleGoogleSignIn = () => {
        loginWithRedirect({ connection: 'google-oauth2' });
    };

    return(
        <div className='auth__form'>
            <h2 className='auth__btn-label'>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            
            {isSignUp && (
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={formData.username} 
                    onChange={handleInputChange} 
                />
            )}
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleInputChange} 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleInputChange} 
            />
            
            <button onClick={handleAuth}>
                {isSignUp ? 'Sign Up' : 'Log In'}
            </button>
            
            <button onClick={handleGoogleSignIn} className="google-signin-btn">
                Sign in with Google
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
