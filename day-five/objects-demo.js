let car = {
    
    company : "Kia",
    model : "Carrens",
    color : "Black",
    price : 2500000,
    milage : 23.45,
    wheels : 4,
    startCar : function(){
        console.log(this.company+" car started");
    },
    stopCar : function(){
        console.log(this.company+" car stopped")
    },
    carDetails : function(){
        console.log("Company of the car is "+this.company);
        console.log("Model of the car is "+this.model);
        console.log("Color of the car is "+this.color);
        console.log("Price of the car is "+this.price);
        console.log("Milage of the car is "+this.milage);
        console.log("Number of wheels of the car are "+this.wheels);
    }
 

}

for(let k in car){
    console.log(k+" -> "+car[k]);
}

// console.log(car["company"]);
// console.log(car.model);
// console.log(car.color);
// console.log(car.price);
// console.log(car.milage);
// console.log(car.wheels);
// console.log(car["startCar"]);
// console.log(car.stopCar);
// console.log(car.carDetails);










// car.type = "MPV";
// delete car.milage;
// car.price = 2400000;

// console.log(car);

// // console.log(car.company);
// // console.log(car.price);
// // console.log(car.milage);
// // // console.log(car["company"]);
// // car.startCar();
// // car.stopCar();
// // car.carDetails();
