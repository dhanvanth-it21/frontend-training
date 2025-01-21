import { createHtmlPage } from "./generator.js";
import { Subcriber } from "./subscriber.js";
import { marks, stats } from "./data.js";

const displayContainer = document.querySelector(".display-container");

// const elements = [
//   {
//     tag: "div",
//     class: "home",
//     children: [
//       {
//         tag: "h1",
//         text: "Welcome to home Page",
//       },
//     ],
//   },
// ];

export const elements = [
  {
    tag: "div",
    class: "container",
    children: [
      {
        tag: "div",
        class: "input-container",
        children: [
          {
            tag: "form",
            children: [
              {
                tag: "ul",
                class: "subject-marks",
                children: [
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "english" },
                        text: "English Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "english",
                          name: "english",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "tamil" },
                        text: "Tamil Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "tamil",
                          name: "tamil",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "maths" },
                        text: "Maths Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "maths",
                          name: "maths",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "science" },
                        text: "Science Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "science",
                          name: "science",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "history" },
                        text: "History Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "history",
                          name: "history",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "button",
                attributes: { type: "submit", id: "submit-mark" },
                text: "Submit",
              },
            ],
          },
        ],
      },
    ],
  },
];

export function loadPage() {
  const arr = createHtmlPage(elements);

  displayContainer.innerHTML = "";
  arr.forEach((tag) => {
    displayContainer.appendChild(tag);
  });

  const english = document.getElementById("english");
  const tamil = document.getElementById("tamil");
  const maths = document.getElementById("maths");
  const science = document.getElementById("science");
  const history = document.getElementById("history");

  english.value = marks.english;
  tamil.value = marks.tamil;
  maths.value = marks.maths;
  science.value = marks.science;
  history.value = marks.history;

  //submit button
  const submitButton = document.getElementById("submit-mark");

  //Subcribers list
  const calcSubcriber = new Subcriber();
  calcSubcriber.addSubscriber(calcTotalMark);
  calcSubcriber.addSubscriber(calcAvgMark);
  calcSubcriber.addSubscriber(calcMinMark);
  calcSubcriber.addSubscriber(calcMaxMark);
  calcSubcriber.addSubscriber(calcPercentage);



  //event listener for marks input change
  const markInputs = document.querySelectorAll(".subject-marks  li input");
  markInputs.forEach((inputTag) => {
    inputTag.addEventListener("input", calcAndStore);
  });


  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    calcAndStore();
  });


  function calcAndStore() {
    marks.english = parseInt(english.value) || 0;
    marks.tamil = parseInt(tamil.value) || 0;
    marks.maths = parseInt(maths.value) || 0;
    marks.science = parseInt(science.value) || 0;
    marks.history = parseInt(history.value) || 0;
    calcSubcriber.callSubcriber(); // update marks in store
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


}




