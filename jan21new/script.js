import { createHtmlPage, elements } from "./generator.js";
import { loadPage as loadHomePage } from "./pages/home.js";
import { loadPage as loadResultPage, listOfSubs } from "./pages/result.js";
import { stats } from "./stats.js";

const elemArr = createHtmlPage(elements);

elemArr.forEach((elem) => {
  document.body.appendChild(elem);
});

// ---------------------------------------  Routing  -------------------------------------------
function goTo(url, state) {
  history.pushState(state, null, url);
  displayContent(state);
}

function displayContent(state) {
  switch (state.page) {
    case "./home":
      loadHomePage();
      break;
    case "./result":
      loadResultPage();
      stats.subscriber.addSubscriber(listOfSubs)
      break;
    case "./marks":
      break;
    default:
      break;
  }
}

document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const url = a.getAttribute("href");
    const state = { page: url };
    goTo(url, state);
  });
});
