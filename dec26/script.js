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

const workTiming = [
  {
    st: 10,
    et: 18,
  },
  {
    st: 9,
    et: 17,
  },
  {
    st: 8,
    et: 16,
  },
  {
    st: 6,
    et: 12,
  },
];

const indiaGMTMilli = 330 * 60 * 1000;

function gmt0() {
  return Date.now() - indiaGMTMilli;
}

function gmtTomillisecond(str) {
  let milli = 0;
  const time = str.substring(1);
  const arrTime = time.split(":");

  milli += parseInt(arrTime[0]) * 60 * 60 * 1000;
  milli += parseInt(arrTime[1]) * 60 * 1000;
  if (str.charAt(0) === "-") {
    milli *= -1;
  }
  //   console.log(milli);
  return milli;
}

const defaultWorkingStet = {
  st : 10,
  et : 18
}

const workTime = {
  startTime: defaultWorkingStet.st,
  endTime: defaultWorkingStet.et,
};

// console.log(new Date(workTime.startTime));

function calWorkHour(d) {
  if (d.getDay() === 0 || d.getDay() === 6) {
    return false;
  }
  const startTime = workTime.startTime.getTime();
  const endTime = workTime.endTime.getTime();

  if (startTime >= endTime) {
    return "Invalid timing";
  }
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
// countryList.forEach((obj) => printTime(obj));

//selecting the select country tag
const selectCountry = document.getElementById("country");

// data to the select tag for options
countryList.forEach((country) => {
  const option = document.createElement("option");
  option.value = country.name;
  option.textContent = country.name;
  selectCountry.appendChild(option);
});

const defaultTime = document.querySelector(".default-time");
// data to the select tag for options
workTiming.forEach((time) => {
  const btn = document.createElement("button");
  btn.value = `${time.st}:${time.et}`;
  btn.textContent = `${time.st}:${time.et}`;
  defaultTime.appendChild(btn);
});

const workTimeStet = document.querySelectorAll(".default-time button");

workTimeStet.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const str = event.target.value.split(":");
    defaultWorkingStet.st = str[0];
    defaultWorkingStet.et = str[1];
    workTimeDetails();
    details();
    setColor(event.target);
  });
});

function setColor(activeBtn) {
  workTimeStet.forEach((btn) => {
    btn.style.backgroundColor = btn === activeBtn ? "#ff9f91" : "";
  });
}



//event listeners
selectCountry.addEventListener("change", details);
window.addEventListener("load", workTimeDetails);
document.querySelector(".work-hour").addEventListener("change", details);
window.addEventListener("load", details);

function workTimeDetails() {
  const d = currentTime(findCountry(selectCountry.value));
  document.querySelector("#start-time").value = `${d.getFullYear()}-${paddedTwo(
    d.getMonth() + 1
  )}-${paddedTwo(d.getDate())}T${paddedTwo(defaultWorkingStet.st)}:${paddedTwo(0)}`;
  document.querySelector("#end-time").value = `${d.getFullYear()}-${paddedTwo(
    d.getMonth() + 1
  )}-${paddedTwo(d.getDate())}T${paddedTwo(defaultWorkingStet.et)}:${paddedTwo(0)}`;
}

//filling the details of the seleted country
function details() {
  const d = currentTime(findCountry(selectCountry.value));

  workTime.startTime = new Date(document.querySelector("#start-time").value);
  workTime.endTime = new Date(document.querySelector("#end-time").value);
  // console.log(workTime.startTime.getTime())

  document.querySelector(".fullDate").innerHTML = `Full Date: ${d
    .toString()
    .substring(0, 25)} GMT ${findCountry(selectCountry.value).gmt}`;
  document.querySelector(".year").innerHTML = `Year: ${d.getFullYear()}`;
  document.querySelector(".month").innerHTML = `Month: ${getMonthName(
    d.getMonth()
  )}`;
  document.querySelector(".date").innerHTML = `Date: ${paddedTwo(d.getDate())}`;
  document.querySelector(".day").innerHTML = `Day: ${getDayName(d.getDay())}`;
  document.querySelector(
    ".time"
  ).innerHTML = `Time: ${paddedTwo(d.getHours())}:${paddedTwo(d.getMinutes())}:${paddedTwo(d.getSeconds())}`;
  document.querySelector(".hours").innerHTML = `Hours: ${paddedTwo(d.getHours())}`;
  document.querySelector(".minutes").innerHTML = `Minutes: ${paddedTwo(d.getMinutes())}`;
  document.querySelector(".seconds").innerHTML = `Seconds: ${paddedTwo(d.getSeconds())}`;
  document.querySelector(".isWorking").innerHTML = `Is-Working: ${calWorkHour(
    d
  )}`;

  // console.log(d.toISOString());
}

function paddedTwo(str) {
  return `${str}`.padStart(2, "0");
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
