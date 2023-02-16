function takeName(name, time) {
  let duration = time.split(" ").pop();
  const nominate = +time.split("").shift();

  if (duration === "minutes") {
    setTimeout(() => {
      console.log(`Hi ${name}, your time is ${time}`);
    }, nominate * 1000 * 60);
  } else if (duration === "hours") {
    setTimeout(() => {
      console.log(`Hi ${name}}, your time is ${time}`);
    }, nominate * 1000 * 3600);
  }
}
takeName("Vova", "1 minutes");


//////////////////////////////////////////////////////
const student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};
let jjjson = JSON.stringify(student);

function whatever(thing) {
    if (typeof thing === 'object'){
        const serialized = JSON.stringify(thing);
        console.log(serialized);
    } else if(typeof thing === "string"){
        const deserialize = JSON.parse(thing);
        console.log(deserialize);
    }
}
whatever(jjjson);

//////////////////////////////////////////////////////////////////



function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

console.log(IsJsonString());