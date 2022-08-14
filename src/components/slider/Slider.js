import React from 'react'
import Carousel from 'react-img-carousel';
import slides from './Slides';
import './Slider.css';
import { FormattedMessage } from 'react-intl';
require('react-img-carousel/lib/carousel.css');

export const Slider = () => {

    return (
        <div id="portfolio" className="carousel-container">
            <div className="carousel-title">
                <h2>
                    <FormattedMessage 
                        id="projects" 
                        defaultMessage="My Projects"
                    />
                </h2>
            </div>
            <Carousel 
                viewportWidth="50vw" 
                height="70vh"
                autoplay={true}
                autoplaySpeed={2000}
                slideHeight="82vh"
                slideWidth="400px"
                cellPadding={ 50 } 
                arrows={false}
            >
                    {slides}
            </Carousel>
        </div>
    )
}
