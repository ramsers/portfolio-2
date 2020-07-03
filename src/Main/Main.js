import React from 'react'; 
import './Main.scss';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Main = () => {
    return (
        <main className="main">
            <div className="main__ctn">
                <Hero/>
                <Skills/>
                <Portfolio/>
                <About/>
                <Contact/>
            </div>
        </main>
    )
}

export default Main;