import React, {useRef, useEffect} from 'react';
import './Hero.scss';
import Nav from '../Nav/Nav';
import {TweenMax, TimelineMax, Power3} from 'gsap';
import Typical from 'react-typical';
import downArrow from './HeroAssets/hero-arrow.svg';

const Hero = () => {

    let heroShape = useRef(null);
    let heroContent = useRef(null);
    let arrowText = useRef(null);
    let arrow = useRef(null);

    let tl = new TimelineMax({repeat: 2, delay: 2});

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
        tl.to(
            arrow,
            .10,
            {transformOrigin: "50% 100%",  
            yoyo:true, 
            repeat:1,
            }
        )
        .to(arrow, .75, {y:-15, ease:Power3.easeOut, yoyo:true, repeat:1,})
        TweenMax.to(
            arrowText,
            1,
            {
                opacity:1,
                y:-15,
                ease:Power3.eastOut,
                delay:4.57
            }
        )
        TweenMax.to(
            arrow,
            3,
            {
                opacity:1,
                ease:Power3.eastOut,
                delay: 4.8
            }
        )
    },)

    return(
        <>
        <section className="hero">
            <Nav/>
            <div className="hero__ctn">
                <div className="hero__content-ctn">
                    <div ref={el => {heroShape = el}} className="hero__circle"></div>
                    <div ref={el=>{heroContent = el}} className="hero__content">
                        <h1 className="hero__head">Web Developer</h1>
                        <h2 className="hero__sub-head"><Typical className="hero__sub-head"
                            steps={[
                                2100,
                                'Front End Focused'
                            ]}
                        
                            />
                        </h2>
                        <h2 className="hero__sub-head">
                            <Typical className="hero__sub-head"
                            steps={[
                                3500,
                                'Full Stack Capable'
                            ]}
                            />
                        </h2>
                    </div>
                </div>
                <div className="hero__scroll-ctn">
                    <p ref={el=> {arrowText = el}} className="hero__scroll-text">Scroll Down</p>
                    <img className="hero__arrow" ref={el=> {arrow = el}} src={downArrow} alt=""/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;