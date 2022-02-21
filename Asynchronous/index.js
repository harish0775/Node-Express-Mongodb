

const myPromise = new Promise((resolve, reject) => {
 // resolve(1);

  reject(new Error('Reject Error message'));
});

myPromise.then(result=>console.log("result",result))
.catch(err=>console.log("Err while Fatch",err.message));




































// console.log("Before");

//  getuser(1,(user)=>{
//      console.log(user);
//      repo(user.githubUser,(repo)=>{
//          console.log("Repos",repo);
//      })
//  });

// function getuser(id,callback){  
//       console.log("Call User from db.......");

// setTimeout(() => {

//     callback ({ id : id,githubUser: "Harish Nishad"});
// }, 4000);

// }
// //console.log("After");

// function repo(_username,callback){
//    console.log("Repositry is Fetching from Github");
//     setTimeout(() => {
//             callback(['repo1' , 'repo2' ,'repo3','repo4']);
//     }, 6000); 
// }
