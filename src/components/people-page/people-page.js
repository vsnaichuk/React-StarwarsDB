import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';

import './people-page.css';


export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPersonId: 1,
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPersonId: id,
        });
    };

    render() {
        const itemList = (
            <ItemList onPersonSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>

                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        );

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedPersonId}
            />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
            </ErrorBoundry>
        );
    }
}
