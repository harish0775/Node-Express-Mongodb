const p = new Promise((resolve,reject)=>{
    console.log('Aync operation 1..........')
    setTimeout(() => {
        
        resolve(1);
        //reject(new Error('Becase something Faile'))
    }, 2000);
})

const p2 = new Promise((resolve)=>{
   
    setTimeout(() => {
        console.log('Aync operation 2..........')
        resolve(2);
    }, 2000);
})

//return all promise the use ___promise.all
//return any first promise in array the use ___race

Promise.race([p,p2])
.then(result=>console.log(result)).catch(err =>console.log(err.message));

