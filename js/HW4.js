let b = "";
for (let i = 10; i <= 20; i++) {
  b += i+ ",";
}
console.log(b);

let a;
for (let i = 10; i <= 20; i++) {
    a = i ** 2;
    console.log(a);
}

for (let i = 1; i<=7; i++) { 
    console.log(i + "*" + '7' + "=" + i*7 );
}

let c = 0;
for (let i = 1; i<=15; i++) { 
    c += i;
}
console.log(c);

let d = 15;
for (let i = 16; i<=35; i++) { 
    d = d * i;
}
console.log(d);

let e = 0;
for (let i = 1; i<=500; i++) { 
    e += i/500;
}
console.log(e);


let f = 30; 
for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
      f += i;
    }
}
console.log(f);


for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
}

let g = 20;
for(let i = 0; i <= g; i++) {
  if(g % i == 0) {
    console.log(i);
  }
}


let h = 20;
let amount = 0;
for(let i = 0; i <= h; i++) {
  if(h % i == 0) {
    if (i % 2 === 0) {
      amount++;
    }
  }
}
console.log(amount);

let k = 20;
let sum = 0;
for(let i = 0; i <= k; i++) {
  if(k % i == 0) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
}
console.log(sum);


for( let a = 1; a <= 10; a++){
  for(let j = 1; j <= 10; j++){

    console.log(a + "*" + j + " = " + a*j);
  
  }
}

////////////////////////////////////////////////////HW11

let l = "";
for (let i = 20; i <= 30; i += 0.5) {
  l += i + " ";
}
console.log(l);


let m = "";
for (let i = 10; i <= 100; i += 10) {
  m += i*27 + " ";
}
console.log(m);

let n = 50;
let o;
for (let i = 1; i <= 100; i++) {
  o=i**2;
  if( o<n ) {
    console.log(i);
  }
}


function primeNumb(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Число должно быть больше 1";
  }
}
console.log(primeNumb(19));



function isPowerOfThree(num) {
  while (num % 3 == 0) {
    num /= 3;
  }
  return num == 1;
}
console.log(isPowerOfThree(81));


