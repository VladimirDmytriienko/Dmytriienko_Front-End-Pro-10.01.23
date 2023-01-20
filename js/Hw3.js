//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
"use strict";

const firstStr = prompt('Введіть щось', '');
const secondStr = prompt('Введіть щось', '');
const thirdStr = prompt('Введіть щось', '');

alert(firstStr + ' ' + secondStr + ' ' + thirdStr);


const randomNum = '12345';

const symbOne = randomNum.slice(0, 1);
const symbTwo = randomNum.slice(1, 2);
const symbThree = randomNum.slice(2, 3);
const symbFour = randomNum.slice(3, 4);
const symbFive = randomNum.slice(4, 5);
console.log(symbOne + ' ' + symbTwo + ' ' + symbThree + ' ' + symbFour + ' ' + symbFive);

////////////////////////////////////////////////////////////////////////////////HW7

const mathOper = prompt('Що ви хоче зробити (add, sub, mult, div)', '');
const firstNum = +prompt('Введите первое число', '');
const secondNum = +prompt('Введите второе число', '');

if (mathOper == 'add') {
    alert (`${firstNum} + ${secondNum} = ${firstNum + secondNum} `);
} else if (mathOper == 'sub') {
    alert (`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
} else if (mathOper == 'mult') {
    alert (`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
} else if  (mathOper == 'div') {
    alert ( `${firstNum} / ${secondNum} = ${firstNum / secondNum}`); 
}

///////////////////////////////////////////////////////////////////////////////HW8

const yourBirth = +prompt('Рік твого народження?','');
const yourCity = prompt('У якому місті ти живеш?','');
const yourSport = prompt('Ваш улюблений вид спорту?','');

if (yourBirth === null ) {
    var years = 'Шкода, що Ви не захотіли ввести свій вік';
} else {
    years = 2023 - yourBirth;
}

if (yourSport === 'Футбол') {
    var proffesion = 'Круто! Хочеш стати Мессі?';
} else if (yourSport === 'Баскетбол') {
    var proffesion = 'Круто! Хочеш стати Леброном?';
} else if (yourSport === 'Плавання') {
    var proffesion = 'Круто! Хочеш стати Фелпсом?';
} else if (yourSport === null ) {
    var proffesion = 'Шкода, що Ви не захотіли ввести свій вид спорту';
} else {
    var proffesion = `Ваш спорт ${yourSport}`;
}

if (yourCity === 'Київ' ) {
    var city = 'Ти живеш у столиці України'; 
} else if (yourCity == 'Вашингтон') {
    var city = 'Ти живеш у столиці Америки'; 
} else if (yourCity == 'Лондон') {
    var city = `Ти живеш у столиці Англіїї`; 
} else if (yourCity == null) {
    var city = 'Шкода, що Ви не захотіли ввести своє місто';
} else {
    var city = `Ти живеш у місті ${yourCity}`; 
}

alert (` ${years} \n ${city} \n ${proffesion}`);

/////////////////////////////////////////////////////////

let numOrStr = prompt('input number or string');

switch (numOrStr ) {
    case null:
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    default:
        !isNaN(numOrStr) ? console.log('OK!') : console.log("number is Ba_Nan");
        break;
}