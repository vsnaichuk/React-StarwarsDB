import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './app.css';

export default class App extends Component {

    state = {
        selectedPersonId: 1
    };


    onItemSelected = (id) => {
        this.setState({
            selectedPersonId: id
        });
    };


    render() {
        return (
            <div className="container">
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onPersonSelected={this.onItemSelected} />
                    </div>

                    <div className="col-md-6">
                        <PersonDetails selectedPersonId={this.state.selectedPersonId} />
                    </div>
                </div>
            </div>
        );

    }
}
