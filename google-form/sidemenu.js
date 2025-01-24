// Import dependencies
import { createElement } from "./generator.js";

import { questionContainerFun } from "./question-container.js";
// import { listOfDiv } from "./script.js";
const sideMenuElements = [
  {
    tag: "div",
    class: "side-menu",
    children: [
      {
        tag: "div",
        class: "add-question",
        children: [
          {
            tag: "i",
            class: "fa-solid fa-plus",
          },
        ],
      },
    ],
  },
];

export const sideMenuInit = () => {
  createElement(sideMenuElements, document.body);
  // event listner for add question button in the sidemenu
  const addQuestion = document.querySelector(".add-question");
  addQuestion.addEventListener("click", () => {
    questionContainerFun();
  });
};

//select the active div and adjust the sidemenu to the div's scaling accordingly
//achieved by using a click event listner for the div

export function sideMenuEventListener(div) {
  div.addEventListener("click", () => {
    //Marking the active div
    removeOtherActiveBox();
    div.classList.add("active-box");
    //side-menu positioning
    const rect = div.getBoundingClientRect();
    const sideMenu = document.querySelector(".side-menu");
    sideMenu.style.left = `${rect.right + 10}px`;
    sideMenu.style.top = `${rect.top}px`;
    sideMenu.style.height = `${rect.height}px`;
    sideMenu.style.display = "flex";
  });
}

function removeOtherActiveBox() {
  const listOfDiv = document.querySelectorAll(".form-body-container > div")
  listOfDiv.forEach((div) => {
    div.classList.remove("active-box");
  });
}

