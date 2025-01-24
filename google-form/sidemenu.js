// Import dependencies
import { createElement } from "./generator.js";

import { questionContainerFun } from "./question-container.js";
// import { listOfDiv } from "./script.js";
const listOfDiv = document.querySelectorAll(".form-body-container > div")
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
    console.log(listOfDiv);
    questionContainerFun();
  });
};

//select the active div and adjust the sidemenu to the div's scaling accordingly
//achieved by using a click event listner for the div

export function sideMenuEventListener(div) {
  console.log(`in side the sideMenuEL`)
  div.addEventListener("click", () => {
    //Marking the active div
    listOfDiv.forEach((div) => {
      div.classList.remove("active-box");
    });
    div.classList.add("active-box");
    console.log(`active-box class added to ${div}`)
    //side-menu positioning
    const rect = div.getBoundingClientRect();
    const sideMenu = document.querySelector(".side-menu");
    sideMenu.style.left = `${rect.right + 10}px`;
    sideMenu.style.top = `${rect.top}px`;
    sideMenu.style.height = `${rect.height}px`;
    sideMenu.style.display = "flex";
  });
}
