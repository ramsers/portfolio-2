import React from 'react';
import './Nav.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {BrowserRouter} from 'react-router-dom';

const Nav =() => {
    return(
        <nav className="site-nav">
            <div className="site-nav__ctn">
                <BrowserRouter>
                    <NavLink className="site-nav__link" to='/#home'>
                        Home
                        <span className="site-nav__link-box"></span>
                    </NavLink>

                    <NavLink className="site-nav__link" to='/#projects'>
                        Projects
                        <span className="site-nav__link-box"></span>
                    </NavLink>

                    <NavLink className="site-nav__link" to='/#about'>
                        About
                        <span className="site-nav__link-box"></span>
                    </NavLink>

                    <NavLink className="site-nav__link" to='/#contact'>
                        Contact
                        <span className="site-nav__link-box"></span>
                    </NavLink>
                </BrowserRouter>
            </div>
        </nav>
    )
}

export default Nav;