import { createHtmlPage, elements } from "./generator.js";

const arr = createHtmlPage(elements);
arr.forEach((tag) => {
  document.body.appendChild(tag);
});



// const displayContainer = document.querySelector(".display-container");

const home = document.getElementById("home");
const about = document.getElementById("about");

home.addEventListener('click', loadHomePage)

async function loadHomePage(e) {
    e.preventDefault();
    if (history.state !== "home") {
        history.pushState("home", null, "/jan21/home");
        }
    const homePage = await import("./home.js");
    homePage.loadPage()
}

about.addEventListener('click', loadAboutPage)

async function loadAboutPage(e) {
    e.preventDefault();
    if (history.state !== "about") {
        history.pushState("about", null, "/jan21/about");
    }
    const aboutPage = await import("./about.js");
    aboutPage.loadPage()
}
