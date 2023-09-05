console.log("Before");

getUser(1, function (user) {
    console.log(user);
})

console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database...');
        callback({ id: id, userName: 'redbull' });
    }, 2000);
}

/* 

OUTPUT
    Before
    After
    Reading user from database...
    { id: 1, userName: 'redbull' 

*/