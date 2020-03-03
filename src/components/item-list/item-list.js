import React from 'react';

import './item-list.css'

const ItemList = () => {
    return (
        <ul className="list-group-flush list-group">
            <li className="list-group-item l-item">
                Luke Skywalker
            </li>
            <li className="list-group-item l-item">
                Darth Vader
            </li>
            <li className="list-group-item l-item">
                R2-D2
            </li>
        </ul>
    )
};

export default ItemList
