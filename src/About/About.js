import React, {useEffect, useRef} from 'react';
import './About.scss';
import resume from './AboutAssets/RaheimBailey_Resume.pdf';
import {gsap, Power3} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const About = () => {

    let aboutCtn = useRef(null);
    let aboutCard = useRef(null);
    let cardTitle = useRef(null);

    useEffect(()=> {
        gsap.to(aboutCard, {
            scrollTrigger: aboutCtn,
            opacity: 1,
            y: 0,
            duration: 1
        })
        gsap.to(".desc", {
            scrollTrigger: aboutCard,
            stagger: .2,
            opacity:1,
            x: 0,
            // duration: .8,
            delay: .5,
            ease: Power3.easeInOut
        })
    })

    return(
        <section id="about" className="about">
            <div ref={el => {aboutCtn = el}} className="about__ctn">
                <div ref={el => {aboutCard = el}} className="about__card">
                    <h3 ref={el => {cardTitle = el}} className="about__title desc">About Me</h3>
                    <p className="about__highlight desc">
                        I am a FullStack Developer who is passionate about front-end user interaction and always seeking new experiences.
                    </p>

                    <p className="about__text desc">I have worked with start-ups to help to bring new products to their e-commerce platforms
                        while providing support and maintenance on the front-end of their websites. I hope to blend my marketing experience and customer focused mindset
                        with my development skills to create websites for products and people, and grow my skills as a full-stack developer.
                    </p>

                    <a href={resume} className="about__resume desc" download>My Résumé</a>
                </div>
            </div>
        </section>
    )
}
export default About;