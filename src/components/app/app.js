import './app.css';
import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import BackAnimation from '../back-animation/back-animation';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator/error-indicator';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <div>
                <BackAnimation />

                <div className="container">
                    <Header />
                    <RandomPlanet />
                    <PeoplePage />

                    <div>
                        <div className="row mb2">
                            <div className="col-md-6">
                                <ItemList
                                    onPersonSelected={this.onPersonSelected}
                                    getData={this.swapiService.getAllPlanets}
                                    renderItem={(item) => item.name} />
                            </div>

                            <div className="col-md-6">
                                <PersonDetails selectedPersonId={this.state.selectedPersonId} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="row mb2">
                            <div className="col-md-6">
                                <ItemList
                                    onPersonSelected={this.onPersonSelected}
                                    getData={this.swapiService.getAllStarships}
                                    renderItem={(item) => item.name} />
                            </div>

                            <div className="col-md-6">
                                <PersonDetails selectedPersonId={this.state.selectedPersonId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
