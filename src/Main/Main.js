import React from 'react'; 
import './Main.scss';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';

const Main = () => {
    return (
        <main className="main">
            <div className="main__ctn">
                <Hero/>
                <Skills/>
                <Portfolio/>
            </div>
        </main>
    )
}

export default Main;