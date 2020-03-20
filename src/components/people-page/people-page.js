import './people-page.css';
import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

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

        return (
            <div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onPersonSelected={this.onPersonSelected}
                                  getData={this.swapiService.getAllPeople} />
                    </div>

                    <div className="col-md-6">
                        <PersonDetails selectedPersonId={this.state.selectedPersonId} />
                    </div>
                </div>
            </div>
        );
    }
}
