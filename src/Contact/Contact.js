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
                <div className="contact__social-ctn footer-ctn">
                    <div className="contact__social-head">
                        <h3 className="contact__social-title">Like What You See?</h3>
                        <p className="contact__social-text">Contact Me Here</p>
                    </div>
                    <div className="contact__social">
                        <img className="contact__icon" src={linkdIcon} alt=""/>
                        <p className="contact__url">linkedin.com/in/raheim-bailey</p>
                    </div>
                    <div className="contact__social">
                        <img className="contact__icon" src={emailIcon} alt=""/>
                        <p className="contact__url">raheimbbailey@gmail.com</p>
                    </div> 
                    <div className="contact__social">
                        <img className="contact__icon" src={gitHubIcon} alt=""/>
                        <p className="contact__url">github.com/ramsers</p>
                    </div> 
                </div>

                <div className="contact__commit footer-ctn">
                    <h4 className="contact__commit-title">My Commitment</h4>
                    <p className="contact__commit-msg">To bring as much value to any organization that I am
                        apart of and to conitually learn and improve my skills as a developer.
                    </p>
                </div>
                
                <div className="contact__navigate footer-ctn">
                    <h4 className="contact__navigate-title">Navigate</h4>
                    <BrowserRouter>
                        <NavLink className="contact__link" to='/#projects'>Portfolio</NavLink>
                    </BrowserRouter>
                </div>
            </div>
        </section>
    )
}

export default Contact