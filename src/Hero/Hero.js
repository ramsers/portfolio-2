import React, {useRef, useEffect} from 'react';
import './Hero.scss';
import Nav from '../Nav/Nav';
import {TweenMax, Power3} from 'gsap';
import Typical from 'react-typical';

const Hero = () => {

    let heroShape = useRef(null);
    let heroContent = useRef(null);

    useEffect(()=> {
        TweenMax.to(
            heroShape,
            2,
            {
                opacity:1,
                y: 0,
                ease:Power3.easeOut
            }
        )
        TweenMax.to(
            heroContent,
            2, 
            {
                opacity:1,
                x: 0,
                ease: Power3.easeOut
            }
        )
    }, [])

    return(
        <>
        <section className="hero">
            <Nav/>
            <section className="hero__ctn">
                <div className="hero__content-ctn">
                    <div ref={el => {heroShape = el}} className="hero__circle"></div>
                    <div ref={el=>{heroContent = el}} className="hero__content">
                        <h1 className="hero__head">Web Developer</h1>
                        <h2 className="hero__sub-head"><Typical className="hero__sub-head"
                            steps={[
                                2500,
                                'Front End Focused'
                            ]}
                        
                            />
                        </h2>
                        <h2 className="hero__sub-head">
                            <Typical className="hero__sub-head"
                            steps={[
                                4000,
                                'Cake Enthusiast'
                            ]}
                            />
                        </h2>
                    </div>
                </div>
            </section>
        </section>
        </>
    )
}

export default Hero;