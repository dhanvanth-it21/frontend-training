import { sideMenuEventListener, sideMenuInit } from "./create-survey/sidemenu.js";
import { headingInit, navBarInit, completeValidation } from "./create-survey/header.js"





window.addEventListener('load', () => {
  navBarInit(); //nav bar creation
  headingInit(); //form heading creation
  sideMenuInit(); // side menu creation
  sideMenuEventListener(document.querySelector(".form-body-container > div"));// adding event listener to the heading container
  // validation part for qeustion container and the form heading
  const publish = document.querySelector(".publish");
  publish.addEventListener("click", () => {
      completeValidation();
  })
})




