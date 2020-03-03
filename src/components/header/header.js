import React from 'react';

import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3 className="col-xl-4">
                <a href="/#">Star Database</a>
            </h3>
            <nav className="d-flex">
                <a href="/#">People</a>
                <a href="/#">Planets</a>
                <a href="/#">Starships</a>
            </nav>
        </div>
    )
};

export default  Header
