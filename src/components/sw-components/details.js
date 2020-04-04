import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context';
import ItemDetails, { Record } from '../item-details/item-details';


const PersonDetails = ({ personId }) => (
    <SwapiServiceConsumer>
        {
            ({ getPerson, getPersonImage }) => (
                <ItemDetails
                    itemId={personId}
                    getData={getPerson}
                    getImageUrl={getPersonImage}>

                    <Record field="gender" label="Gender:" />
                    <Record field="eyeColor" label="Eye Color:" />

                </ItemDetails>
            )
        }
    </SwapiServiceConsumer>
);


const PlanetDetails = ({ planetId }) => (
    <SwapiServiceConsumer>
        {
            ({ getPlanet, getPlanetImage }) => (
                <ItemDetails
                    itemId={planetId}
                    getData={getPlanet}
                    getImageUrl={getPlanetImage}>

                    <Record field="population" label="Population:" />
                    <Record field="rotationPeriod" label="Rotation period:" />
                    <Record field="diameter" label="Diameter:" />

                </ItemDetails>
            )
        }
    </SwapiServiceConsumer>
);


const StarshipDetails = ({ starshipId }) => (
    <SwapiServiceConsumer>
        {
            ({ getStarship, getStarshipsImage }) => (
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
            )
        }
    </SwapiServiceConsumer>
);

export {
    PlanetDetails,
    PersonDetails,
    StarshipDetails
};
