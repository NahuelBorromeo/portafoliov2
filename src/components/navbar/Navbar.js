import React, { useContext, useState } from 'react'
import './Navbar.css'
import es from '../../media/spain.png'
import en from '../../media/usa.png'
import { langContext } from '../../context/langContext'
import { FormattedMessage } from 'react-intl';

export const Navbar = ({ isScrolling }) => {

    const idioma = useContext(langContext);

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }

    const toTheBottom = () => {
        window.scrollTo({ top: 3000, behavior: "smooth"});
    }
    
    const [menuopen, setMenuopen] = useState(false);

    const activarScroll = () => {
        document.getElementsByTagName("html")[0].style.overflow = "auto";
    }

    const show = () => {
        const menu = document.querySelector('nav ul');
        menu.classList.toggle("show")
        if( menu.classList.contains("show") ){
        setMenuopen(true);
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        }else{
            setMenuopen(false);
            activarScroll();
        }
    }
    
    const removeShow = () => {
        const menu = document.querySelector('nav ul');
        menu.classList.remove("show")
        setMenuopen(false);
        activarScroll();
    }

    const logo = "<N/>"

    return (
        <nav id="nav" className={`navbar ${ isScrolling > 20 || menuopen ? "scrolling": null }`}>
            <div className="navbar-logo" onClick={toTheTop} >
                { logo }
            </div>
                <button onClick={() => idioma.establecerLenguaje('es-ES')} className="leng"><img src={es} alt="es-icon"/></button>
                <button onClick={() => idioma.establecerLenguaje('en-US')} className="leng"><img src={en} alt="en-icon"/></button>
                <ul>
                    <li onClick={removeShow}><a href="#nav" onClick={toTheTop}>
                        <FormattedMessage 
                            id="home" 
                            defaultMessage="Home"
                        />
                        </a></li>
                    <li onClick={removeShow}><a href="#about">
                        <FormattedMessage 
                            id="aboutme" 
                            defaultMessage="About"
                        />
                        </a></li>
                    <li onClick={removeShow} ><a href="#portfolio">
                        <FormattedMessage 
                            id="portfolio" 
                            defaultMessage="Portfolio"
                        />
                        </a></li>
                    <li onClick={removeShow}><a href="#footer" onClick={toTheBottom}>
                        <FormattedMessage 
                            id="contact" 
                            defaultMessage="Contact"
                        />
                        </a></li>
                </ul>
                <label onClick={show} id="icon">
                    <i className="fas fa-bars"></i>
                </label>
        </nav>
    )
}
