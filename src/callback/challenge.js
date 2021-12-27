
// CREATE A INSTANCE TO USE XHTTP
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//ULR TO GET DATA
const API = 'https://rickandmortyapi.com/api/character';

let fetchData = (url_api, callback) => {
    
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url_api, true);
    
    xhttp.onreadystatechange(event => {
        if (xhttp.readyState === 4) { //4 request finished and response is ready
            if (xhttp.status === 200) { //Indica que la petición fue recibida, aceptada y procesada correctamente.
                callback(null, JSON.parse(xhttp.responseText)) //PARSING THE RESPONSE FROM TEXT TO JSON FORMAT
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    })

    xhttp.send();

}







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

