import React from 'react';
import './About.scss';
import resume from './AboutAssets/RaheimBailey_Resume.pdf';

const About = () => {
    return(
        <section className="about">
            <h3 className="about__title">Get to Know Me</h3>
            <div className="about__ctn">
                <p className="about__highlight">
                    I am a FullStack Developer who is passionate about front-end user interaction and always seeking new experiences.
                </p>

                <p className="about__text">I have worked with start-ups to help to bring new products to their e-commerce platforms
                    while providing support and maintenance on the front-end of their websites. I hope to blend my marketing experience and customer focused mindset
                    with my development skills to create websites for products and people, and grow my skills as a full-stack developer.
                </p>

                <a href={resume} className="about__resume" download>My Résumé</a>
            </div>
        </section>
    )
}
export default About;