import React from 'react';
import Landscape from '../components/landscape';
import Nav from '../components/nav';
import WhatGSAI from '../components/whatGSAI';
import WhyGSAI from '../components/whyGSAI';
import Pricing from '../components/pricing';

const LandscapePage = () => {
    return (
        <section id='landscape__page'>
            <Nav />
            <Landscape />
            <WhatGSAI />
            <WhyGSAI />
            <Pricing />
        </section>
    );
}

export default LandscapePage;
