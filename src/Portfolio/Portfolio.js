import React, {useEffect, useRef} from 'react';
import './Portfolio.scss';
import port from './PortfolioAssets/port.jpg';
import {gsap, Power3} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


const Portfolio = () => {

    let projectCtn = useRef(null);
    let projectHalf1 = useRef(null);
    let projectHalf2 = useRef(null);
    let projectCtn2 = useRef(null);
    let projectHalf3 = useRef(null);
    let projectHalf4 = useRef(null);
    let projectCtn3 = useRef(null);
    let projectHalf5 = useRef(null);
    let projectHalf6 = useRef(null);

    useEffect(() => {
        gsap.to(projectHalf1,{
            scrollTrigger: projectCtn,
            opacity:1,
            x:0,
            ease: Power3.easeOut,
            duration:1.5
        })
        gsap.to(projectHalf2,{
            scrollTrigger: projectCtn,
            opacity:1,
            x:0,
            ease: Power3.easeOut,
            duration:1.5
        })
        gsap.to(projectHalf3,{
            scrollTrigger: projectCtn2,
            opacity:1,
            x:0,
            ease: Power3.easeOut,
            duration:1.5
        })
        gsap.to(projectHalf4,{
            scrollTrigger: projectCtn2,
            opacity:1,
            x:0,
            ease: Power3.easeOut,
            duration:1.5
        })
        gsap.to(projectHalf5,{
            scrollTrigger: projectCtn3,
            opacity:1,
            x:0,
            ease: Power3.easeOut,
            duration:1.5
        })
        gsap.to(projectHalf6,{
            scrollTrigger: projectCtn3,
            opacity:1,
            x:0,
            ease: Power3.easeOut,
            duration:1.5
        })
    })

    return(
        <section id="projects" className="portfolio">
            <h3 className="portfolio__title">My Work</h3>
            <div className="portfolio__ctn">
                {/* Project One */}
            <h3 className="portfolio__project-title">Filler Title</h3>
                <div ref={el => {projectCtn = el}} className="portfolio__project-ctn portfolio__project-1">
                    <div ref={el => {projectHalf1 = el}} className="portfolio__image-ctn">
                        <div className="portfolio__image-border">
                            <img src={port} alt="" className="portfolio__image"/>
                        </div>
                        <ul className="portfolio__tech">
                                <li className="portfolio__tech-item">HTML5</li>
                                <li className="portfolio__tech-item">SASS</li>
                                <li className="portfolio__tech-item">React</li>
                                <li className="portfolio__tech-item">Node</li>
                                <li className="portfolio__tech-item">Express</li>
                                <li className="portfolio__tech-item">ChartJS</li>
                                <li className="portfolio__tech-item">GreenSock/GSAP</li>
                            </ul>
                    </div>
                    <div ref={el => {projectHalf2 = el}} className="portfolio__highlight">
                        <div className="portfolio__text-ctn">
                        <h3 className="portfolio__project-title-2">Filler Title</h3>
                            <p className="portfolio__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, laboriosam.</p>
                            <div className="portfolio__link-ctn">
                                <a href="#" className="portfolio__link">View On Github</a>
                                <a href="#" className="portfolio__link">Watch Demo Video</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 2 */}
            <h3 className="portfolio__project-title">Filler Title</h3>
                <div ref={el => {projectCtn2 = el}} className="portfolio__project-ctn portfolio__project-2">
                    <div ref={el => {projectHalf3 = el}} className="portfolio__image-ctn">
                        <div className="portfolio__image-border">
                            <img src={port} alt="" className="portfolio__image"/>
                        </div>
                        <ul className="portfolio__tech">
                                <li className="portfolio__tech-item">HTML5</li>
                                <li className="portfolio__tech-item">SASS</li>
                                <li className="portfolio__tech-item">React</li>
                                <li className="portfolio__tech-item">Node</li>
                                <li className="portfolio__tech-item">Express</li>
                                <li className="portfolio__tech-item">ChartJS</li>
                                <li className="portfolio__tech-item">GreenSock/GSAP</li>
                            </ul>
                    </div>
                    <div ref={el => {projectHalf4 = el}} className="portfolio__highlight">
                        <div className="portfolio__text-ctn">
                        <h3 className="portfolio__project-title-2">Filler Title</h3>
                            <p className="portfolio__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, laboriosam.</p>
                            <div className="portfolio__link-ctn">
                                <a href="#" className="portfolio__link">View On Github</a>
                                <a href="#" className="portfolio__link">Watch Demo Video</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 3 */}
                <h3 className="portfolio__project-title">Filler Title</h3>
                <div ref={el => {projectCtn3 = el}} className="portfolio__project-ctn">
                    <div ref={el => {projectHalf5 = el}} className="portfolio__image-ctn">
                        <div className="portfolio__image-border">
                            <img src={port} alt="" className="portfolio__image"/>
                        </div>
                        <ul className="portfolio__tech">
                                <li className="portfolio__tech-item">HTML5</li>
                                <li className="portfolio__tech-item">SASS</li>
                                <li className="portfolio__tech-item">React</li>
                                <li className="portfolio__tech-item">Node</li>
                                <li className="portfolio__tech-item">Express</li>
                                <li className="portfolio__tech-item">ChartJS</li>
                                <li className="portfolio__tech-item">GreenSock/GSAP</li>
                            </ul>
                    </div>
                    <div ref={el => {projectHalf6 = el}} className="portfolio__highlight">
                        <div className="portfolio__text-ctn">
                        <h3 className="portfolio__project-title-2">Filler Title</h3>
                            <p className="portfolio__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, laboriosam.</p>
                            <div className="portfolio__link-ctn">
                                <a href="#" className="portfolio__link">View On Github</a>
                                <a href="#" className="portfolio__link">Watch Demo Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;