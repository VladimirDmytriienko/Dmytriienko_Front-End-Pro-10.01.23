
const car = {
    drive: true, 
    brake: true,
    wheels: 4,
    fuelType: "gas",
};
function Vehicle(brand) {
    this.brand = brand;
    this.doorOpen = "toSide";
}
function Vehicle(lamba) {
    this.brand = lamba;
    this.doorOpen = "vertical";
}
Vehicle.prototype = car;


const bmw = new Vehicle('bmw');
const lambo = new Vehicle('lambo');
console.log(lambo);

