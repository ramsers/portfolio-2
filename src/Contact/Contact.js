import React from 'react';
import './Contact.scss';
import emailIcon from './ContactAssets/email-icon.png'; 
import gitHubIcon from './ContactAssets/github-logo-white.png'; 
import linkdIcon from './ContactAssets/linkd-Icon.png'; 
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {BrowserRouter} from 'react-router-dom';

const Contact = () => {
    return(
        <section className="contact">
            <div className="contact__ctn">
                <div className="contact__social-ctn">
                    <div className="contact__social">
                        <img className="contact__icon" src={emailIcon} alt=""/>
                    </div>
                    <div className="contact__social">
                        <img className="contact__icon" src={gitHubIcon} alt=""/>
                    </div>
                    <div className="contact__social">
                        <img className="contact__icon" src={linkdIcon} alt=""/>
                    </div>  
                </div>

                <div className="contact__commit">
                    <h4 className="contact__commit-title"></h4>
                    <p className="contact__commit-msg"></p>
                </div>
                
                <div className="contact__navigate">
                    <BrowserRouter>
                        <NavLink className="contact__link" to='/#projects'>Portfolio</NavLink>
                    </BrowserRouter>
                </div>
            </div>
        </section>
    )
}

export default Contact