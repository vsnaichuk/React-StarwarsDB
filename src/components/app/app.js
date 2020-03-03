import React from 'react';

import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './app.css';

const App = () => {

    const swapi = new SwapiService();

    swapi.getPerson(3)
        .then(p => console.log(p.name))
        .catch((err) => console.log('Could not fetch', err));

    return (
        <div className="container">
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    )

};

export default App;
