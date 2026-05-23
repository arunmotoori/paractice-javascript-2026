const cakePromise = new Promise((resolve)=>{
    setTimeout(()=>{resolve("Cake Baked");},30000);
});

cakePromise.then((result)=>console.log(result));  