let car = {
  ride() {
    this.isMoving = true;
  },
  stop() {
    this.isMoving = false;
  },
};

let bmw = {
  name: "BMW",
  doors: "gorizontal",
  __proto__: car,
};

let lambo = {
  name: "Lambo",
  doors: "vertical",
  __proto__: car,
};

bmw.ride();
console.log(bmw.isMoving);
