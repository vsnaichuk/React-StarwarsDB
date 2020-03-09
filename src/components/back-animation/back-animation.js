import React from 'react';

import './back-animation.css';

const BackAnimation = () => {
    return (
        <div>
            <div className="background">
                <div className="row" id="background-img" />
            </div>
            <div className="twinkling" />
        </div>
    );
};

export default BackAnimation;
