import React from 'react';
import project1 from '../../media/project1.jpg'
import project5 from '../../media/project5.jpg'
import project6 from '../../media/project6.jpg'
import project7 from '../../media/project7.jpg'
import project8 from '../../media/project8.jpg'
import project9 from '../../media/project9.jpg'
import icon from '../../media/webicon.png';

const slidesInfo = [
    
    {
        src: project6,
        alt: "GifApp",
        desc: " GifApp",
        href: "https://nahuelborromeo.github.io/gifapp/"
    },
    
    {
        src: project7,
        alt: "PokeApp",
        desc: "Pokedex App",
        href: "https://nahuelborromeo.github.io/pokedex-app/"
    },
    
    {
        src: project1,
        alt: "Portfolio v1",
        desc: " Portfolio v1",
        href: "https://portfoliov1nahuel.netlify.app"
    },

    {
        src: project5,
        alt: "Portfolio v2",
        desc: " Portfolio v2",
        href: "https://nahueldeveloper.com"
    },

    {
        src: project8,
        alt: "Todo APP",
        desc: " Todo APP",
        href: "https://nahuelborromeo.github.io/todo-app-react/"
    },

    {
        src: project9,
        alt: "Heroes APP",
        desc: " Heroes APP",
        href: "https://nahuelborromeo.github.io/heroes-app-react/"
    }
]

const slides = slidesInfo.map( slide => (
    <div className="slide-container">
            <img src={ slide.src } alt={ slide.alt } />
            <a href={ slide.href } target="_blank" rel="noopener noreferrer">
                <div className="slide-desc">
                    <img src={icon} alt="icono web" className="iconslide"></img><span>{ slide.desc }</span>
                </div>
            </a>
    </div>
));

export default slides;