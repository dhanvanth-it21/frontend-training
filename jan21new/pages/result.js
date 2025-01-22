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

export const listOfStatsSubs = [];

export function loadPage() {
  const displayContainer = document.querySelector(".mark-output");
  const arr = createHtmlPage(elements);

  // if (displayContainer.innerHTML === "") {
  //   arr.forEach((tag) => {
  //     displayContainer.appendChild(tag);
  //   });
  // } else {
  //   displayContainer.innerHTML = "";
  //   return;
  // }

  displayContainer.innerHTML = "";
  arr.forEach((tag) => {
    displayContainer.appendChild(tag);
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

  //event listener for show and hide button;
  const showButton = document.querySelector(".show-button");
  const markList = document.querySelector(".outer-container > ul");
  showButton.innerText = "Hide";
  markList.style.color = "black";
  listOfStatsSubs.push(populateStats);
  marks.subscriber.addSubscriber(stats.calculateStats.bind(stats));
  marks.notifySubscribers();
  showButton.addEventListener("click", () => {
    if (showButton.innerText === "Hide") {
      showButton.innerText = "Show";
      markList.style.color = "red";
      const index = listOfStatsSubs.indexOf(populateStats);
      if (index > -1) {
        listOfStatsSubs.splice(index, 1);
      }
      marks.subscriber.removeSubscriber(stats.calculateStats);
      console.log(marks.subscriber);
    } else {
      showButton.innerText = "Hide";
      markList.style.color = "black";
      listOfStatsSubs.push(populateStats);
      marks.subscriber.addSubscriber(stats.calculateStats.bind(stats));
      marks.notifySubscribers();
    }
  });

  document.getElementById("total-mark").textContent = stats.data.totalMark;
  document.getElementById("avg-mark").textContent = stats.data.avgMark;
  document.getElementById("min-mark").textContent = stats.data.minMark;
  document.getElementById("max-mark").textContent = stats.data.maxMark;
  document.getElementById("percentage").textContent = stats.data.percentage;

  function populateStats(data) {
    document.getElementById("total-mark").textContent = data.totalMark;
    document.getElementById("avg-mark").textContent = data.avgMark;
    document.getElementById("min-mark").textContent = data.minMark;
    document.getElementById("max-mark").textContent = data.maxMark;
    document.getElementById("percentage").textContent = data.percentage;
  }
}

export function clearSub() {
  listOfStatsSubs.length = 0;
}
