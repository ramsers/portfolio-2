import React from 'react';
import './Portfolio.scss';
import port from './PortfolioAssets/port.jpg';

const Portfolio = () => {
    return(
        <section id="projects" className="portfolio">
            <h3 className="portfolio__title">My Work</h3>
            <div className="portfolio__ctn">
                <div className="portfolio__project-ctn">
                    <h3 className="portfolio__project-title">Filler Title</h3>
                    <div className="portfolio__image-ctn">
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
                    <div className="portfolio__highlight project__one">
                        <div className="portfolio__text-ctn">
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