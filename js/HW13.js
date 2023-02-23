
function dayToday(givenNum) {
    const now = new Date().setHours(0, 0, 0, 0);
    const asd = (givenNum === now) ? true : false;
    console.log(asd);
}
dayToday(1677015800000);


function returnDate(mileseconds) {
    const date = new Date(mileseconds);
    console.log(date.toString());
}
returnDate(1677015800000);


function dateEr(yourTime) {
    const asd = new Date().getTime();
    console.log (asd == yourTime);
}
dateEr(1677015800000);
