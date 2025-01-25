// Import dependencies
import { createElement } from "./generator.js";

import { questionContainerFun, deleteQuestionContainerFun } from "./question-container.js";
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
      {
        tag: "div",
        class: "delete-question",
        children: [
          {
            tag: "i",
            class: "fa-solid fa-trash",
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
    sideMenuPosition(document.querySelector('.active-box'));
  });
  // event listner for delete question button in the sidemenu
  const deleteQuestion = document.querySelector(".delete-question");
  deleteQuestion.addEventListener("click", () => {
    deleteQuestionContainerFun();
  });
  deleteQuestion.addEventListener('click',() => {
    sideMenuPosition(document.querySelector('.active-box'));
  })
};

//select the active div and adjust the sidemenu to the div's scaling accordingly
//achieved by using a click event listener for the div

export function sideMenuEventListener(div) {
  div.addEventListener("click", () => {
    //Marking the active div
    removeOtherActiveBox();
    div.classList.add("active-box");
    sideMenuPosition(div);
  });
}

function sideMenuPosition(div) {
  //side-menu positioning
 const rect = div.getBoundingClientRect();
 const sideMenu = document.querySelector(".side-menu");
 sideMenu.style.left = `${rect.right + window.scrollX + 10}px`;
 sideMenu.style.top = `${rect.top + window.scrollY}px`;
 sideMenu.style.height = `${rect.height}px`;
 sideMenu.style.display = "flex";
}

function removeOtherActiveBox() {
  const listOfDiv = document.querySelectorAll(".form-body-container > div")
  listOfDiv.forEach((div) => {
    div.classList.remove("active-box");
  });
}

