
class Car {

    company = "Kia";
    model = "Carrens";
    color = "Black";
    price = 2500000;
    milage = 23.45;
    wheels = 4;

    startCar(){
        console.log(this.company+" car has started");
    }

    stopCar(){
        console.log(this.company+" car has stopped");
    }

    carDetails(){
        console.log("Company of the car is "+this.company);
        console.log("Model of the car is "+this.model);
        console.log("Color of the car is "+this.color);
        console.log("Price of the car is "+this.price);
        console.log("Milage of the car is "+this.milage);
        console.log("Number of wheels of the car are "+this.wheels);
        console.log("--------------------------------------")
    }

}

const car1 = new Car();

console.log(car1);

console.log(car1.wheels);

car1.startCar();
car1.stopCar();
car1.carDetails();

