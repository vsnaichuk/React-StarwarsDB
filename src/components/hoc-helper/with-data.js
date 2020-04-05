import React, { Component } from 'react';

import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';


const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: [],
            loading: true,
            error: false
        };

        componentDidMount() {
            this.loadItems();
        }

        onDataLoaded = (data) => {
            this.setState({
                data,
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
            const { data, loading, error } = this.state;

            if (loading) return <Loader />;

            if (error) return <ErrorIndicator />;

            return (
                <View
                    {...this.props}
                    data={data} />
            );
        }
    };
};

export default withData;
