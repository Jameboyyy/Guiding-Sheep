import React from 'react';
import Landscape from '../components/landscape';
import Nav from '../components/nav';
import WhatGSAI from '../components/whatGSAI';

const LandscapePage = () => {
    return (
        <section id='landscape__page'>
            <Nav />
            <Landscape />
            <WhatGSAI />
        </section>
    );
}

export default LandscapePage;
