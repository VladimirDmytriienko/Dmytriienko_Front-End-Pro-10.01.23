
new Promise((resolve, reject) => {
    console.log('Проснулся');
    resolve();
}).then(() => {
    console.log('Почистил зубы');
}).then(() => {
    console.log('Поел');
}).then(() => {
    console.log('Пошел учить JS');
});