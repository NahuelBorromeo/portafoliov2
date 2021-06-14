import React from 'react';
import coverVideo from '../../media/coverVideo.mp4';
import Typewriter from 'typewriter-effect';
import './Cover.css';

export const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={ coverVideo } autoPlay loop muted />
            <h1>Nahuel Borromeo</h1>
            <Typewriter
                options={{
                    strings: ['Developer', 'Content Creator','Coder','Entrepeneur'],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true,
                    delay: 50,
                }}
            />
        </div>
    );
};
