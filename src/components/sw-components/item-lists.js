import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import withData from '../hoc-helper/with-data';
import withChildFunction from '../hoc-helper/with-child-function';

const swapiService = new SwapiService();

const {getAllPlanets,
       getAllPeople,
       getAllStarships} = swapiService;

const renderPeopleList = ({ name, gender }) => `${name} (${gender})`;
const renderPlanetList = ({name}) => name;
const renderStarshipList = ({name, model}) => `${name} (${model})`;

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
