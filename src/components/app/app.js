import React, { Component } from 'react';

import BackAnimation from '../back-animation/back-animation';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import Row from '../row/row';
import PeoplePage from '../people-page/people-page';

import {
    PersonList,
    PlanetList,
    StarshipList,
} from '../sw-components/item-lists';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components/details';

import {
    SwapiServiceProvider,
    SwapiServiceConsumer
} from '../swapi-service-context/swapi-service-context';

import './app.css';


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

                <SwapiServiceProvider value={this.swapiService} />

                <div className="container">
                    <Header />
                    <RandomPlanet />
                    {/*<Row left={personDetails}*/}
                    {/*     right={starshipDetails} />*/}

                    {/*<PersonDetails personId={12} />*/}
                    {/*<PlanetDetails planetId={10} />*/}
                    {/*<StarshipDetails starshipId={5} />*/}

                    <PersonList
                        onPersonSelected={this.onPersonSelected}>
                    </PersonList>

                    <PlanetList
                        onPersonSelected={this.onPersonSelected}>
                    </PlanetList>

                    <StarshipList
                        onPersonSelected={this.onPersonSelected}>
                    </StarshipList>


                    {/*<ItemList*/}
                    {/*    onPersonSelected={this.onPersonSelected}*/}
                    {/*    getData={this.swapiService.getAllStarships}>*/}

                    {/*    {(item) => item.name}*/}

                    {/*</ItemList>*/}
                </div>
            </div>
        );

    }
}
