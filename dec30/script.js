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

//------------------------------------------------------------------------


window.addEventListener('load', (event) => {
  console.log("Page fully loaded");
})


// ------------------------------------------------------------------------------

const clickButton = document.querySelector(".click button");
const clickCount = document.querySelector(".click p");

clickButton.addEventListener('click', clickButtonIncrement);

function clickButtonIncrement(){
  clickCount.innerHTML = `Click: ${parseInt(clickCount.textContent.split(": ")[1]) + 1}`;
}

// ----------------------------------------------------------------------------------------
const contextmenuButton = document.querySelector(".contextmenu button");
const contextmenuCount = document.querySelector(".contextmenu p");

contextmenuButton.addEventListener('contextmenu', contextmenuButtonIncrement);

function contextmenuButtonIncrement(){
  contextmenuCount.innerHTML = `Contextmenu: ${parseInt(contextmenuCount.textContent.split(": ")[1]) + 1}`;
}

// ----------------------------------------------------------------------------------------
const dblclickButton = document.querySelector(".dblclick button");
const dblclickCount = document.querySelector(".dblclick p");

dblclickButton.addEventListener('dblclick', dblclickButtonIncrement);

function dblclickButtonIncrement(){
  dblclickCount.innerHTML = `Double Click: ${parseInt(dblclickCount.textContent.split(": ")[1]) + 1}`;
}

// ----------------------------------------------------------------------------------------
const mouseDownUpButton = document.querySelector(".mousedown-mouseup button");
const mouseDownCount = document.querySelector(".mousedown-mouseup .mousedown");
const mouseUpCount = document.querySelector(".mousedown-mouseup .mouseup");

mouseDownUpButton.addEventListener('mousedown', mouseDownButtonIncrement);
mouseDownUpButton.addEventListener('mouseup', mouseUpButtonIncrement);

function mouseDownButtonIncrement(){
  mouseDownCount.innerHTML = `Mouse Down: ${parseInt(mouseDownCount.textContent.split(": ")[1]) + 1}`;
}

function mouseUpButtonIncrement(){
  mouseUpCount.innerHTML = `Mouse Up: ${parseInt(mouseUpCount.textContent.split(": ")[1]) + 1}`;
}

// ----------------------------------------------------------------------------------------
const mouseEnterLeaveButton = document.querySelector(".mouseenter-mouseleave button");
const mouseEnterCount = document.querySelector(".mouseenter-mouseleave .mouseenter");
const mouseLeaveCount = document.querySelector(".mouseenter-mouseleave .mouseleave");

mouseEnterLeaveButton.addEventListener('mouseenter', mouseEnterButtonIncrement);
mouseEnterLeaveButton.addEventListener('mouseleave', mouseLeaveButtonIncrement);

function mouseEnterButtonIncrement(){
  mouseEnterCount.innerHTML = `Mouse Enter: ${parseInt(mouseEnterCount.textContent.split(": ")[1]) + 1}`;
}

function mouseLeaveButtonIncrement(){
  mouseLeaveCount.innerHTML = `Mouse Leave: ${parseInt(mouseLeaveCount.textContent.split(": ")[1]) + 1}`;
}

// ----------------------------------------------------------------------------------------
const mouseOverOutButton = document.querySelector(".mouseover-mouseout button");
const mouseOverCount = document.querySelector(".mouseover-mouseout .mouseover");
const mouseOutCount = document.querySelector(".mouseover-mouseout .mouseout");

mouseOverOutButton.addEventListener('mouseover', mouseOverButtonIncrement);
mouseOverOutButton.addEventListener('mouseout', mouseOutButtonIncrement);

function mouseOverButtonIncrement(){
  mouseOverCount.innerHTML = `Mouse Over: ${parseInt(mouseOverCount.textContent.split(": ")[1]) + 1}`;
}

function mouseOutButtonIncrement(){
  mouseOutCount.innerHTML = `Mouse Out: ${parseInt(mouseOutCount.textContent.split(": ")[1]) + 1}`;
}

// ----------------------------------------------------------------------------------------
const mousemoveButton = document.querySelector(".mousemove button");
const mousemoveCount = document.querySelector(".mousemove p");

mousemoveButton.addEventListener('mousemove', mousemoveButtonIncrement);

function mousemoveButtonIncrement(){
  mousemoveCount.innerHTML = `Mouse Move: ${parseInt(mousemoveCount.textContent.split(": ")[1]) + 1}`;
}

// ----------------------------------------------------------------------------------------
// const wheelButton = document.querySelector(".wheel button");
// const wheelCount = document.querySelector(".wheel p");

// wheelButton.addEventListener('wheel', wheelButtonIncrement);

