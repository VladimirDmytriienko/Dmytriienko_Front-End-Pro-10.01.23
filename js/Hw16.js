new Promise((resolve, reject) => {
    console.log('Проснулся');
    resolve(4);
})
.then((result) => {
    console.log('Почистил зубы');
    return result * 2
})
.then((result) => {
    console.log('Поел');
    return result * 2
})
.then((result) => {
    console.log('Пошел учить JS');
    console.log(result)
   
});