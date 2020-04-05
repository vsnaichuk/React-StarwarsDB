import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row/row';
import { PlanetList } from '../sw-components/item-lists';
import { PlanetDetails } from '../sw-components/details';


export default class PlanetPage extends Component {

    state = {
        selectedItem: 2,
    };

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        });
    };

    render() {

        return (
            <ErrorBoundry>
                <Row left={<PlanetList onItemSelected={this.onItemSelected} />}
                     right={<PlanetDetails planetId={this.state.selectedItem} />} />
            </ErrorBoundry>
        );
    }
}
