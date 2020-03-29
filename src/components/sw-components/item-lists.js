import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import { withData } from '../hoc-helper/with-data';

const swapiService = new SwapiService();

const {getAllPlanets,
       getAllPeople,
       getAllStarships} = swapiService;

const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};
