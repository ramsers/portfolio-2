import React, {useEffect, useRef} from 'react';
import './Skills.scss';
import htmlLogo from './SkillsAssets/html_logo_white.png';
import css3Logo from './SkillsAssets/css3-logo-white.png';
import jsLogo from './SkillsAssets/js-logo-white.png';
import reactLogo from './SkillsAssets/react-logo-white.png';
import nodeLogo from './SkillsAssets/node-logo-white.png';
import expressLogo from './SkillsAssets/express-logo-white.png';
import githubLogo from './SkillsAssets/github-logo-white.png';
import gitLogo from './SkillsAssets/git-logo-white.png';
import sassLogo from './SkillsAssets/sass-logo-white.png';
import greensockLogo from './SkillsAssets/greesock-logo-white.png';

const Skills = () => {
    return(
        <section className="skills">
            <h3 className="skills__title">My Toolbelt</h3>
            <div className="skills__ctn">
                    <div className="skills__column">
                        <img src={htmlLogo} alt="" className="skills__logo"/>
                        <img src={css3Logo} alt="" className="skills__logo"/>
                        <img src={jsLogo} alt="" className="skills__logo"/>
                        <img src={sassLogo} alt="" className="skills__logo"/>
                        <img src={reactLogo} alt="" className="skills__logo"/>
                    </div>
                    <div className="skills__column">
                        <img src={nodeLogo} alt="" className="skills__logo"/>
                        <img src={expressLogo} alt="" className="skills__logo"/>
                        <img src={githubLogo} alt="" className="skills__logo"/>
                        <img src={gitLogo} alt="" className="skills__logo"/>
                        <img src={greensockLogo} alt="" className="skills__logo"/>
                    </div>
                </div>
        </section>
    )
}
export default Skills;