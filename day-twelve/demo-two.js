function add(...n){
    let sum = 0;
    for(let e of n){
        sum+=e;
    }
    return sum;
}

let result = add(5,10,15,20);
console.log(result);