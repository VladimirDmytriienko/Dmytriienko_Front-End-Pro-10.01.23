new Promise(resolve => resolve("Проснулся"))
.then(value => value + " Почистил зубы")
.then(value => value + " Поел")
.then(value => value + " Пошел учить JS")
.then(finalValue => console.log(finalValue));