import React, { Component } from 'react';

import BackAnimation from '../back-animation/back-animation';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import ErrorBoundry from '../error-boundry/error-boundry';
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
                       <RandomPlanet />
                       {/*<Row left={personDetails}*/}
                       {/*     right={starshipDetails} />*/}

                       <PersonDetails personId={12} />
                       <PlanetDetails planetId={10} />
                       <StarshipDetails starshipId={5} />

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
               </SwapiServiceProvider>
           </ErrorBoundry>

        );

    }
}
