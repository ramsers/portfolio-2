import React from 'react'; 
import './Main.scss';
import Hero from '../Hero/Hero';

const Main = () => {
    return (
        <main className="main">
            <div className="main__ctn">
                <Hero/>
            </div>
        </main>
    )
}

export default Main;