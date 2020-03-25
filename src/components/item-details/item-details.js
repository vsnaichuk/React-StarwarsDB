import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';

import './item-details.css';


export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        detailsList: {},
        image: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.loadItemDetail();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.loadItemDetail();
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

    onItemLoaded = (detailsList) => {
        const { itemId, getImageUrl } = this.props;

        this.setState({
            detailsList,
            image: getImageUrl(itemId),
            loading: false
        });
    };

    loadItemDetail = () => {
        const { itemId, getData } = this.props;

        if (itemId) {
            getData(itemId)
                .then(this.onItemLoaded)
                .catch(this.onError);
        }
    };


    renderItemDetail = (itemDetail) => {
        return Object.keys(itemDetail).map(el => {
            return (
                <li key={el} className="list-group-item">
                    <span className="term">{el}</span>

                    <span>{itemDetail[el]}</span>
                </li>
            );
        });
    };

    render() {
        const { detailsList, loading, error, image } = this.state;

        const loader = loading ? <Loader /> : null;
        const problem = error ? <ErrorIndicator /> : null;
        const content = !(loading || error)
                            ? <ItemView detailsList={detailsList}
                                        upd={this.renderItemDetail(detailsList)}
                                        image={image} />
                            : null;

        return (
            <div className="item-details card">
                {loader}
                {problem}
                {content}
            </div>
        );
    }
}

const ItemView = ({ detailsList, upd, image }) => {
    const { name } = detailsList;

    return (
        <Fragment>
            <img className="item-image"
                 src={image}
                 alt={name} />

            <div className="card-body">
                <h4>{name}</h4>

                <ul className="list-group list-group-flush">
                    {
                        upd
                    }
                </ul>

            </div>
        </Fragment>
    );
};

