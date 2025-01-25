import { sideMenuEventListener, sideMenuInit } from "./sidemenu.js";
import { headingInit, navBarInit } from "./header.js"





window.addEventListener('load', () => {
  navBarInit(); //nav bar creation
  headingInit(); //form heading creation
  sideMenuInit(); // side menu creation
  sideMenuEventListener(document.querySelector(".form-body-container > div"));// adding event listener to the heading container
})




//--------------------------------------------- side menu and the active div ---------------------------------------------------


