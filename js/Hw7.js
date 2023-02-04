const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, cutNum) {
    const index = array.indexOf(cutNum);
    array.splice(index, 1);
    console.log(array);
}
removeElement(array, 5);

////////////////////////////////////////////////////////

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters ) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key); 


////////////////////////////////////////////////////////

let ownArray = ['qwr', 'qwe', 'wqe',1, 2, 3, 4, 5, 6, 7, 'sdc', 'wq' , 'vc', 'h', 'sdv', 1, 44, 1, 1, 1, 'end'];

function defineAverage() {
  const numbers = ownArray.filter(x => !isNaN(x));
  if (numbers.length == 0){
    return 0;
  }
  const sum = numbers.reduce((prev, curr) => prev + curr);

  return sum / numbers.length;
}
console.log(defineAverage());

///////////////////////////

function doMath(x, znak , y) {
    if (znak == '*' ) {
        console.log(x*y);
    } else if (znak == '+') {
        console.log(x+y);
    } else if (znak == '-') {
        console.log(x-y);
    }
    else if (znak == '/') {
        console.log(x/y);
    }
    else if (znak == '%') {
        console.log(x%y);
    } else if (znak == '**') {
        console.log(x**y);
    }
    
}
doMath(77, "%" ,23);
  
/////////////////////////////////////////////////

function arrAdd(x, y, r) {
    let arr = [];
    let amount = +x;

    for(let i = 0; i < amount; i++) {
        arr.push([]);

        let amount2 = y + (i + 1);

        for(let j = 0; j < amount2; j++) {
            let elem = r + (j + 1);
            arr[i].push([elem]);
        }
    }

    console.log(arr);
}

let functionResult = arrAdd(1, 2, 3 );


////////////////////////////////////////////////


function func(string, pattern){
    const str = string.split('').filter( x => !pattern.includes(x)).join('');
    console.log(str);
}
   
func('hello world', ['l', 'd']);

