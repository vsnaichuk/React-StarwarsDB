import React from 'react';

import './loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="earth" />
            <div className="moon-orbit">
                <div className="moon" />
            </div>
        </div>
    );
};

export default Loader;
