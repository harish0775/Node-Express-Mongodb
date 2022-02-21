//Callback
//async Await
//promises

console.log("Before");
getuser(1,function(user){
    console.log(user);
});
function  getuser(id,Callback){
setTimeout(() => {
      console.log("User is Call from data base")

        Callback({id : id  ,Username  :"harish0775"});

}, 2000);
}
console.log("Afer")