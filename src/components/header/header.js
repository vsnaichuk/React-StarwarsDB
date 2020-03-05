import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3 className="col-md-4 col-xl-4">
                <a href="/#">Star <br /> Database</a>
            </h3>
            <nav className="d-flex">
                <a href="/#">People</a>
                <a href="/#">Planets</a>
                <a href="/#">Starships</a>
            </nav>
        </div>
    );
};

export default  Header;
