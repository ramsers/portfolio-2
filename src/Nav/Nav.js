import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Nav =() => {
    return(
        <nav className="site-nav">
            <div className="site-nav__ctn">
                <NavLink to='/#home'>Home</NavLink>
                <NavLink to='/#projects'>Projects</NavLink>
                <NavLink to='/#about'>About</NavLink>
                <NavLink to='/#contact'>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Nav;