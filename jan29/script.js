import { createElement } from "./generator.js";

const arrList = [];
const totalHeapSize = performance.memory.jsHeapSizeLimit;

function isHighMemory() {
  const currentHeapSize = performance.memory.totalJSHeapSize;
  console.log(
    `Total heap size: ${totalHeapSize / 1000000} MB, Current heap size: ${
      currentHeapSize / 1000000
    } MB`
  );
  return totalHeapSize * 0.1 <= currentHeapSize;
}

const increseHeap = setInterval(() => {
  arrList.push(new Array(1000000));
}, 100);

const checkStop = setInterval(() => {
  if (isHighMemory()) {
    clearInterval(increseHeap);
    clearInterval(checkStop);
    console.log("high memory usage");
    createElement(errorMeaage,document.body)
  }
}, 1000);

const errorMeaage = 
[
    {
        "tag": "div",
        "class": "error-message",
        "text": "Memory usage is too high!",
    }
]
