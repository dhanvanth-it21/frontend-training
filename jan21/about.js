import { createHtmlPage } from "./generator.js";
import { Subcriber } from "./subscriber.js";
import { marks, stats } from "./data.js";
const displayContainer = document.querySelector(".display-container");

// const elements = [
//   {
//     tag: "div",
//     class: "about",
//     children: [
//       {
//         tag: "h1",
//         text: "Welcome to about Page",
//       },
//     ],
//   },
// ];


const elements = [
  {
    tag: "div",
    class: "outer-container",
    children: [
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            children: [
  
              {
                tag: "h3",
                text: "Total Mark : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "total-mark" },
                  },
                  
                ],
              },
            ],
          },
          {
            tag: "li",
            children: [
  
              {
                tag: "h3",
                text: "Avg Mark : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "avg-mark" },
                  },
                ],
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "h3",
                text: "Lowest Mark : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "min-mark" },
                  },
                ],
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "h3",
                text: "Highest Mark : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "max-mark" },
                  },
                ],
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "h3",
                text: "Percentage : ",
                children: [
                  {
                    tag: "span",
                    attributes: { id: "percentage" },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export function loadPage() {
    const arr = createHtmlPage(elements);
    
    
    displayContainer.innerHTML = "";
    arr.forEach((tag) => {
        displayContainer.appendChild(tag);
    });


    //FE Subcriber List
    const frontEndSubcriber = new Subcriber();
    function addFESubcribers() {
      frontEndSubcriber.addSubscriber(() => {
        assignTotalMark(),
        assignMinMark(),
        assignMaxMark(),
        assignpercentage(),
        assignAvgMark()
      });
    }

    addFESubcribers();
    frontEndSubcriber.callSubcriber();


    function assignTotalMark() {
      document.querySelector("#total-mark").innerText = stats.totalMark;
    }

    function assignMinMark() {
      document.querySelector("#min-mark").innerText = stats.minMark;
    }

    function assignMaxMark() {
      document.querySelector("#max-mark").innerText = stats.maxMark;
    }

    function assignpercentage() {
      document.querySelector("#percentage").innerText = stats.percentage;
    }

    function assignAvgMark() {
      document.querySelector("#avg-mark").innerText = stats.avgMark;
    }

    


}
