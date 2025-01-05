import { elements } from "./jsondata.js";
import { styles } from "./jsondata.js";

const a = 97;
const z = 122;
const A = 65;
const Z = 90;
const num0 = 48;
const num1 = 57;
const space = 32;

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

cssForHtmlPage(styles);

function cssForHtmlPage(styles) {
  styles.forEach((style) => {
    const tagArr = document.querySelectorAll(`${style.selector}`);
    tagArr.forEach((tag) => {
      addingStyle(style, tag);
    });
  });
}

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

function isAlpha(ch) {
  const a = 97;
  const z = 122;
  const A = 65;
  const Z = 90;
  const code = ch.charCodeAt(0);
  return (code >= a && code <= z) || (code >= A && code <= Z);
}

function isNum(num) {
  const num0 = 48;
  const num9 = 57;
  const code = ch.charCodeAt(0);
  return num >= num0 && num <= num9;
}

function isSpace(str) {
  return str === " ";
}

firstName.addEventListener("keypress", firstNameValidation);
lastName.addEventListener("keydown", lastNameValidation);

function firstNameValidation(e) {
  const val = e.target.value;
  const key = e.key;
  const keyLen = key.length;
  const valLen = val.length;
  const index = firstName.selectionStart;
  if (keyLen === 1 && isAlpha(key)) {
    e.preventDefault();
    if (index === 0) {
      e.target.value = key.toUpperCase() + val.substring(1);
    } else {
      e.target.value =
        val.substring(0, index) + key.toLowerCase() + val.substring(index);
      firstName.setSelectionRange(index + 1, index + 1);
    }
  } else if (isSpace(key) || !isAlpha(key)) {
    e.preventDefault();
  }
}

function lastNameValidation(e) {
  const val = e.target.value;
  const len = val.length;
  const index = lastName.selectionStart;
  const key = asciiValue(e.key);
  if (e.key.length > 1) {
    if (e.key.toUpperCase() === "BACKSPACE" && index === 1 && val.charAt(index) === " ") {
      e.preventDefault();
      e.target.value =val.substring(index+1);
      lastName.setSelectionRange(index - 1, index - 1);
    }
    else if (
      e.key.toUpperCase() === "BACKSPACE" &&
      ((index > 2 &&
        val.charAt(index - 2) === " " &&
        val.charAt(index) !== " ") ||
        index === 1)
    ) {
      if (index < len) {
        e.preventDefault();
        e.target.value =
          val.substring(0, index - 1) +
          val.charAt(index).toUpperCase() +
          val.substring(index + 1);
        lastName.setSelectionRange(index - 1, index - 1);
      }
    }
     else if (
      e.key.toUpperCase() === "BACKSPACE" &&
      val.charAt(index - 1) === " "
    ) {
      e.preventDefault();
      e.target.value =
        val.substring(0, index - 1) + makeSmall(val.substring(index));
      lastName.setSelectionRange(index - 1, index - 1);
    } else if (
      e.key.toUpperCase() === "BACKSPACE" &&
      val.charAt(index - 2) === " " &&
      val.charAt(index) === " "
    ) {
      e.preventDefault();
      e.target.value = val.substring(0, index - 2) + val.substring(index);
      lastName.setSelectionRange(index - 1, index - 1);
    } 
  } else {
    if (
      index > 0 &&
      val.charAt(index - 1) !== " " &&
      isAlpahbet(asciiValue(e.key))
    ) {
      e.preventDefault();
      e.target.value =
        val.substring(0, index) + e.key.toLowerCase() + val.substring(index);
      lastName.setSelectionRange(index + 1, index + 1);
    } else if (key === space && index === 0) {
      e.preventDefault();
    } else if (
      key === space &&
      (val.charAt(index - 1) === " " || val.charAt(index) === " ")
    ) {
      e.preventDefault();
      if (val.charAt(index) === " ") {
        lastName.setSelectionRange(index + 1, index + 1);
      }
    } else if (
      key === space &&
      index < len &&
      isAlpahbet(asciiValue(val.charAt(index - 1))) &&
      isAlpahbet(asciiValue(val.charAt(index)))
    ) {
      e.preventDefault();
      e.target.value =
        val.substring(0, index) +
        " " +
        val.charAt(index).toUpperCase() +
        val.substring(index + 1);
      lastName.setSelectionRange(index + 1, index + 1);
    } else if (key === space) {
    } else if (!isAlpahbet(key)) {
      e.preventDefault();
    } else if (index === 0 && isAlpahbet(key)) {
      e.preventDefault();
      e.target.value = e.key.toUpperCase() + val;
      lastName.setSelectionRange(1, 1);
    } else if (
      val.charAt(len - 1) === " " &&
      isAlpahbet(key) &&
      len === index
    ) {
      e.preventDefault();
      e.target.value = val + e.key.toUpperCase();
    }
  }
}

function isAlpahbet(key) {
  return (key >= a && key <= z) || (key >= A && key <= Z) ? true : false;
}

function makeSmall(str) {
  const array = str.split(" ");
  array[0] = array[0].toLowerCase();
  return array.join(" ");
}
function asciiValue(str) {
  if (str.length > 1) return -1;
  return str.charCodeAt(0);
}