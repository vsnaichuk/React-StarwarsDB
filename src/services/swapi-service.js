export default class SwapiService { //клас-сервіс;
    // асинх ізольоване джерело даних
    _apiBase = 'https://swapi.co/api'; //private часть класу
    _apiImage = `https://starwars-visualguide.com/assets/img`;


    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} resived status ${res.status}`);
        }

        return await res.json();
    }

    getPersonImage = (itemId) => {
        return `${this._apiImage}/characters/${itemId}.jpg`;
    }

    getPlanetImage = (itemId) => {
        return `${this._apiImage}/planets/${itemId}.jpg`;
    }

    getStarshipsImage = (itemId) => {
        return `${this._apiImage}/starships/${itemId}.jpg`;
    }

    getAllPeople = async () => {
        const res = await this.getResourse('/people/');
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResourse(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getResourse('/planets/');
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResourse(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResourse('/starships/');
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResourse(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _extractId = (item) => {
        const idRegEx = /\/([0-9]*)\/$/;
        return  item.url.match(idRegEx)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            cargo_capacity: starship.cargo_capacity
        };
    }

}
