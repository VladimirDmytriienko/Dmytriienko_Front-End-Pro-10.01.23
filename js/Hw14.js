class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;

        this.arr = [];
    }
    static SIZE_SMALL = {
        price: 50,
        calo: 20
    }
    static Big = {
        price: 100,
        calo: 40
    }
    static STUFFING_CHEESE = {
        price: 10,
        calo: 20
    }
    static STUFFING_Salad = {
        price: 20,
        calo: 5
    }
    static STUFFING_Potato = {
        price: 15,
        calo: 10
    }
    static TOPPING_FLAVO = {
        price: 15,
        calo: 0
    }
    static TOPPING_MAYO = {
        price: 20,
        calo: 5
    }
    addTopping(topping) {
        this.arr.push(topping);
    }
    calculatePrice() {
        const sumArr = this.arr.reduce((total, current) => total + current.price, 0)
        return sumArr + this.size.price + this.stuffing.price
    }
    calculateCalo() {
        const sumArr = this.arr.reduce((total, current) => total + current.calo, 0)
        return sumArr + this.size.calo + this.stuffing.calo
    }
}
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO)
console.log("Calo: " + hamburger.calculateCalo());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_FLAVO);

console.log("Price: " + hamburger.calculatePrice());

/////////////////////////////////////////////////////////////////////////

class SuperMath {
    constructor() {
        this.obj = {}
    }
    
    input() {
        this.obj.X = +prompt("Введите число X: ", 0);
        this.obj.Y = +prompt("Введите число Y: ", 0);
        this.obj.znak = prompt('Введите znak');
    }
    check() { 
        const chekingZnak = confirm(`Хотите сделать: ${this.obj.znak}`)
        if (chekingZnak === true) {
            function doMath(x, znak, y) {
                switch (znak) {
                  case "*":
                    alert(x * y);
                    break;
                  case "/":
                    alert(x / y);
                    break;
                  case "+":
                    alert(x + y);
                    break;
                  case "-":
                    alert(x - y);
                    break;
                  case "%":
                    alert(x % y);
                    break;
                 
                }
            }
            doMath(this.obj.X, this.obj.znak, this.obj.Y);
        } else {
            this.input();
            this.check()
        }
    }
  
}
p = new SuperMath();
p.input();
p.check()


