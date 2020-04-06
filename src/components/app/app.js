import React, { Component } from 'react';

import BackAnimation from '../back-animation/back-animation';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import ErrorBoundry from '../error-boundry/error-boundry';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';

import './app.css';


export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        return (
           <ErrorBoundry>
               <SwapiServiceProvider value={this.swapiService}>

                   <BackAnimation />

                   <div className="container">
                       <Header />

                       <RandomPlanet updateTime={10000} />

                       <PeoplePage />

                       <PlanetPage />

                       <StarshipPage />
                    </div>
               </SwapiServiceProvider>
           </ErrorBoundry>
        );
    }
}
