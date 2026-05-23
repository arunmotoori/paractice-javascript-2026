let cakePromise = new Promise((resolve,reject)=>{
    let cakeBurned = false;
    if(cakeBurned){
        reject("Cake Burned");
    }else{
        resolve("Cake Baked")
    }
});


cakePromise
.then((result)=>console.log(result))
.catch((error)=>console.log(error));

