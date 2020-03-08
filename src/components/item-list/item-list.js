import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';

import './item-list.css';


export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: [],
        loading: true,
        error: false
    };

    componentDidMount() {
        this.loadPeoples();
    }

    onPeoplesLoaded = (peopleList) => {
        this.setState({
            peopleList,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    loadPeoples = () => {
        this.swapiService
            .getAllPeople()
            .then(this.onPeoplesLoaded)
            .catch(this.onError);
    };

    renderPeoples = (persons) => {
        return persons.map(({id, name}) => {
            return (
                <li className="list-group-item l-item"
                    key={id}
                    onClick={() => this.props.onPersonSelected(id)}>

                    {name}
                </li>
            );
        });
    };

    render() {
        const { peopleList, loading, error } = this.state;

        const items = this.renderPeoples(peopleList);

        const loader = loading ? <Loader /> : null;
        const problem = error ? <ErrorIndicator /> : null;

        return (
            <ul className="list-group-flush list-group l-group">
                {loader}
                {problem}
                {items}
            </ul>
        );
    }
}
