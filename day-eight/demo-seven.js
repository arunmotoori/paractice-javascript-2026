function bakeCake(){
    return new Promise((resolve)=>{
    setTimeout(()=>{resolve("Cake Baked");},30000);
    });
}

function decorateCake(){
    return new Promise((resolve)=>{
    setTimeout(()=>{resolve("Cake Decorated");},20000);
    });
}

function packCake(){
    return new Promise((resolve)=>{
    setTimeout(()=>{resolve("Cake Packed");},10000);
    });
}

function deliverCake(){
    return new Promise((resolve)=>{
    setTimeout(()=>{resolve("Cake Delivered");},10000);
    });
}


 bakeCake().then((result)=>{
                    console.log(result);
                    return decorateCake();
                })
            .then((result)=>{
                    console.log(result);
                    return packCake();
                })
            .then((result)=>{
                    console.log(result);
                    return deliverCake();
                })
            .then((result)=>{
                    console.log(result);
                });;  