// function wheelButtonIncrement(){
//   wheelCount.innerHTML = `Wheel: ${parseInt(wheelCount.textContent.split(": ")[1]) + 1}`;
// }


// ----------------------------------------------------------------------------------------
// const wheelButton = document.querySelector(".wheel button");
const wheelCount = document.querySelector(".wheel p");

window.addEventListener('wheel', wheelButtonIncrement);

function wheelButtonIncrement(){
  wheelCount.innerHTML = `Wheel: ${parseInt(wheelCount.textContent.split(": ")[1]) + 1}`;
}

// ----------------------------------------------------------------------------------------
const keyDownUpButton = document.querySelector(".keydown-keyup input");
const keyDownCount = document.querySelector(".keydown-keyup .keydown");
const keyUpCount = document.querySelector(".keydown-keyup .keyup");

keyDownUpButton.addEventListener('keydown', keyDownButtonIncrement);
keyDownUpButton.addEventListener('keyup', keyUpButtonIncrement);

function keyDownButtonIncrement(){
  keyDownCount.innerHTML = `Key Down: ${parseInt(keyDownCount.textContent.split(": ")[1]) + 1}`;
}

function keyUpButtonIncrement(){
  keyUpCount.innerHTML = `Key Up: ${parseInt(keyUpCount.textContent.split(": ")[1]) + 1}`;
}

// ----------------------------------------------------------------------------------------
const copyCutPasteButton = document.querySelector(".copy-cut-paste input");
const copyCount = document.querySelector(".copy-cut-paste .copy");
const cutCount = document.querySelector(".copy-cut-paste .cut");
const pasteCount = document.querySelector(".copy-cut-paste .paste");

copyCutPasteButton.addEventListener('copy', copyButtonIncrement);
copyCutPasteButton.addEventListener('cut', cutButtonIncrement);
copyCutPasteButton.addEventListener('paste', pasteButtonIncrement);

function copyButtonIncrement(){
  copyCount.innerHTML = `Copy: ${parseInt(copyCount.textContent.split(": ")[1]) + 1}`;
}

function cutButtonIncrement(){
  cutCount.innerHTML = `Cut: ${parseInt(cutCount.textContent.split(": ")[1]) + 1}`;
}

function pasteButtonIncrement(){
  pasteCount.innerHTML = `Paste: ${parseInt(pasteCount.textContent.split(": ")[1]) + 1}`;
}

//----------------------------------------------------------------------



const form = document.querySelector(".form");
const blurCount = document.querySelector(".blur");
const focusCount = document.querySelector(".focus");
const changeCount = document.querySelector(".change");
const inputCount = document.querySelector(".input");
const submitCount = document.querySelector(".submit");
const resetCount = document.querySelector(".reset");
const searchCount = document.querySelector(".search");





// const blurInputCount = document.querySelector(".form #text");
// blurInputCount.addEventListener('blur', incrementBlurCount);

form.addEventListener('blur', incrementBlurCount, true); //event delegation
form.addEventListener('focus', incrementFocusCount, true);
form.addEventListener('change', incrementChangeCount);
form.addEventListener('input', incrementInputCount);
form.addEventListener('submit', incrementSubmitCount);
form.addEventListener('reset', incrementResetCount);
form.addEventListener('search', incrementSearchCount);


function incrementBlurCount() {
  blurCount.innerHTML = `Blur: ${parseInt(blurCount.textContent.split(": ")[1]) + 1}`;
}

function incrementFocusCount() {
  focusCount.innerHTML = `Focus: ${parseInt(focusCount.textContent.split(": ")[1]) + 1}`;
}

function incrementChangeCount() {
  changeCount.innerHTML = `Change: ${parseInt(changeCount.textContent.split(": ")[1]) + 1}`;
}

function incrementInputCount() {
  inputCount.innerHTML = `Input: ${parseInt(inputCount.textContent.split(": ")[1]) + 1}`;
}

function incrementSubmitCount(event) {
  event.preventDefault();
  submitCount.innerHTML = `Submit: ${parseInt(submitCount.textContent.split(": ")[1]) + 1}`;
}

function incrementResetCount() {
  resetCount.innerHTML = `Reset: ${parseInt(resetCount.textContent.split(": ")[1]) + 1}`;
}

function incrementSearchCount() {
  searchCount.innerHTML = `Search: ${parseInt(searchCount.textContent.split(": ")[1]) + 1}`;
}


//-----------------------------------------------------------------------------------------------

const selectInput = document.querySelector(".select input");
const selectp = document.querySelector(".select p");

selectInput.addEventListener('select', selectInputp);

function selectInputp(event){
  selectp.innerHTML = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd,
  );
}



