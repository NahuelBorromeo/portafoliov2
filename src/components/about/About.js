import React from 'react';
import { FormattedMessage } from 'react-intl';
import about from '../../media/about.jpg'
import './About.css';


export const About = () => {
    return (
        <div id="about" className="about-container">
            <div className="about-desc">
                <h3>
                    <FormattedMessage 
                        id="about" 
                        defaultMessage="Let me tell you something about me"
                    />
                </h3>
                <p>
                    <FormattedMessage 
                        id="about-me" 
                        defaultMessage="I am a Developer from Lima-Perú, specialized in FrontEnd, software engineering student and a self-taught with a passion for technology."
                    />
                </p>
                <h3>
                    <FormattedMessage 
                            id="skills" 
                            defaultMessage="Skills"
                        />
                </h3>
                <p>-HTML <i className="fab fa-html5"></i></p>
                <p>-CSS <i className="fab fa-css3-alt"></i></p>
                <p>-JavaScript <i className="fab fa-js-square"></i></p>
                <p>-React <i className="fab fa-react"></i></p>
                <p>-Context</p>
                <p>-Redux</p>
                <p>-Typescript</p>
                <p>-Git <i className="fab fa-git-alt"></i></p>
            </div>
            <div className="about-img">
                <img src={about} alt="about" className="aboutimg"/>
            </div>
        </div>
    )
}
