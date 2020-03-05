import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';

import './random-planet.css';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 17) + 2;

        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded);
    }


    render() {
        const { planet, loading } = this.state;

        const loader = loading ? <Loader /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;

        return (
            <div>

                <div className="random-planet jumbotron">
                    {loader}
                    {content}
                </div>

            </div>
        );
    }

}



const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter
    } = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} />

            <div>
                <h4 className="display-5">{name}</h4>

                <hr className="my-2" />

                <ul className="list-group-flush list-group">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>

                <p className="lead">
                    <button className="btn btn-primary btn-lg">Learn more</button>
                </p>
            </div>
        </React.Fragment>
    );
};
