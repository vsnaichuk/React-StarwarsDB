import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';

import './person-details.css';


export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        detailsList: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.loadPersonDetail();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
            this.loadPersonDetail();
            this.setState({
                loading: true
            });
        }
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    onPersonLoaded = (detailsList) => {
        this.setState({
            detailsList,
            loading: false
        });
    };

    loadPersonDetail = () => {
        const { selectedPersonId } = this.props;

        if (selectedPersonId) {
            this.swapiService.getPerson(selectedPersonId)
                .then(this.onPersonLoaded)
                .catch(this.onError);
        }
    };


    renderPersonDetail = (personDetail) => {
        return Object.keys(personDetail).map(el => {
            return (
                <li key={el} className="list-group-item">
                    <span className="term">{el}</span>

                    <span>{personDetail[el]}</span>
                </li>
            );
        });
    };

    render() {
        const { detailsList, loading, error } = this.state;

        const loader = loading ? <Loader /> : null;
        const problem = error ? <ErrorIndicator /> : null;

        const content = !(loading || error)
                            ? <PersonView detailsList={detailsList}
                                          upd={this.renderPersonDetail(detailsList)}
                                          personId={this.props.selectedPersonId} />
                            : null;

        return (
            <div className="person-details card">
                {loader}
                {problem}
                {content}
            </div>
        );
    }
}

const PersonView = ({ detailsList, upd, personId }) => {
    return (
        <Fragment>
            <img className="person-image"
                 src={
                     `https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`}
                 alt={detailsList.name} />

            <div className="card-body">
                <h4>{detailsList.name}</h4>

                <ul className="list-group list-group-flush">
                    {upd}
                </ul>

            </div>
        </Fragment>
    );
};

