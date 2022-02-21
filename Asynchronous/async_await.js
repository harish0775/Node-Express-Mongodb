
async function displaycommits(){
    try{
        const user = await(getUser(1));
        const repos = await(getRepositories(user.gitHubUsername));
        const commits = await(getCommits(repos[0]));
        console.log(commits);
    }
    catch(err){
        console.log('Error',err.message);
    }
}
displaycommits();
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


