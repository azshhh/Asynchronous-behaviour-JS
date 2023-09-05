console.log("Before");

// Asynchronous 
getUser(1, (user) => {
    getRepositories(user.userName, (repos) => {
        // console.log(repos);  
        getCommits((commits) => {
            console.log(commits);

            // THIS IS CALLED CALLBACK HELL
        })
    })
})
console.log("After");

// Synchronous
console.log("Before");
const user = getUser(1);
const repos = getRepositories(user.userName);
const commits = getCommits(repos[0]);
console.log("After");


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
    Getting user object...
    Getting repositories array...
    GitHub commit

*/