// Import dependencies
import { createElement } from "./generator.js";
import {
  markdownOption,
  markdown,
  markdownCheckboxOption,
  markdownCheckbox,
  markdownDropdown,
  markdownDropdownOption,
  paragraph,
  timeType,
  dateType,
  questionTypeOptionList,
  questionContainer,
} from "./data.js";

import { sideMenuEventListener, sideMenuInit } from "./sidemenu.js";
import { headingInit, navBarInit, headingFun } from "./header.js"





window.addEventListener('load', () => {
  navBarInit(); //nav bar creation
  headingInit(); //form heading creation
  sideMenuInit(); // side menu creation
  headingFun(); //form heading functionalities
  const listOfDiv = document.querySelectorAll(".form-body-container > div");
  console.log('in script')
  console.log(listOfDiv)
  listOfDiv.forEach((div) => {
  console.log(div)
  sideMenuEventListener(div);
});

})




//--------------------------------------------- side menu and the active div ---------------------------------------------------


