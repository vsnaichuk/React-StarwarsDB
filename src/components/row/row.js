import './row.css';
import React from 'react';

const Row = ({ left, right }) => {
    return (
        <div>
            <div className="row mb2">
                <div className="col-md-6">
                    {left}
                </div>

                <div className="col-md-6">
                    {right}
                </div>
            </div>
        </div>
    );
};

export default Row;
