
export function createHtmlPage(elements,appendElement) {
    const arr = [];
    elements.forEach((element) => {
      const tag = document.createElement(element.tag);
      if (element.class) {
        element.class.split(" ").forEach((cls) => {
          tag.classList.add(`${cls}`);
        });
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
  

  export function createElement(elements,appendElement){

      const arr = createHtmlPage(elements, appendElement);
      
      arr.forEach((ele) => {
          appendElement.appendChild(ele);
      });
      return arr;
  }
  
//   cssForHtmlPage(styles);
  
//   function cssForHtmlPage(styles) {
//     styles.forEach((style) => {
//       const tagArr = document.querySelectorAll(`${style.selector}`);
//       tagArr.forEach((tag) => {
//         addingStyle(style, tag);
//       });
//     });
//   }
  