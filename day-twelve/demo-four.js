const user = {
  name: "Ravi",
  age: 25,
  city: "Hyderabad"
};

//const {...userDetails} = user;

const {city,...userDetails} = user;

console.log(city);
console.log(userDetails);

// const {name,age,city} = user;

// console.log(name);
// console.log(age);
// console.log(city);