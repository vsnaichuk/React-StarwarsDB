import React, { Component } from 'react';

import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';


const withData = (View, getData) => {
    return class extends Component {
        state = {
            itemList: [],
            loading: true,
            error: false
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
            getData()
                .then(this.onDataLoaded)
                .catch(this.onError);
        };


        render() {
            const { itemList, loading, error } = this.state;

            const loader = loading ? <Loader /> : null;
            const problem = error ? <ErrorIndicator /> : null;
            const content = !(loading || error)
                ? <View {...this.props}
                        itemList={itemList} />
                : null;

            return (
                <div className="list-group">
                    {loader}
                    {problem}
                    {content}
                </div>
            );
        }
    };
};

export { withData };
