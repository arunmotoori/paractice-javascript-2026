
export default class Car {

    static wheels = 4;

    constructor(company,model,color,price,milage){
        this.company = company;
        this.model = model;
        this.color = color;
        this.price = price;
        this.milage = milage;
    }

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
        console.log("Number of wheels of the car are "+Car.wheels);
        console.log("--------------------------------------")
    }

}

