import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row/row';
import { StarshipList } from '../sw-components/item-lists';
import { StarshipDetails } from '../sw-components/details';


export default class StarshipPage extends Component {

    state = {
        selectedItem: 15,
    };

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        });
    };

    render() {

        return (
            <ErrorBoundry>
                <Row left={<StarshipList onItemSelected={this.onItemSelected} />}
                     right={<StarshipDetails starshipId={this.state.selectedItem} />} />
            </ErrorBoundry>
        );
    }
}
