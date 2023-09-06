async function displayCommits() {
    const user = await getUser(1);
    const repos = await getRepositories(user.userName);
    const commits = await getCommits(repos[0]);
    console.log(commits);
}
displayCommits();

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting user object...');
            resolve({ id: id, userName: 'redbull' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repositories array...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });

}


function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['GitHub commit']);
        }, 2000);
    });

}
