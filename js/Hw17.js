function* getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < 10; i++) {
        yield Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const random = getRandomInt(1, 100);
for (const number of random) {
    console.log(number)
}
//////////////////////////////////////////////////////////////////////

const getUp = () => {
    return new Promise((resolve) => setTimeout(() => {resolve('Проснулся')}, 1000))
}
const brushTeeth  = () => {
    return new Promise(r => setTimeout(() => r('Почистили зубы'), 1000))
}
const haveBreakfast = () => {
    return new Promise(r => setTimeout(() => r('Завтрак'), 1000))
}

const learnJs  = () => {
    return new Promise(r => setTimeout(() => r('Пошел учить JS'), 1000))
}
const day  =  async function  () {
    const up = await getUp()
    console.log(up)
    const teeth = await brushTeeth ()
    console.log(teeth)
    const breakfast = await haveBreakfast()
    console.log(breakfast)
    const js = await learnJs()
    console.log(js)
}
day()



