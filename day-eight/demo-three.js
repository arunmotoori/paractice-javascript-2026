const cakePromise = new Promise((resolve,reject)=>{
    resolve("Cake Baked");
});

cakePromise.then((result)=>console.log(result));