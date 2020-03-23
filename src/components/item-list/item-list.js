import React, { Component } from 'react';

import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';

import './item-list.css';


export default class ItemList extends Component {
    state = {
        itemList: [],
        loading: true,
        error: false,
    };

    componentDidMount() {
        this.loadItems();
    }

    onDataLoaded = (itemList) => {
        this.setState({
            itemList,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    loadItems = () => {
        const { getData } = this.props;

        getData()
            .then(this.onDataLoaded)
            .catch(this.onError);
    };

    renderItems = (itemArr) => {
        return itemArr.map(item => {
            const { id } = item;
            const label = this.props.children(item);

            return (
                <li className={`list-group-item l-item`}
                    key={id}
                    onClick={() => this.props.onPersonSelected(id)} >

                    {label}
                </li>
            );
        });
    };

    render() {
        const { itemList, loading, error } = this.state;

        const items = this.renderItems(itemList);

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
