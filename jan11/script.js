import { createHtmlPage, elements } from "./generator.js";
import { Subcriber } from "./subscriber.js";
import { marks, stats } from "./data.js";

//-------------------------------Page Creation--------------------------------------------------


const arr = createHtmlPage(elements);
arr.forEach((tag) => {
  document.body.appendChild(tag);
});

addButton();
function addButton() {
  const showButtonDiv = document.createElement("div");
  showButtonDiv.classList.add("show-button-div");
  const showButton = document.createElement("button");
  showButton.classList.add("show-button");
  showButton.innerText = "Show";
  showButtonDiv.appendChild(showButton);
  const outputContainer = document.querySelector(".outer-container");
  outputContainer.appendChild(showButtonDiv);
  
}

// const listOfMarks = document.querySelectorAll('.outer-container ul li');
// console.log(listOfMarks);
// listOfMarks.forEach((li) => {
//   const inputTag = document.createElement("input");
//   inputTag.type = "checkbox";

//   li.appendChild(document.createElement("input"))
// })
//------------------------------------------------------------------------------------------------------------

//getting mraks from form
const english = document.getElementById("english");
const tamil = document.getElementById("tamil");
const maths = document.getElementById("maths");
const science = document.getElementById("science");
const history = document.getElementById("history");

//submit button
const submitButton = document.getElementById("submit-mark");

//Subcribers list
const calcSubcriber = new Subcriber();
calcSubcriber.addSubscriber(calcTotalMark);
calcSubcriber.addSubscriber(calcAvgMark);
calcSubcriber.addSubscriber(calcMinMark);
calcSubcriber.addSubscriber(calcMaxMark);
calcSubcriber.addSubscriber(calcPercentage);

//FE Subcriber List
const frontEndSubcriber = new Subcriber();
function addFESubcribers() {
  frontEndSubcriber.addSubscriber(() => {
    document.querySelector("#total-mark").innerText = stats.totalMark;
    document.querySelector("#avg-mark").innerText = stats.avgMark;
    document.querySelector("#min-mark").innerText = stats.minMark;
    document.querySelector("#max-mark").innerText = stats.maxMark;
    document.querySelector("#percentage").innerText = stats.percentage;
  });
}



//event listener for marks input change
const markInputs = document.querySelectorAll(".subject-marks  li input");
markInputs.forEach((inputTag) => {
  inputTag.addEventListener("input", calcAndStore);
});



//event listener for submit button
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  calcAndStore();
});




//event listener for show and hide button;
const showButton = document.querySelector(".show-button");
const markList = document.querySelector(".outer-container > ul");
markList.style.color = "red";
// markList.style.display = "none";
showButton.addEventListener('click', () => {
  if(showButton.innerText === "Hide") {
    frontEndSubcriber.clearSubcriber();
    showButton.innerText = "Show";
    markList.style.color = "red";
    

    // markList.style.display = "none";
  }
  else {
    addFESubcribers();
    showButton.innerText = "Hide";
    markList.style.color = "black";
    // markList.style.display = "block";
    calcAndStore();
    
  }

})


function calcAndStore() {
  marks.english = parseInt(english.value) || 0;
  marks.tamil = parseInt(tamil.value) || 0;
  marks.maths = parseInt(maths.value) || 0;
  marks.science = parseInt(science.value) || 0;
  marks.history = parseInt(history.value) || 0;
  calcSubcriber.callSubcriber(); // update marks in store
  frontEndSubcriber.callSubcriber(); // update marks in FE
}




//---------------------------------stats calculations-and get stored----------------------------------------------------
function calcTotalMark() {
  stats.totalMark = Object.values(marks).reduce(
    (acc, curVal) => acc + curVal,
    0
  );
}

function calcAvgMark() {
  stats.avgMark =
    Object.values(marks).reduce((acc, curVal) => acc + curVal, 0) /
    Object.keys(marks).length;
}

function calcMinMark() {
  stats.minMark = Math.min(...Object.values(marks));
}

function calcMaxMark() {
  stats.maxMark = Math.max(...Object.values(marks));
}

function calcPercentage() {
  stats.percentage = parseFloat(stats.avgMark.toFixed(2));
}

//----------------------------------------------------------------------------------------------

