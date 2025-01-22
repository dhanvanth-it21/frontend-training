import { createHtmlPage } from "../generator.js"


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
    const displayContainer = document.querySelector(".display-container");
    const arr = createHtmlPage(elements);
  
    displayContainer.innerHTML = "";
    arr.forEach((tag) => {
      displayContainer.appendChild(tag);
    });
}

 