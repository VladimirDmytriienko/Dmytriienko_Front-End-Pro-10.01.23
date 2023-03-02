const numbersArray = [1,1,2,3,4,5,5,5,6];;

const numbersArraySetted = new Array(...new Set(numbersArray))
console.log(numbersArraySetted)

//////////////////////////////////////////////////////////////////////////////////
function greetUser(name) {
    const map1 = new Map()
    map1.set("userBob", "Hello Bob nice to see you");
    map1.set("userJane", "How your kids doing Jane?");

    return map1.get(name)
}
console.log(greetUser("userBob"))


////////////////////////////////////////////////////////////////////////////////////
function transformation(data) {
    if (data instanceof Map) {
        return Object.fromEntries(map.entries())
    } else if (data instanceof Object) {
        return new Map(Object.entries(data))
    } 
}
console.log(transformation({
    name: "John",
    age: 30
  }))

