import React, {useEffect, useRef} from 'react';
import './Portfolio.scss';
import viewflix from './PortfolioAssets/viewflix.PNG';
import bandsite from './PortfolioAssets/bandsite.PNG';
import emotionalE from './PortfolioAssets/emotional-e.PNG';
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
            <h3 className="portfolio__project-title">Emotional-E</h3>
                <div ref={el => {projectCtn = el}} className="portfolio__project-ctn portfolio__project-1">
                    <div ref={el => {projectHalf1 = el}} className="portfolio__image-ctn">
                        <div className="portfolio__image-border">
                            <img src={emotionalE} alt="" className="portfolio__image"/>
                        </div>
                        <ul className="portfolio__tech">
                                <li className="portfolio__tech-item">HTML5,</li>
                                <li className="portfolio__tech-item">SASS,</li>
                                <li className="portfolio__tech-item">React,</li>
                                <li className="portfolio__tech-item">Node,</li>
                                <li className="portfolio__tech-item">Express,</li>
                                <li className="portfolio__tech-item">ChartJS,</li>
                                <li className="portfolio__tech-item">GreenSock/GSAP</li>
                            </ul>
                    </div>
                    <div ref={el => {projectHalf2 = el}} className="portfolio__highlight">
                        <div className="portfolio__text-ctn">
                        <h3 className="portfolio__project-title-2">Emotional-E</h3>
                            <p className="portfolio__text">An app that provides resources served up from a Node server to help users deal with negative emotional states.<br/>
                                With each click of the resources, user click data is sent to the back end and re-served via a chart to help users keep track of they're emotional data. Users
                                are also able to add notes via a modal component added to each page and keep journal notes of how they're feeling on a daily basis.
                            </p>
                            <div className="portfolio__link-ctn">
                                <a href="https://github.com/ramsers/emotional-e" rel="noopener noreferrer" target="_blank" className="portfolio__link">View On Github</a>
                                <a href="https://www.loom.com/share/28ac8f5bf05249c0ad95390668b2fc93" rel="noopener noreferrer" target="_blank" className="portfolio__link">Watch Demo Video</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 2 */}
            <h3 className="portfolio__project-title">ViewFlix</h3>
                <div ref={el => {projectCtn2 = el}} className="portfolio__project-ctn portfolio__project-2">
                    <div ref={el => {projectHalf3 = el}} className="portfolio__image-ctn">
                        <div className="portfolio__image-border">
                            <img src={viewflix} alt="" className="portfolio__image"/>
                        </div>
                        <ul className="portfolio__tech">
                                <li className="portfolio__tech-item">HTML5,</li>
                                <li className="portfolio__tech-item">SASS,</li>
                                <li className="portfolio__tech-item">React,</li>
                                <li className="portfolio__tech-item">Node,</li>
                                <li className="portfolio__tech-item">Express</li>
                            </ul>
                    </div>
                    <div ref={el => {projectHalf4 = el}} className="portfolio__highlight">
                        <div className="portfolio__text-ctn">
                        <h3 className="portfolio__project-title-2">ViewFlix</h3>
                            <p className="portfolio__text">A video streaming site where users are able to click on suggested videos generated from the API stored in the back end and have them
                                take the place of the main video using React-Router. The video API data is served up via the Node server. Users are also able to add videos on the upload page.
                            </p>
                            <div className="portfolio__link-ctn">
                                <a href="https://github.com/ramsers/raheim-bailey-viewflix/tree/master/sprint-3" rel="noopener noreferrer" target="_blank" className="portfolio__link">View On Github</a>
                                <a href="https://www.loom.com/share/550bf92e5126481a8467bb96f5e4488f" rel="noopener noreferrer" target="_blank" className="portfolio__link">Watch Demo Video</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 3 */}
                <h3 className="portfolio__project-title">Justice Band Site</h3>
                <div ref={el => {projectCtn3 = el}} className="portfolio__project-ctn">
                    <div ref={el => {projectHalf5 = el}} className="portfolio__image-ctn">
                        <div className="portfolio__image-border">
                            <img src={bandsite} alt="" className="portfolio__image"/>
                        </div>
                        <ul className="portfolio__tech">
                                <li className="portfolio__tech-item">HTML5,</li>
                                <li className="portfolio__tech-item">SASS,</li>
                                <li className="portfolio__tech-item">JavaScript,</li>
                                <li className="portfolio__tech-item">Rest API</li>
                            </ul>
                    </div>
                    <div ref={el => {projectHalf6 = el}} className="portfolio__highlight">
                        <div className="portfolio__text-ctn">
                        <h3 className="portfolio__project-title-2">Justice Band Site</h3>
                            <p className="portfolio__text">A fully responsive mock website for the famed music Duo JUSTICE. 
                                This was an exercise in using vanilla JavaScript to connect with an API and creating DOM elements from that API data and displaying it on the page.
                                There is a Dynamic aspect where users and fans are able to input their comments which are posted to the API and reappear in the list of comments on the homepage.
                            </p>
                            <div className="portfolio__link-ctn">
                                <a href="https://github.com/ramsers/raheim-bailey-bandsite/tree/master/sprint-3" rel="noopener noreferrer" target="_blank" className="portfolio__link">View On Github</a>
                                <a href="https://www.loom.com/share/fc2a311fc7fc4545994127b88e588449" target="_blank" rel="noopener noreferrer" className="portfolio__link">Watch Demo Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;