import { createHtmlPage } from "../generator.js"
import { stats } from "../stats.js"


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

export const listOfSubs = [];


export function loadPage() {
    console.log("loaded")
    const displayContainer = document.querySelector(".display-container");
    const arr = createHtmlPage(elements);
  
    displayContainer.innerHTML = "";
    arr.forEach((tag) => {
      displayContainer.appendChild(tag);
    });



    listOfSubs.push(populateStats);
    function populateStats() {
        document.getElementById("total-mark").textContent = stats.totalMark;
        document.getElementById("avg-mark").textContent = stats.avgMark;
        document.getElementById("min-mark").textContent = stats.minMark;
        document.getElementById("max-mark").textContent = stats.maxMark;
        document.getElementById("percentage").textContent = stats.percentage;
    }
}







