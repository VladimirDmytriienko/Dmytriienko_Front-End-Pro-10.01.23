const addSum = function(){
    let result = 0;
    return function(x) {
        result = result + x;
        return result;
    };
};

const sum = addSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));