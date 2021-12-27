
// CREATE A INSTANCE TO USE XHTTP
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//ULR TO GET DATA
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {

    let xhttp = new XMLHttpRequest();

    // OPEN A GET CONNECTION
    xhttp.open('GET', url_api, true);

    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) { //4 request finished and response is ready
            if (xhttp.status === 200) { //Indica que la petición fue recibida, aceptada y procesada correctamente.
                callback(null, JSON.parse(xhttp.responseText)); //PARSING THE RESPONSE FROM TEXT TO JSON FORMAT
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

// primero buscamos la lista de personajes
fetchData(API, (error1, data1) => {
    // si error, matamos retornando un error
    if (error1) return console.error(error1);
    // luego buscamos en la API el id de Rick
    fetchData(API + data1.results[0].id, (error2, data2) => {
        // si error, matamos retornando un error
        if (error2) return console.error(error2);
        // por ultimo la consulta a la API que contiene su dimension
        fetchData(data2.origin.url, (error3, data3) => {
            // si error, matamos retornando un error
            if (error3) return console.error(error3);

            // mostramos los resultados :) 
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);

            // rutas de las peticiones en orden
            console.log(API);
            console.log(API + data1.results[0].id);
            console.log(data2.origin.url);

        });
    });
});





// PRUEBAS CON LA ANALOGIA DEL TACO PARA COMPRENDER EL EVENT LOOP
// console.log("Taco 1");
// console.log("Taco 2");

// function prepareTaco(taco_number) {
//     return console.log("Taco " + taco_number);
// }

// function requestTaco(taco_number, callback) {
//     console.log("Taco 5");
//     return callback(taco_number);
// }

// // setTimeout(() => {
// // }, 500)

// requestTaco(3, prepareTaco)
// console.log("Taco 4");