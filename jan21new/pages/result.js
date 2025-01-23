import { createHtmlPage } from "../generator.js";
import { stats } from "../stats.js";
import { marks } from "../marks.js";

const elements = [
  {
    tag: "div",
    class: "outer-container",
    children: [
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            children: [
              {
                tag: "h3",
                text: "Total Mark : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "total-mark" },
                  },
                ],
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "h3",
                text: "Avg Mark : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "avg-mark" },
                  },
                ],
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "h3",
                text: "Lowest Mark : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "min-mark" },
                  },
                ],
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "h3",
                text: "Highest Mark : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "max-mark" },
                  },
                ],
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "h3",
                text: "Percentage : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "percentage" },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];


//this contains the list of functions that are subscribed to the stats object
export const listOfStatsSubs = [];

//------------------------------------------------load the result page----------------------------------------------
export function loadPage() {
  const displayContainer = document.querySelector(".mark-output");


  const arr = createHtmlPage(elements);
  displayContainer.innerHTML = "";
  arr.forEach((tag) => displayContainer.appendChild(tag));

  addButton();
  const showButton = document.querySelector(".show-button");
  const markList = document.querySelector(".outer-container > ul");
  
  const calculateStatsBind = stats.calculateStats.bind(stats);

  //show or hide the stats
  function showHide() {
    if (showButton.innerText === "Hide") {
      showButton.innerText = "Show";
      markList.style.color = "red";
      removeFromListOfStatsSubs(populateStats);
      marks.subscriber.removeSubscriber(calculateStatsBind);
    } else {
      showButton.innerText = "Hide";
      markList.style.color = "black";
      addToListOfStatsSubs(populateStats);
      marks.subscriber.addSubscriber(calculateStatsBind);
      marks.notifySubscribers();
    }
  }
  
  //initially hide the stats
  markList.style.color = "red";
  showButton.addEventListener("click", showHide);

  //populate the stats
  function populateStats(data) {
    document.getElementById("total-mark").textContent = data.totalMark;
    document.getElementById("avg-mark").textContent = data.avgMark;
    document.getElementById("min-mark").textContent = data.minMark;
    document.getElementById("max-mark").textContent = data.maxMark;
    document.getElementById("percentage").textContent = data.percentage;
  }

  //add the button to show or hide the stats
  function addButton() {
    const showButtonDiv = document.createElement("div");
    showButtonDiv.classList.add("show-button-div");
    const showButton = document.createElement("button");
    showButton.classList.add("show-button");
    showButton.innerText = "Show";
    showButtonDiv.appendChild(showButton);
    document.querySelector(".outer-container").appendChild(showButtonDiv);
  }
}

function addToListOfStatsSubs(callback) {
  if (!listOfStatsSubs.includes(callback)) {
    listOfStatsSubs.push(callback);
  }
}

function removeFromListOfStatsSubs(callback) {
  const index = listOfStatsSubs.indexOf(callback);
  if (index > -1) {
    listOfStatsSubs.splice(index, 1);
  }
}

export function clearSub() {
  listOfStatsSubs.length = 0;
}