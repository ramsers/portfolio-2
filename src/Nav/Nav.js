import React from 'react';
import './Nav.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {BrowserRouter} from 'react-router-dom';

class Nav extends React.Component {
    state = {
        actives: false
    }

    toggle = () => {
        let links = document.getElementsByClassName("site-nav__link-box")
        console.log(links)

        // this.setState({
        //     actives: !this.state.actives
        // })
    }

    render() {
        return(
            <nav className="site-nav">
                <div className="site-nav__logo">Raheim Bailey</div>
                <div className="site-nav__ctn">
                    <BrowserRouter>
                        <NavLink  className="site-nav__link" to='/#projects'>
                            Projects
                        </NavLink>
    
                        <NavLink  className="site-nav__link" className="site-nav__link" to='/#about'>
                            About
                        </NavLink>
    
                        <NavLink  className="site-nav__link" to='/#contact'>
                            Contact
                        </NavLink>
                    </BrowserRouter>
                </div>
            </nav>
        )
    }
}

export default Nav;