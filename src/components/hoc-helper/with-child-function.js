import React from 'react';

const withChildFunction = (WrappedComponent, renderFn) =>  {
    return props => (
        <WrappedComponent {...props}>

            { renderFn }

        </WrappedComponent>
    );
};

export default withChildFunction;
