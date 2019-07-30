// "Traditional JS Class" `Vehicle`
class Vehicle {
  constructor() {
    this.engines = 1;
  }

  ignition() {
    console.log( "Turning on my engine." );
  }

  drive() {
    this.ignition();
    console.log( "Steering and moving forward!" );
  }
}

// "Class" `Car`
class Car extends Vehicle {
  /**
   * @param {number} wheels Numero de llantas
   */
  constructor(wheels = 4) {
    super();
    this.wheels = wheels;
  }

  // override `Vehicle::drive()`
  drive() {
    super.drive();
    console.log( "Rolling on all " + this.wheels + " wheels!" );
  }
}

export default Car;
