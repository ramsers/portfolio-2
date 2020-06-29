import React, {useEffect, useRef} from 'react';
import './Skills.scss';
import htmlLogo from './SkillsAssets/html5-logo.png';
import css3Logo from './SkillsAssets/css3-logo.png';
import jsLogo from './SkillsAssets/js-logo.png';
import reactLogo from './SkillsAssets/react-logo.png';
import nodeLogo from './SkillsAssets/node-logo.png';
import expressLogo from './SkillsAssets/express-logo.png';
import githubLogo from './SkillsAssets/github-logo.png';
import gitLogo from './SkillsAssets/git-logo.png';
import sassLogo from './SkillsAssets/sass-logo.png';
import greensockLogo from './SkillsAssets/greensock-logo.png';

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