import { createHtmlPage, elements } from "./generator.js";
import { loadPage as loadHomePage } from "./pages/home.js";
import { loadPage as loadResultPage, listOfStatsSubs as listOfResultSubs, clearSub as clearResultSub } from "./pages/result.js";
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

// remove the previous subscriber when the state changes
function removePreviousSubscribers(state) {
  if (state.page !== "./result") {
    remove(stats.subscriber, listOfResultSubs, clearResultSub);
  }
  if (state.page !== "./home") {
    stats.subscriber.removeSubscriber();
  }
}

function remove(store, listOfResultSubs, clearFun){
  store.removeSubscriber(listOfResultSubs);
  clearFun();
}



function displayContent(state) {
  switch (state.page) {


    case "./home":
      loadHomePage();
      break;


    case "./result":
      loadResultPage();
      stats.subscriber.addSubscriber(listOfResultSubs);
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
    removePreviousSubscribers(state);
    goTo(url, state);
  });
});
