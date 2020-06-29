import React from 'react'; 
import './Main.scss';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';

const Main = () => {
    return (
        <main className="main">
            <div className="main__ctn">
                <Hero/>
                <Skills/>
            </div>
        </main>
    )
}

export default Main;