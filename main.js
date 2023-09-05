console.log("Before");

// Cosuming the callbacks 
getUser(1, (user) => {
    getRepositories(user.userName, (repos) => {
        getCommits((commits) => {
            console.log(commits);

            // THIS IS CALLED CALLBACK HELL
        })
    })
})

console.log("After");

// Creating callbacks
function getUser(id, callback) {
    setTimeout(() => {
        console.log('Getting user object...');
        callback({ id: id, userName: 'redbull' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Getting repositories array...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(commits) {
    console.log('GitHub commit');
}











/* 

OUTPUT
    Before
    After
    Reading user from database...
    { id: 1, userName: 'redbull' 

*/