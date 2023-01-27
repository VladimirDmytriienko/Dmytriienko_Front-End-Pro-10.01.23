
let arr = [7, 3, 30, 9, 4, 1, 13, -77];
console.log(arr); 

arr.sort( (a, b) => a - b );
console.log(arr); 

arr.splice(1, 4);
console.log(arr); 

////////////////////////Hw13

let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let arrayPositive = [];
for (let i = 0; i <= array.length; i++) {
    if (array[i]>0) {
        sum += array[i];    
    }    
}
console.log(`Сума позитивних елементів ${sum}`);

for (let i = 0; i <= array.length; i++) {
    if (array[i]>0) {
        arrayPositive.push(array[i]);
    }    
}
console.log(`Кількість позитивних елементів ${arrayPositive.length}` );

let min = 0;
for(let i = 0; i <= array.length; i++){
    if(array[i] < array[min]) {
        min = i;
    }
}
console.log(`мінімальний елемент масиву та його порядковий номер  ${array[min]}  ${min}`);

let arrayNegative = [];
for (let i = 0; i <= array.length; i++) {
    if (array[i]<0) {
        arrayNegative.push(array[i]);
    }    
}
console.log(`Кількість негативних елементів ${arrayNegative.length}` );

let oddNum = [];

for (let i = 0; i <= arrayPositive.length; i++) {
    if(arrayPositive[i] % 2 == 1 ) {
        oddNum.push(arrayPositive[i]); 
    }
}
console.log(`Кількість непарних позитивних елементів: ${oddNum.length}` );


let evenNum = [];
for (let i = 0; i <= arrayPositive.length; i++) {
    if(arrayPositive[i] % 2 == 0 ) {
        evenNum.push(arrayPositive[i]); 
    }
}
console.log(`Кількість парних позитивних елементів: ${evenNum.length}` );

//Знайти суму парних позитивних елементів.
let sumEvenNum = 0;
for (let i=0; i<=evenNum.length; i++) {
    if (evenNum[i]>0) {
        sumEvenNum += evenNum[i]; 
    }    
}
console.log(`Сума парних позитивних елементів ${sumEvenNum}`);

//Знайти суму непарних позитивних елементів.

let sumOddNum = 0;
for (let i=0; i<=oddNum.length; i++) {
    if (oddNum[i]>0) {
        sumOddNum+=oddNum[i];
    }
}
console.log(`Cума непарних позитивних елементів ${sumOddNum}`);

// Знайти добуток позитивних елементів.

let mult = 1;
for (let i=0; i<arrayPositive.length; i++) {
    if (arrayPositive[i]>0) {
        mult *= arrayPositive[i];
    }
}
console.log(mult);

//Знайти найбільший серед елементів масиву, ост альні обнулити.

let max = array[0];
let maxi = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
    array[maxi] = 0;
    maxi = i;
  } else {
    array[i] = 0;
  }
}
console.log(array);