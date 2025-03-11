// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// DONE: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // DONE: Declare properties of the Motorbike class
  // DONE: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // DONE: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // DONE: Create a constructor that accepts the properties of the Motorbike class
    // DONE: The constructor should call the constructor of the parent class, Vehicle
    // DONE: The constructor should initialize the properties of the Motorbike class
    // DONE: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[] = []
    ) {

      super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  // DONE: Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

    // DONE: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // DONE: Override the printDetails method from the Vehicle class
  override printDetails(): void {
  // DONE: The method should call the printDetails method of the parent class
  super.printDetails();
    console.log(
      `VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}kg, Top Speed: ${this.topSpeed}km/h, Color: ${this.color}, Wheels: ${this.wheels.length}`
    );
  }
}
  // DONE: The method should log the details of the Motorbike
  // DONE: The details should include the VIN, make, model, year, weight, top speed, color, and wheels


// Export the Motorbike class as the default export
export default Motorbike;
