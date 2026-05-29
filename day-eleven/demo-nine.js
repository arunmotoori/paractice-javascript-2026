const car = {
    company : "Kia",
    model : "Carrens",
    color : "Black"
}

const carTwo = {
    ...car,
    price : 500000
}

console.log(carTwo);