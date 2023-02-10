function pow(num, degree) {
    if (degree == 1) {
      return num;
    } else {
      return num * pow(num, degree - 1);
    }
  }

console.log( pow(4, 5) );
/////////////////////////////////////////////////////
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();



