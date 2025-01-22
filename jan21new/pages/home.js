import { createHtmlPage } from "../generator.js";
import { marks } from "../marks.js";

const elements = [
  {
    tag: "div",
    class: "container",
    children: [
      {
        tag: "div",
        class: "input-container",
        children: [
          {
            tag: "form",
            children: [
              {
                tag: "ul",
                class: "subject-marks",
                children: [
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "english" },
                        text: "English Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "english",
                          name: "english",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "tamil" },
                        text: "Tamil Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "tamil",
                          name: "tamil",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "maths" },
                        text: "Maths Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "maths",
                          name: "maths",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "science" },
                        text: "Science Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "science",
                          name: "science",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "history" },
                        text: "History Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "history",
                          name: "history",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "button",
                attributes: { type: "submit", id: "submit-mark" },
                text: "Submit",
              },
            ],
          },
        ],
      },
    ],
  },
];

export function loadPage() {
  const displayContainer = document.querySelector(".mark-input");
  const markOutput = document.querySelector(".mark-output");
  const arr = createHtmlPage(elements);

  if(markOutput.innerHTML !== ""){
    markOutput.innerHTML = "";
    marks.subscriber.clearSubscriber();
  }
  displayContainer.innerHTML = "";
  arr.forEach((tag) => {
    displayContainer.appendChild(tag);
  });

  const english = document.getElementById("english");
  const tamil = document.getElementById("tamil");
  const maths = document.getElementById("maths");
  const science = document.getElementById("science");
  const history = document.getElementById("history");

  english.value = marks.data.english;
  tamil.value = marks.data.tamil;
  maths.value = marks.data.maths;
  science.value = marks.data.science;
  history.value = marks.data.history;

  //submit button
  const submitButton = document.getElementById("submit-mark");

  //event listener for marks input change
  const markInputs = document.querySelectorAll(".subject-marks  li input");
  markInputs.forEach((inputTag) => {
    inputTag.addEventListener("input", (e) => {
      marks.setMark(e.target.name, parseInt(e.target.value));
    })
  });
}
