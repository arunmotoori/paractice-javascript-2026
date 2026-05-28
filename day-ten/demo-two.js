
class Car {

    company;
    model;
    color;
    price;
    milage;
    wheels;

    initializeClassVariables(company,model,color,price,milage,wheels){
        this.company = company;
        this.model = model;
        this.color = color;
        this.price = price;
        this.milage = milage;
        this.wheels = wheels;
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
        console.log("Number of wheels of the car are "+this.wheels);
        console.log("--------------------------------------")
    }

}

const kC = new Car();

kC.initializeClassVariables("Kia","Carrens","Black",2500000,23.45,4);
kC.startCar();
kC.stopCar();
kC.carDetails();

const hAmz = new Car();

hAmz.initializeClassVariables("Honda","Amaze","Grey",900000,14,4);
hAmz.startCar();
hAmz.stopCar();
hAmz.carDetails();