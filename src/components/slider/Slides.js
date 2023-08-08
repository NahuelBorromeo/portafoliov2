import React from 'react';
import project4 from '../../media/project4.jpg'
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
        src: project4,
        alt: "DeliveryApp",
        desc: "Food Restaurant Delivery",
        href: "https://food-restaurant-delivery.netlify.app/"
    },
    
    {
        src: project7,
        alt: "PokeApp",
        desc: "Pokedex App",
        href: "https://nahuelborromeo.github.io/pokedex-app/"
    },

    {
        src: project5,
        alt: "Portfolio",
        desc: " Portfolio",
        href: "https://nahuelborromeo.netlify.app/"
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
