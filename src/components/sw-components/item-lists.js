import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import { withData } from '../hoc-helper/with-data';

const swapiService = new SwapiService();

const {getAllPlanets,
       getAllPeople,
       getAllStarships} = swapiService;

const renderPeopleList = ({ name, gender }) => `${name} (${gender})`;
const renderPlanetList = ({name}) => name;
const renderStarshipList = ({name, model}) => `${name} (${model})`;

const withChildFunction = (WrappedComponent, renderFn) =>  {
    return props => (
        <WrappedComponent {...props}>

            { renderFn }

        </WrappedComponent>
    );
};

const PersonList = withData(
                        withChildFunction(ItemList, renderPeopleList),
                        getAllPeople);

const PlanetList = withData(
                        withChildFunction(ItemList, renderPlanetList),
                        getAllPlanets);

const StarshipList = withData(
                        withChildFunction(ItemList, renderStarshipList),
                        getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};
