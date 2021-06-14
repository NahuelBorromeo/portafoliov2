import React from 'react';
import './Footer.css';
import { FormattedMessage } from 'react-intl';


export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear(); 

    return (
        <footer id="footer" className="footer">
            <div className="footer-info">
                <h2>Nahuel Borromeo</h2>
                <p>
                    <FormattedMessage 
                        id="footer" 
                        defaultMessage="Software engineer"
                    />
                </p>
            </div>
            <div className="footer-contact">
                <h3>
                    <FormattedMessage 
                        id="contactme" 
                        defaultMessage="Contact me"
                    />
                </h3>
                <p>
                    <FormattedMessage 
                        id="work" 
                        defaultMessage="And let's get down to work"
                    />
                </p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Copyright ©{year}. <FormattedMessage 
                                            id="copy" 
                                            defaultMessage="All Rights Reserved"
                                        />
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/nahuel-borromeo-da-costa-8bb72a1b5/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/NahuelBorromeo" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://www.instagram.com/nahueldev_/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                    <a href="mailto:nahuelborromeo@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope email"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
