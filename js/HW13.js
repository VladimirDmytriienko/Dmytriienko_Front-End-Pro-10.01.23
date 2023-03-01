
function dayToday(givenNum) {
    const now = new Date().setHours(0, 0, 0, 0);
    const timeCompares = new Date(givenNum).setHours(0, 0, 0, 0);
    const isDayToday = (timeCompares === now) ? true : false;
    return isDayToday;
}
console.log(dayToday(1677256979342));


/////////////////////////////////////////////////////////////////////////////////////////

 
function returnDate(d){
    const stringDate = new Date(d);
	const date = stringDate.getDate().toString().padStart(2, "0");
	const month = (stringDate.getMonth() + 1).toString().padStart(2, "0");
	const year = stringDate.getFullYear();

	const h = stringDate.getHours().toString().padStart(2, "0");
	const min = stringDate.getMinutes().toString().padStart(2, "0");

	return `${date}.${month}.${year}, ${h}:${min}`;
}

console.log(returnDate(1577015800000));

//////////////////////////////////////////////////////////////////////


function dateDiference(yourTime) {
    const date1 = new Date(yourTime);
    const date2 = new Date();
    let diff, willOrWas;
    
    if (date2 > date1) {
        diff = date2.getTime() - date1.getTime();
        willOrWas = "прошло";
    
    } else if(date1 < date2) {
        diff = date1.getTime() - date2.getTime();
        willOrWas = "пройдет";
    }

    let msec = diff;
    const yy = Math.floor(msec / 12 / 30 / 24 / 1000 / 60 / 60);
    msec -= yy * 12 * 30 * 24 * 1000 * 60 * 60; 
    const month = Math.floor(msec / 30  / 24 / 1000 / 60 / 60);
    msec -= month * 30 * 24 * 1000 * 60 * 60;
    const dd = Math.floor(msec / 24 / 1000 / 60 / 60);
    msec -= dd * 24 * 1000 * 60 * 60;
    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    
    return `${willOrWas} ${yy} годов/лет ${month}  месяцов ${dd} дней ${hh} часов ${hh} дней ${mm} минут`;
}

console.log(dateDiference(1588983680000));

