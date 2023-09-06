// Asynchronous approach
// console.log("Before");
// getUser(1, (user) => {
//     getRepositories(user.userName, (repos) => {
//         getCommits((commits) => {
//             console.log(commits);
//         })
//     })
// })
// console.log("After");

// Promise approach
console.log("Before");
getUser(1)
.then(user => getRepositories(user.userName))
.then(repos => getCommits(repos[0]))
.then(commits => console.log(commits))
.catch(error => console.log(error.message));
console.log("After");

// getUser() returns a promise resolving user object, and to consume this object we use .then method
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting user object...');
            resolve({ id: id, userName: 'redbull' });
        }, 2000);
    });
}

// getRepositories() returns a prmoise resolving an array of repos of that userName, and consumed
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repositories array...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });

}

// getCommits() returns a promise resolving an array of commit.
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['GitHub commit']);
        }, 2000);
    });

}


/* 

OUTPUT
    Before
    After
    Getting user object...
    Getting repositories array...
    [ 'GitHub commit' ]

*/