// let ar = [8,4,2,3,6,8]

// ar.forEach(function printElement(e){
//     console.log(e)
// });

// ar.forEach(e => console.log(e));

// let sum = 0;

// ar.forEach(function addElements(e){
//     sum = sum + e;
// });

// ar.forEach(e => sum = sum + e);

// console.log(sum);

let ar = [{
            id:1,
            name:"Arun"
          },
          {
            id:2,
            name:"Varun"
          },
          {
            id:3,
            name:"Tharun"
          }];

// ar.forEach(function printNames(e){
//     console.log(e.name);
// });    

ar.forEach(e => console.log(e.name));