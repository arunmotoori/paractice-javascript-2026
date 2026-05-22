// let ar = [1,5,6,8,7,4,10];

// let x = ar.find(function lessThanSix(e){
//     return e > 6;
// });

// let x = ar.find(e => e > 6);
// let y = ar.find(e => e > 12);

// console.log(x);
// console.log(y);

let ar = [{name:"Arun",exp : 19},
          {name:"Varun",exp:15},
          {name:"Tharun",exp:6},
          {name:"Kishore",exp:4},
          {name:"Ravi",exp:2}];

// let x = ar.find(function expLessThanFive(e){
//     return e.exp < 5;
// });

let x = ar.find(e => e.exp < 5);

console.log(x);
console.log(x.name);
console.log(x.exp);
