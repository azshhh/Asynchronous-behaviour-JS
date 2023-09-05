console.log("Before");

const user = getUser(1)
console.log(user.id);

console.log("After");

function getUser(id) {
    setTimeout(() => {
        console.log('Reading user from database...');
        return { id: id, userName: 'redbull' }
    }, 2000);
}

// OUTPUT
    // Before
    // undefined
    // After