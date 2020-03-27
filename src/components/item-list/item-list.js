import React from 'react';

import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helper/with-data';

import './item-list.css';


const ItemList = (props) => {
    const {children, onPersonSelected, itemList} = props;

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

            { renderItems(itemList) }

        </ul>
    );
};


const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
