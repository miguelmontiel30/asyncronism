// ESTRUCTURA BASICA DE UNA PROMESA
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Yujuuu!');
        } else {
            reject('Oppps!');
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) { 
            setTimeout(() => {
                resolve('Yujuu!');
            }, 2000);
        } else {
            const error = new Error('Opps!');
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))