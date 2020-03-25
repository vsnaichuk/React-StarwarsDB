import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import BackAnimation from '../back-animation/back-animation';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator/error-indicator';
import Row from '../row/row';
import ItemDetails from '../item-details/item-details';

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

        const {getPerson, getStarship,
                getPersonImage,
                getStarshipsImage} = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={12}
                getData={getPerson}
                getImageUrl={getPersonImage}
            />
        );

        const starshipDetails = (
            <ItemDetails
                itemId={12}
                getData={getStarship}
                getImageUrl={getStarshipsImage}
            />
        );

        return (
            <div>
                <BackAnimation />

                <div className="container">
                    <Header />
                    <RandomPlanet />
                    <Row left={personDetails}
                         right={starshipDetails} />
                    {/*<div>*/}
                    {/*    <div className="row mb2">*/}
                    {/*        <div className="col-md-6">*/}
                    {/*            <ItemList*/}
                    {/*                onPersonSelected={this.onPersonSelected}*/}
                    {/*                getData={this.swapiService.getAllPlanets}*/}
                    {/*                renderItem={(item) => item.name} />*/}
                    {/*        </div>*/}

                    {/*        <div className="col-md-6">*/}
                    {/*            <PersonDetails selectedPersonId={this.state.selectedPersonId} />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <div className="row mb2">*/}
                    {/*        <div className="col-md-6">*/}
                    {/*            <ItemList*/}
                    {/*                onPersonSelected={this.onPersonSelected}*/}
                    {/*                getData={this.swapiService.getAllStarships}>*/}

                    {/*                {(item) => item.name}*/}

                    {/*            </ItemList>*/}
                    {/*        </div>*/}

                    {/*        <div className="col-md-6">*/}
                    {/*            <PersonDetails selectedPersonId={this.state.selectedPersonId} />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );

    }
}
