

// const myPromise = new Promise((resolve, reject) => {
//  // resolve(1);





//   reject(new Error('Reject Error message'));
// });

// myPromise.then(result=>console.log("result",result))
// .catch(err=>console.log("Err while Fatch",err.message));



































console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

getUser(1)
.then(user => getRepositories(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits=> console.log('commits',commits))
.catch(err => console.log(err.message) );

function getUser(id) {
    console.log('Reading a user from a database...');
    return new Promise ((resolve,_reject)=>{
  setTimeout(() => {
        resolve({ id: id, gitHubUsername: 'mosh' });
        //reject(new err('Reject get User'))
    })
  }, 2000);
}

function getRepositories(_username) {
     console.log('Calling GitHub API...');
    return new Promise((resolve,_reject)=>{
  setTimeout(() => {
     
  var data =  ['repo1', 'repo2', 'repo3'];
   resolve(data);
   console.log('repos',data);
    // reject(new err('GetRepositries is Reject'));
   })
  }, 2000);
}

function getCommits(repo) {
        console.log('Calling GitHub API...');
          return new Promise((resolve,_reject)=>{
                setTimeout(() => {
                      resolve(['commit']);
       // reject(new err('Reject get commits'))
          })
  }, 2000);
}


