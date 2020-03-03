import React from 'react';

import './random-planet.css'

const RandomPlanet = () => {
    return (
        <div>

            <div className="random-planet jumbotron">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/3.jpg`} />
                <div>
                    <h4 className="display-5">Hello, world!</h4>

                    <hr className="my-2" />

                    <ul className="list-group-flush list-group">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>population</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>rotationPeriod</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>diameter</span>
                        </li>
                    </ul>

                    <p className="lead">
                        <button className="btn btn-primary btn-lg">Learn more</button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default RandomPlanet
