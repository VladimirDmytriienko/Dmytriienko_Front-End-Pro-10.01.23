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

