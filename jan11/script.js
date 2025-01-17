import { Subcriber } from "./subscriber.js";
import { marks, stats, elements, styles } from "./data.js";




//------------------------------------------------------------------------------------------------------------
function createHtmlPage(elements) {
  const arr = [];
  elements.forEach((element) => {
    const tag = document.createElement(element.tag);
    if (element.class) {
      tag.classList.add(`${element.class}`);
    }
    tag.textContent = element.text;
    addingStyle(element, tag);
    if (element.children) {
      const childArr = createHtmlPage(element.children);
      childArr.forEach((childTag) => {
        tag.appendChild(childTag);
      });
    }
    if (element.attributes) {
      for (const i in element.attributes) {
        tag.setAttribute(`${i}`, `${element.attributes[i]}`);
      }
    }
    for (const i in element) {
      if (
        !(
          i === "tag" ||
          i === "class" ||
          i === "text" ||
          i === "children" ||
          i === "style" ||
          i === "attributes"
        )
      ) {
        tag.setAttribute(`${i}`, `${element[i]}`);
      }
    }
    arr.push(tag);
  });
  return arr;
}

function addingStyle(element, tag) {
  for (const style in element.style) {
    tag.style[style] = element.style[style];
  }
}

const arr = createHtmlPage(elements);

arr.forEach((tag) => {
  document.body.appendChild(tag);
});

// cssForHtmlPage(styles);

// function cssForHtmlPage(styles) {
//   styles.forEach((style) => {
//     const tagArr = document.querySelectorAll(`${style.selector}`);
//     tagArr.forEach((tag) => {
//       addingStyle(style, tag);
//     });
//   });
// }
//------------------------------------------------------------------------------------------------------------

const english = document.getElementById("english");
const tamil = document.getElementById("tamil");
const maths = document.getElementById("maths");
const science = document.getElementById("science");
const history = document.getElementById("history");
// const markArray = [english,tamil,maths,science,history];

const submitButton = document.getElementById("submit-mark");

const subcriber = new Subcriber();

subcriber.addSubscriber(calTotalMark);
subcriber.addSubscriber(calAvgMark);
subcriber.addSubscriber(calMinMark);
subcriber.addSubscriber(calMaxMark);
subcriber.addSubscriber(calPercentage);

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  marks.english = parseInt(english.value) || marks.english;
  marks.tamil = parseInt(tamil.value) || marks.tamil;
  marks.maths = parseInt(maths.value) || marks.maths;
  marks.science = parseInt(science.value) || marks.science;
  marks.history = parseInt(history.value) || marks.history;
  subcriber.callSubcriber();
  console.log(marks, stats);
  // updateDetails();
});

// function updateDetails() {
//     calTotalMark();
//     calAvgMark();
//     calMinMark();
//     calMaxMark();
//     calPercentage();
// }

// function calTotalMark() {
//     const totalMark = document.getElementById("total-mark");
//     totalMark.innerText = 0;
//     markArray.forEach((mark) => {
//         totalMark.innerText = (parseInt(totalMark.innerText) || 0) + (parseInt(mark.value) || 0);
//     })
// }

// function calAvgMark() {
//     const avgMark = document.getElementById("avg-mark");
//     avgMark.innerText = 0;
//     markArray.forEach((mark) => {
//         avgMark.innerText = (parseInt(avgMark.innerText) || 0) + (parseInt(mark.value) || 0);
//     })
//     avgMark.innerText = (parseInt(avgMark.innerText) || 0) / markArray.length;
// }

// function calMinMark() {
//     const minMark = document.getElementById("min-mark");
//     minMark.innerText = null;
//     markArray.forEach((mark) => {
//         if ((parseInt(minMark.innerText) || Number.MAX_VALUE) > (parseInt(mark.value) || 0)) {
//             minMark.innerText = parseInt(mark.value);
//         }
//     });
// }

// function calMaxMark() {
//     const maxMark = document.getElementById("max-mark");
//     maxMark.innerText = null;
//     markArray.forEach((mark) => {
//         if((parseInt(maxMark.innerText) || Number.MIN_VALUE) < (parseInt(mark.value) || 0) ) {
//             maxMark.innerText = (parseInt(mark.value) || 0);
//         }
//     })
// }

// function calPercentage() {
//     const percentage = document.getElementById("percentage");
//     percentage.innerText = 0;
//     markArray.forEach((mark) => {
//         percentage.innerText = (parseInt(percentage.innerText) || 0) + (parseInt(mark.value) || 0);
//     })
//     percentage.innerText = `${(((parseInt(percentage.innerText) || 0) / (markArray.length * 100)) * 100).toFixed(2)} %`;
// }

function calTotalMark(a) {
  const totalMark = document.getElementById("total-mark");
  totalMark.innerText = 0;
  stats.totalMark = totalMark.innerText = Object.values(marks).reduce(
    (acc, curVal) => acc + curVal,
    0
  );
  subcriber.callSubcriber(a);
  // a();
}

function calAvgMark(a) {
  const avgMark = document.getElementById("avg-mark");
  avgMark.innerText = 0;
  stats.avgMark = avgMark.innerText =
    Object.values(marks).reduce((acc, curVal) => acc + curVal, 0) /
    Object.keys(marks).length;
  subcriber.callSubcriber(a);
  // a();
}

function calMinMark(a) {
  const minMark = document.getElementById("min-mark");
  stats.minMark = minMark.innerText = Math.min(...Object.values(marks));
  subcriber.callSubcriber(a);
  // a();
}

function calMaxMark(a) {
  const maxMark = document.getElementById("max-mark");
  stats.maxMark = maxMark.innerText = Math.max(...Object.values(marks));
  subcriber.callSubcriber(a);
  // a();
}

function calPercentage(a) {
  const percentage = document.getElementById("percentage");
  const totalMarks = stats.totalMark;
  stats.percentage = parseFloat(
    stats.avgMark.toFixed(2)
  );
  // stats.percentage = parseFloat(
  //   ((totalMarks / (Object.keys(marks).length * 100)) * 100).toFixed(2)
  // );
  percentage.innerText = `${stats.percentage}%`;
  subcriber.callSubcriber(a);
  // a();
}
