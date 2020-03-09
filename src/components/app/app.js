import React, { Component } from 'react';

import BackAnimation from '../back-animation/back-animation';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator/error-indicator';

import './app.css';

export default class App extends Component {

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
                    <PeoplePage />
                    <PeoplePage />
                </div>
            </div>
        );

    }
}
