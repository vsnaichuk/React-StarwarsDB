export default class SwapiService { //клас-сервіс;
    // асинх ізольоване джерело даних
    _apiBase = 'https://swapi.co/api'; //private часть класу


    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} resived status ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResourse('/people/');
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResourse(`/people/${id}/`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResourse('/planets/');
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResourse(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResourse('/starships/');
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = this.getResourse(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _extractId(item) {
        const idRegEx = /\/([0-9]*)\/$/;
        return  item.url.match(idRegEx)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargo_capacity: starship.cargo_capacity
        };
    }

}
