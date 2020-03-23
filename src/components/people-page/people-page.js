import './people-page.css';
import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

const Row = ({ left, right }) => {
    return (
        <div>
            <div className="row mb2">
                <div className="col-md-6">
                    {left}
                </div>

                <div className="col-md-6">
                    {right}
                </div>
            </div>
        </div>
    );
};

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPersonId: 1,
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPersonId: id,
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const itemList = (
                <ItemList onPersonSelected={this.onPersonSelected}
                          getData={this.swapiService.getAllPeople}>

                    {(i) => (
                        `${i.name} (${i.birthYear})`
                    )}

                </ItemList>
        );

        const personDetails = (
            <PersonDetails selectedPersonId={this.state.selectedPersonId} />
        );

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}
