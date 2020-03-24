import './people-page.css';
import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';


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

        const personDetails = (
            <PersonDetails
                selectedPersonId={this.state.selectedPersonId}
            />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        );
    }
}
