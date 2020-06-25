import React from 'react';
import './Hero.scss';
import Nav from '../Nav/Nav';

const Hero = () => {
    return(
        <section className="hero">
            <section className="hero__ctn">
                <Nav/>
            </section>
        </section>
    )
}

export default Hero;