let countryList = [
  {
    name: "Afghanistan",
    gmt: "+04:30",
  },
  {
    name: "Barbados",
    gmt: "-04:00",
  },
  {
    name: "Haiti",
    gmt: "-05:00",
  },
  {
    name: "Honduras",
    gmt: "-06:00",
  },
  {
    name: "Hong Kong (China)",
    gmt: "+08:00",
  },
  {
    name: "Hungary",
    gmt: "+01:00",
  },
  {
    name: "Iceland",
    gmt: "+00:00",
  },
  {
    name: "India",
    gmt: "+05:30",
  },
  {
    name: "Japan",
    gmt: "+09:00",
  },
  {
    name: "Malaysia",
    gmt: "+08:00",
  },
  {
    name: "Marshall Islands",
    gmt: "+12:00",
  },
];

const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const indiaGMTMilli = 330 * 60 * 1000;

function gmt0() {
  return Date.now() - indiaGMTMilli;
}

function gmtTomillisecond(str) {
  let milli = 0;
  const time = str.substring(1);
  const arrTime = time.split(":");
  //   console.log(parseInt(arrTime[0]));
  //   console.log(parseInt(arrTime[1]));

  milli += parseInt(arrTime[0]) * 60 * 60 * 1000;
  milli += parseInt(arrTime[1]) * 60 * 1000;
  if (str.charAt(0) === "-") {
    milli *= -1;
  }
  //   console.log(milli);
  return milli;
}

const workTime = {
  startTime: 10,
  endTime: 18,
};

function calWorkHour(d) {
  if (d.getDay === 0 || d.getDay === 6) {
    return false;
  }
  let startTime = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    10,
    0,
    0
  ).getTime();
  let endTime = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    18,
    0,
    0
  ).getTime();
  if (d.getTime() >= startTime && d.getTime() <= endTime) {
    return true;
  }
  return false;
}

// returning the date object
function currentTime(obj) {
  const milli = gmtTomillisecond(obj.gmt);
  const country = obj.name;
  const d = new Date(gmt0() + milli);
  return d;
}

// just  printing the time
function printTime(obj) {
  const d = currentTime(obj);
  console.log(
    `${
      obj.name
    } ====> ${d.toDateString()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} GMT: ${
      obj.gmt
    } ====> work-Hour: ${calWorkHour(d)}`
  );
}

// to find the country's  object using its name
function findCountry(name) {
  return countryList.find((country) => {
    if (country.name === name) {
      return country;
    }
  });
}

//to get the day name
function getDayName(dayNameIndex) {
  return dayName[dayNameIndex];
}

//to get the month name
function getMonthName(monthNameIndex) {
  return monthName[monthNameIndex];
}

//pritiing all the countries date in the console
countryList.forEach((obj) => printTime(obj));

//selecting the select country tag
const selectCountry = document.getElementById("country");
selectCountry.id = "countrySelect";

// data to the select tag for options
countryList.forEach((country) => {
  const option = document.createElement("option");
  option.value = country.name;
  option.textContent = country.name;
  selectCountry.appendChild(option);
});

//event listeners
selectCountry.addEventListener("change", details);
window.addEventListener("load", details);

//filling the details of the seleted country
function details() {
  const d = currentTime(findCountry(selectCountry.value));

  document.querySelector(".fullDate").innerHTML = `Full Date: ${d}`;
  document.querySelector(".year").innerHTML = `Year: ${d.getFullYear()}`;
  document.querySelector(".month").innerHTML = `Month: ${getMonthName(d.getMonth())}`;
  document.querySelector(".date").innerHTML = `Date: ${d.getDate()}`;
  document.querySelector(".day").innerHTML = `Day: ${getDayName(d.getDay())}`;
  document.querySelector(".time").innerHTML = `Time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  document.querySelector(".hours").innerHTML = `Hours: ${d.getHours()}`;
  document.querySelector(".minutes").innerHTML = `Minutes: ${d.getMinutes()}`;
  document.querySelector(".seconds").innerHTML = `Seconds: ${d.getSeconds()}`;
  document.querySelector(".isWorking").innerHTML = `Is-Working: ${calWorkHour(d)}`;
  console.log(d.toISOString());
  document.querySelector("#start-time").value = d.toISOString().slice(0, 16);
}

//-----------------------------------------------------------------------------------

// console.log("Hello World!!");

//--------------------------------------------------------
// simple use of this keyword inside a fuction of a object

// const person = {
//     name : "Dhanvanth",
//     printName : function() {
//         console.log(this.name);
//     }
// }
// person.printName();

// --------------------------------------------------------------

// function printThis() {
//     console.log(this.name);
// }

// const obj1 = {
//     name : "Dhanvanth"
// }
// const obj2 = {
//     name : "S B"
// }

// console.log(obj1) // {name: 'Dhanvanth'}
// console.log(obj2) // {name: 'S B'}

// obj1.printThis = printThis;
// obj2.printThis = printThis;

// obj1.printThis(); //Dhanvanth
// obj2.printThis(); //S B

// console.log(obj1) // {name: 'Dhanvanth', printThis: ƒ}
// console.log(obj2) // {name: 'S B', printThis: ƒ}

//---------------------------------------------------------------------

// const a = {
//     name : "a",
//     printName : function() {
//         console.log(this.name);
//     }
// }

// const b = {
//     name : "b"
// }

// console.log(a); //{name: 'a', printName: ƒ}
// console.log(b); //{name: 'b'}

// b.printName = a.printName;
// console.log(b); //{name: 'b', printName: ƒ}

// b.printName(); //b

//---------------------------------------------------------------------------

// const person = {
//     name : "abc",
//     greet : function() {
//         console.log(this.name);
//     },
//     greetArrow : () => console.log(this)
// }

// person.greet() //abc

// person.greetArrow() //window object

//-------------------------------------------------------------

// const person = {
//     name : "Dhanvanth",
//     printName : function(){

//         // const referenceThis = this;
//         // setTimeout(
//         //     function(){
//         //         console.log(referenceThis.name)
//         //     },
//         //     2000
//         // )

//         setTimeout(
//             () => console.log(this.name),
//             2000
//         )

//     }
// }

// person.printName()

//-------------------------------------------------------------
