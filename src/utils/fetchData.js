// CREATE A INSTANCE TO USE XHTTP
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {

        const xhttp = new XMLHttpRequest();

        // OPEN A GET CONNECTION
        xhttp.open('GET', url_api, true);

        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) { //request finished and response is ready

                //Indica que la petición fue recibida, aceptada y procesada correctamente.
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText)) //SUCCESS
                    : reject(new Error('Error ' + url_api)) //REQUEST HAS AN ERROR
            }
        });

        xhttp.send();

    });
}

module.exports = fetchData;