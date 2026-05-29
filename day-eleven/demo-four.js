const user = {
  name: "John",
  age: 25
};

// const a = user.name;
// const b = user.age;

// const {name,age} = user;
// console.log(name)
// console.log(age)

//This wont work
// const {a,b} = user;
// console.log(a);
// console.log(b);

const {name : a,age : b} = user;
console.log(a);
console.log(b);

