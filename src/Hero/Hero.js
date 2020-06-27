import React from 'react';
import './Hero.scss';
import Nav from '../Nav/Nav';

const Hero = () => {
    return(
        <>
        <section className="hero">
            <Nav/>
            <section className="hero__ctn">
                <div className="hero__content-ctn">
                    <div className="hero__circle"></div>
                    <div className="hero__content">
                        <h1 className="hero__head">Web Developer</h1>
                        <h2 className="hero__sub-head">Front End Focused</h2>
                        <h2 className="hero__sub-head">Cake Enthusiast</h2>
                    </div>
                </div>
            </section>
        </section>
        </>
    )
}

export default Hero;