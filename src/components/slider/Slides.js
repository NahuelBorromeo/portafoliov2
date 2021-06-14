import React from 'react';
import project1 from '../../media/project1.jpg'
import project2 from '../../media/project2.jpg'
import project3 from '../../media/project3.jpg'
import project4 from '../../media/project4.jpg'
import project5 from '../../media/project5.jpg'


const slidesInfo = [
    {
        src: project1,
        alt: "Portfolio v1",
        desc: " Portfolio v1",
        href: "https://portfoliov1nahuel.netlify.app"
    },
    
    {
        src: project2,
        alt: "Profile card",
        desc: " Profile card",
        href: "https://profilecard-nahu.netlify.app"
    },
    
    {
        src: project3,
        alt: "RealState site",
        desc: " RealState site",
        href: "https://realstate-nahu.netlify.app"
    },

    {
        src: project4,
        alt: "Coffe blog",
        desc: " Coffe blog",
        href: "https://coffeeblog-nahu.netlify.app"
    },

    {
        src: project5,
        alt: "Portfolio v2",
        desc: " Portfolio v2",
        href: "https://nahueldeveloper.com"
    }

]

const slides = slidesInfo.map( slide => (
    <div className="slide-container">
            <img src={ slide.src } alt={ slide.alt } />
            <a href={ slide.href } target="_blank" rel="noopener noreferrer">
                <div className="slide-desc">
                    <span><i className="fas fa-globe"></i>{ slide.desc }</span>
                </div>
            </a>
    </div>
));

export default slides;