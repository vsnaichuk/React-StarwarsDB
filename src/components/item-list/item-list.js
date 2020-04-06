import React from 'react';

import './item-list.css';


const ItemList = (props) => {
    const {children, onItemSelected, data} = props;

    const renderItems = itemArr =>
        itemArr.map(item => {
            const { id } = item;
            const label = children(item);

            return (
                <li className={`list-group-item l-item`}
                    key={id}
                    onClick={() => onItemSelected(id)} >

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

ItemList.defaultProps = {
    onItemSelected: () => {}
};

export default ItemList;
