import React, { Component, Fragment, Children, cloneElement } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';

import './item-details.css';


const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>

            <span>{ item[field] }</span>
        </li>
    );
};
export { Record };


export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: {},
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

    onItemLoaded = (item) => {
        const { itemId, getImageUrl } = this.props;

        this.setState({
            item,
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

    render() {
        const { item, loading, error, image } = this.state;

        const children = Children.map(this.props.children, child =>
            cloneElement(child, {item} ));

        const loader = loading
                            ? <Loader />
                            : null;

        const problem = error
                            ? <ErrorIndicator />
                            : null;

        const content = !(loading || error)
                            ? <DetailsView item={item}
                                           record={children}
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

const DetailsView = ({ item, record, image }) => {
    return (
        <Fragment>
            <img className="item-image"
                 src={image}
                 alt="item" />

            <div className="card-body">
                <h4>{item.name}</h4>

                <ul className="list-group list-group-flush">
                    {
                        record
                    }
                </ul>
            </div>
        </Fragment>
    );
};

