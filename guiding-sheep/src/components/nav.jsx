import React from 'react';
import '../css/nav.css'

const Nav = () => {
    return (
        <nav className='nav__container'>
            <div className="nav__left">
                <div className="nav__brand">
                    <img src="" alt="" className="nav__img" />
                    <h1 className="nav__brand--name">GuidingSheep.ai</h1>
                </div>
                <ul className="nav__lists">
                    <li className="nav__list">Why GS AI</li>
                    <li className="nav__list">What is GS AI</li>
                </ul>
            </div>
            <div className="nav__right">
                <ul className="nav__lists">
                    <li className="nav__list nav__auth--btn">Log In</li>
                    <li className="nav__list nav__auth--btn">Sign Up</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
