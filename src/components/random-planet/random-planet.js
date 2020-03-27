import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }


    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;

        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    nextPlanet = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.updatePlanet, 10000);

        this.updatePlanet();
    };


    render() {
        const { planet, loading, error } = this.state;

        const loader = loading ? <Loader /> : null;
        const problem = error ? <ErrorIndicator /> : null;
        const content = !(loading || error)
                            ? <PlanetView
                                planet={planet}
                                upd={this.nextPlanet}
                                image={this.swapiService.getPlanetImage} />
                            : null;

        return (
            <div>

                <div className="random-planet jumbotron">
                    {loader}
                    {problem}
                    {content}
                </div>

            </div>
        );
    }

}

const PlanetView = ({ planet, upd, image }) => {
    const { id, name, population, rotationPeriod, diameter
    } = planet;

    return (
        <Fragment>
            <img className="planet-image"
                 src={image(id)} alt="planet" />

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
                    <button className="btn btn-primary btn-lg"
                            onClick={() => upd()}>Next planet</button>
                </p>
            </div>
        </Fragment>
    );
};
