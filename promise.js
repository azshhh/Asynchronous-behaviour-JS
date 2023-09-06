// Creating a promise
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Resolving...');
        resolve(1);
        // console.log('Rejcting...');
        // reject(new Error('message'));
    }, 2000);
})


// Consuming a promise
p
    .then(result => console.log(result))
    .catch(error => console.log(error.message));