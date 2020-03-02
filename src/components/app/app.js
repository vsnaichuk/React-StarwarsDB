import React from 'react';

import './app.css';

const App = () => {
     const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} resived status ${res.status}`)
        }

        const body = await res.json();
        return body
     };

     getResource('https://swapi.co/api/people/1/')
         .then((body) => console.log(body))
         .catch((err) => console.log('Could not fetch', err));



    return (
        <div>

        </div>
    )
};

export default App;
