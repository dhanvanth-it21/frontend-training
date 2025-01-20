export function createHtmlPage(elements) {
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



export const elements = [
    {
      tag: "h1",
      text: "Mark details",
    },
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
      ],
    },
  ];