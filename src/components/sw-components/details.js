import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details/item-details';

const swapiService = new SwapiService();

const {getPerson,
       getPlanet,
       getStarship,
       getPersonImage,
       getPlanetImage,
       getStarshipsImage} = swapiService;


const PersonDetails = ({ personId }) => (
    <ItemDetails
        itemId={personId}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender:" />
        <Record field="eyeColor" label="Eye Color:" />

    </ItemDetails>
);


const PlanetDetails = ({ planetId }) => (
    <ItemDetails
        itemId={planetId}
        getData={getPlanet}
        getImageUrl={getPlanetImage}>

        <Record field="population" label="Population:" />
        <Record field="rotationPeriod" label="Rotation period:" />
        <Record field="diameter" label="Diameter:" />

    </ItemDetails>
);


const StarshipDetails = ({ starshipId }) => (
    <ItemDetails
        itemId={starshipId}
        getData={getStarship}
        getImageUrl={getStarshipsImage}>

        <Record field="model" label="Model:" />
        <Record field="manufacturer" label="Manufacturer:" />
        <Record field="costInCredits" label="Cost in credits:" />
        <Record field="length" label="Length:" />
        <Record field="cargo_capacity" label="Cargo capacity:" />

    </ItemDetails>
);

export {
    PlanetDetails,
    PersonDetails,
    StarshipDetails
};
