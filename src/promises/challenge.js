
//GET A INSTANCE OF FETCHDATA USING PROMISES
const fetchData = require('../utils/fetchData');

//ULR TO GET DATA
const API = 'https://rickandmortyapi.com/api/character/';

// primero buscamos la lista de personajes
fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then((data) => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then((data) =>{
        console.log(data.dimension);
    })
    .catch(error => console.error(error))

