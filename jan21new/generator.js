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

// export const elements = [
//   {
//     tag: "nav",
//     children: [
//       {
//         tag: "div",
//         class: "nav-bar",
//         children: [
//           {
//             tag: "a",
//             attributes: {
//               id: "home",
//               href: "./home",
//             },
//             text: "Home",
//           },
//           {
//             tag: "a",
//             attributes: {
//               id: "result",
//               href: "./result",
//             },
//             text: "Result",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     tag: "div",
//     class: "display-container",
//     children: [],
//   },
// ];


export const elements = [
  {
    tag: "nav",
    children: [
      {
        tag: "div",
        class: "nav-bar",
        children: [
          {
            tag: "a",
            attributes: {
              id: "home",
              href: "./home",
            },
            text: "Home",
          },
          {
            tag: "a",
            attributes: {
              id: "result",
              href: "./result",
            },
            text: "Result",
          },
        ],
      },
    ],
  },
  {
    tag: "div",
    class: "display-container",
    children: [
      {
        tag: "div",
        class: "mark-input",
        children: [],
      },
      {
        tag: "div",
        class: "mark-output",
        children: [],
      },
    ],
  },
];