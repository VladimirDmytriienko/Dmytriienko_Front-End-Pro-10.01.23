class Human {
    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }
    
}

class Flat {
    constructor() {
        this.persones = [];
    }
    addResident(resident) {
        this.persones.push(resident); 
        
    }  
}
class House {
    constructor(maxFlats) {
        this.houseFlats = [];
        this.maxFlats = maxFlats;
        
    }
    adddFlats (houseFlats) {
        if(this.houseFlats.length < this.maxFlats){
            this.houseFlats.push(houseFlats);
        } else {
            console.log('House is full.');
        }
    }
}

const Vova = new Human('vova', 'male',);
const Bob = new Human('bob', 'male');

const flat1 = new Flat();
const flat2 = new Flat();

flat1.addResident(Vova);
flat2.addResident(Bob);

const house = new House(2);

house.adddFlats(flat1);
house.adddFlats(flat2);

/////////////////////////////////////////////////////

class Persone {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`Ім'я ${this.name}, Вік ${this.age}`);
    }    
}

class Car {
    constructor(brand, model, year, numberplate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.numberplate = numberplate;
    }
    carOwner(owner) {
        if(owner.age < 18) {
            console.log("Ваш вазраст меньше 18, вам нельзя водить");
        } else {
            this.owner = owner;
        }
    }
    info() {
        console.log(`Бренд: ${this.brand}; Модель: ${this.model}; 
        Год выпуска: ${this.year}; Номер авто: ${this.numberplate}`);

        this.owner.info();
    }
}

const harry = new Persone("Harry", "26");

const meg = new Persone("Meg", "20");

const audiA7 = new Car("audi", "A7", 2018, 'ax7777');
const range = new Car("Range rover", "autobiography ", 2020, '44444');

audiA7.carOwner(harry);
range.carOwner(meg);

audiA7.info();
range.info();

///////////////////////////////////////////////////////////////////////////////////

class Student {
    constructor (name, surname, birthDate ) {
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate; 
        this.marks = [];
        this.attendance = new Array(25);
    
        this.attendanceCount = 0;
        
    }
    getAge(age) {
        this.age = age;
    }
    getAverageGrades(averageGrade) {
        this.averageGrade = averageGrade;
    }
    present() {
        if (this.attendanceCount < 25) {
          this.attendance[this.attendanceCount++] = true;
        }
      }
    
    absent() {
        if (this.attendanceCount < 25) {
        this.attendance[this.attendanceCount++] = false;
        }
    }
    
    summary() {
        const averageAttend = this.attendance.reduce((total, value) => value ? total + 1 : total, 0);
        const average = averageAttend / this.attendance.length;

        if (this.averageGrade >= 90 && average > 0.9) {
            return "Молодець!";
        } else if (this.averageGrade >= 90 || average > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const studentVova = new Student("Vova", "Dm", 1999);
const studentJohn = new Student("John", "Uik", 1977);

studentVova.getAge(23);


studentJohn.getAverageGrades(99);
studentJohn.present();
studentJohn.present();
studentJohn.present();
studentJohn.present();
studentJohn.present();
studentJohn.present();
studentJohn.present();
studentJohn.present();
studentJohn.present();
studentJohn.present();
studentJohn.present();
studentJohn.present();


console.log(studentVova.summary());
console.log(studentJohn.summary());


