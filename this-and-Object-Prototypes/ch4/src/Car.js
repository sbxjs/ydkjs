// "Traditional JS Class" `Vehicle`
function Vehicle() {
  this.engines = 1;
}
Vehicle.prototype.ignition = function() {
  console.log( "Turning on my engine." );
};
Vehicle.prototype.drive = function() {
  this.ignition();
  console.log( "Steering and moving forward!" );
};

// "Parasitic Class" `Car`
function Car(wheels) {
  var workingWheels = wheels || 4;
  // first, `car` is a `Vehicle`
  var car = new Vehicle();

  // now, let's modify our `car` to specialize it
  car.wheels = workingWheels;

  // save a privileged reference to `Vehicle::drive()`
  var vehDrive = car.drive;

  // override `Vehicle::drive()`
  car.drive = function() {
    vehDrive.call(this);
    console.log("Rolling on all " + this.wheels + " wheels!");
  };

  return car;
}

export default Car;
