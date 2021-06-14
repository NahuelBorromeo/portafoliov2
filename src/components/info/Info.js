import React from 'react';
import './Info.css';
import { FormattedMessage } from 'react-intl';


export const Info = () => {
    return (
        <div className="info-container">
            <div className="info">
                <h1>
                    <FormattedMessage 
                        id="info" 
                        defaultMessage="I don't ever give up."
                    />
                </h1>
            </div>
        </div>
    )
}
