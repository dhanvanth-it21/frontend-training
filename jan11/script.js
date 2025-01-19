import { Subcriber } from "./subscriber.js";
import { marks, stats, elements } from "./data.js";

//-------------------------------Page Creation--------------------------------------------------
function createHtmlPage(elements) {
  const arr = [];
  elements.forEach((element) => {
    const tag = document.createElement(element.tag);
    if (element.class) {
      tag.classList.add(`${element.class}`);
    }
    tag.textContent = element.text;
    addingStyle(element, tag);
    if (element.children) {
      const childArr = createHtmlPage(element.children);
      childArr.forEach((childTag) => {
        tag.appendChild(childTag);
      });
    }
    if (element.attributes) {
      for (const i in element.attributes) {
        tag.setAttribute(`${i}`, `${element.attributes[i]}`);
      }
    }
    for (const i in element) {
      if (
        !(
          i === "tag" ||
          i === "class" ||
          i === "text" ||
          i === "children" ||
          i === "style" ||
          i === "attributes"
        )
      ) {
        tag.setAttribute(`${i}`, `${element[i]}`);
      }
    }
    arr.push(tag);
  });
  return arr;
}

function addingStyle(element, tag) {
  for (const style in element.style) {
    tag.style[style] = element.style[style];
  }
}

const arr = createHtmlPage(elements);

arr.forEach((tag) => {
  document.body.appendChild(tag);
});

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
const FESubcriber = new Subcriber();
FESubcriber.addSubscriber(() => {
  document.querySelector("#total-mark").innerText = stats.totalMark;
  document.querySelector("#avg-mark").innerText = stats.avgMark;
  document.querySelector("#min-mark").innerText = stats.minMark;
  document.querySelector("#max-mark").innerText = stats.maxMark;
  document.querySelector("#percentage").innerText = stats.percentage;
});

//event listener for marks input change
const markInputs = document.querySelectorAll(".subject-marks  li input");
markInputs.forEach((inputTag) => {
  inputTag.addEventListener("change", calcAndStore);
});

//event listener for submit button
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  calcAndStore();
});

function calcAndStore() {
  marks.english = parseInt(english.value) || marks.english;
  marks.tamil = parseInt(tamil.value) || marks.tamil;
  marks.maths = parseInt(maths.value) || marks.maths;
  marks.science = parseInt(science.value) || marks.science;
  marks.history = parseInt(history.value) || marks.history;
  calcSubcriber.callSubcriber();   // update marks in store
  FESubcriber.callSubcriber();     // update marks in FE
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



