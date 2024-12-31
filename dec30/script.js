// element.addEventListener(event, function, useCapture);

// event => HTML DOM Event
//function => Event handler
//-----------------------------------------------------

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", alertBtn1);

function alertBtn1() {
  console.log("Button-1");
}

//---------------------------------------------------
//multiple event handler for smae element

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", alertBtn2First);
btn2.addEventListener("click", alertBtn2Second);

function alertBtn2First() {
  console.log("Button-2 -> 1st fun");
}

function alertBtn2Second() {
  console.log("Button-2 -> 2nd fun");
}

//------------------------------------------------------

const btn3 = document.getElementById("btn3");

btn3.addEventListener("mouseover", alertBtn3Mouseover);
btn3.addEventListener("click", alertBtn3Click);
btn3.addEventListener("mouseout", alertBtn3Mouseout);

function alertBtn3Mouseover() {
  console.log("Button-3 ->  MouseOver");
}

function alertBtn3Click() {
  console.log("Button-3 -> clicked");
}

function alertBtn3Mouseout() {
  console.log("Button-3 -> MouseOut");
}

//--------------------------------------------

window.addEventListener("resize", randomNumber);

function randomNumber() {
  const randomNum = document.getElementById("resize");
  randomNum.innerHTML = `${randomNum.innerText.substring(0, 15)} ${Math.trunc(
    Math.random() * 100
  )}`;
}

//---------------------------------------------------

const btn4 = document.getElementById("btn4");

function randomMultiple(a, b) {
  btn4.innerHTML = `${btn4.innerText.substring(0, 15)} ${a} * ${b} = ${a * b}`;
}

btn4.addEventListener("click", () => {
  const a = Math.trunc(Math.random() * 10);
  const b = Math.trunc(Math.random() * 10);
  randomMultiple(a, b);
});

//--------------------------------------------------------


const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

btn5.addEventListener(
    "click",
    function () {
        console.log("btn5");
    },
    false
);

btn6.addEventListener(
    "click",
    function () {
        console.log("btn6");
    },
    true
);

div1.addEventListener(
    "click",
    function () {
        console.log("div1");
    },
    false
);

p1.addEventListener(
    "click",
    function (e) {
        // e.stopPropagation();
        console.log("p1");
    },
    false
);

div2.addEventListener(
    "click",
    function () {
        console.log("div2");
    },
    true
);

p2.addEventListener(
    "click",
    function (e) {
        console.log("p2");
    },
    true
);
