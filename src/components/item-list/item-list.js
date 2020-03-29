import React from 'react';

import './item-list.css';


const ItemList = (props) => {
    const {children, onPersonSelected, data} = props;

    const renderItems = itemArr =>
        itemArr.map(item => {
            const { id } = item;
            const label = children(item);

            return (
                <li className={`list-group-item l-item`}
                    key={id}
                    onClick={() => onPersonSelected(id)} >

                    {label}
                </li>
            );
        });


    return (
        <ul className="list-group-flush list-group l-group">

            { renderItems(data) }

        </ul>
    );
};

export default ItemList;
