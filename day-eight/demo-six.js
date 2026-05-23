// function bakeCake(){
//     const cakePromise = new Promise((resolve)=>{
//     setTimeout(()=>{resolve("Cake Baked");},30000);
//     });
//     return cakePromise;
// }

function bakeCake(){
    return new Promise((resolve)=>{
    setTimeout(()=>{resolve("Cake Baked");},30000);
    });
}


bakeCake().then((result)=>console.log(result));  