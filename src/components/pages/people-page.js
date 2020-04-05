import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row/row';
import { PersonList } from '../sw-components/item-lists';
import { PersonDetails } from '../sw-components/details';


export default class PeoplePage extends Component {

    state = {
        selectedItem: 1,
    };

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        });
    };

    render() {

        return (
            <ErrorBoundry>
                <Row left={<PersonList onItemSelected={this.onItemSelected} />}
                     right={<PersonDetails personId={this.state.selectedItem} />} />
            </ErrorBoundry>
        );
    }
}
