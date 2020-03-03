import React from 'react';

import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import PlanetDetails from '../planet-details/planet-details';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import StarshipDetails from '../starship-details/starship-details';


import './app.css';

const App = () => {

    const swapi = new SwapiService();

    swapi.getPerson(3)
        .then(p => console.log(p.name))
        .catch((err) => console.log('Could not fetch', err));

    return (
        <div>
            <Header />

            <PlanetDetails />

            <RandomPlanet />

            <ItemList />

            <PersonDetails />

            <StarshipDetails />

        </div>
    )

};

export default App;
