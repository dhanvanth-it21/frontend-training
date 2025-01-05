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

//--------------------------------------------------------------------------------------------------------------------------------
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
//-----------------------------------------------------------------------------------------------------------------------------------
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
  const code = num.charCodeAt(0);
  return code >= num0 && code <= num9;
}

function isSpace(str) {
  return str === " ";
}

function makeSmall(str) {
  const array = str.split(" ");
  array[0] = array[0].toLowerCase();
  return array.join(" ");
}
//------------------------------------------------------------------------------------------------------------------------------------
firstName.addEventListener("keypress", firstNameValidation);
firstName.addEventListener("keyup", firstNameValidationstatus);

lastName.addEventListener("keydown", lastNameValidation);
lastName.addEventListener("keyup", lastNameValidationstatus);

age.addEventListener("keypress", ageValidation);
age.addEventListener("input", ageValidationstatus);

email.addEventListener("keypress", emailValidation);
email.addEventListener("input", emailValidationStatus);

phone.addEventListener("keypress", phoneValidation);
phone.addEventListener("input", phoneValidationStatus);


gender.addEventListener("change", genderValidation);
//--------------------------------------------------------------------------------------------------------------------------------------
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
//-------------------------------------------------------------------------------------------------------------------------------------------
function lastNameValidation(e) {
  const val = e.target.value;
  const len = val.length;
  const key = e.key;
  const keyLen = key.length;
  const index = lastName.selectionStart;
  // const key = asciiValue(e.key);
  if (keyLen > 1) {
    if (
      key.toUpperCase() === "BACKSPACE" &&
      index === 1 &&
      isSpace(val.charAt(index))
    ) {
      e.preventDefault();
      e.target.value = val.substring(index + 1);
      lastName.setSelectionRange(index - 1, index - 1);
    } else if (
      key.toUpperCase() === "BACKSPACE" &&
      ((index > 2 &&
        isSpace(val.charAt(index - 2)) &&
        !isSpace(val.charAt(index))) ||
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
    } else if (
      key.toUpperCase() === "BACKSPACE" &&
      isSpace(val.charAt(index - 1))
    ) {
      e.preventDefault();
      e.target.value =
        val.substring(0, index - 1) + makeSmall(val.substring(index));
      lastName.setSelectionRange(index - 1, index - 1);
    } else if (
      key.toUpperCase() === "BACKSPACE" &&
      isSpace(val.charAt(index - 2)) &&
      isSpace(val.charAt(index))
    ) {
      e.preventDefault();
      e.target.value = val.substring(0, index - 2) + val.substring(index);
      lastName.setSelectionRange(index - 1, index - 1);
    }
  } else {
    if (index > 0 && !isSpace(val.charAt(index - 1)) && isAlpha(key)) {
      e.preventDefault();
      e.target.value =
        val.substring(0, index) + key.toLowerCase() + val.substring(index);
      lastName.setSelectionRange(index + 1, index + 1);
    } else if (isSpace(key) && index === 0) {
      e.preventDefault();
    } else if (
      isSpace(key) &&
      (isSpace(val.charAt(index - 1)) || isSpace(val.charAt(index)))
    ) {
      e.preventDefault();
      if (isSpace(val.charAt(index))) {
        lastName.setSelectionRange(index + 1, index + 1);
      }
    } else if (
      isSpace(key) &&
      index < len &&
      isAlpha(val.charAt(index - 1)) &&
      isAlpha(val.charAt(index))
    ) {
      e.preventDefault();
      e.target.value =
        val.substring(0, index) +
        " " +
        val.charAt(index).toUpperCase() +
        val.substring(index + 1);
      lastName.setSelectionRange(index + 1, index + 1);
    } else if (isSpace(key)) {
    } else if (!isAlpha(key)) {
      e.preventDefault();
    } else if (index === 0 && isAlpha(key)) {
      e.preventDefault();
      e.target.value = key.toUpperCase() + val;
      lastName.setSelectionRange(1, 1);
    } else if (isSpace(val.charAt(len - 1)) && isAlpha(key) && len === index) {
      e.preventDefault();
      e.target.value = val + key.toUpperCase();
    }
  }
}

//-------------------------------------------------------------------------------------------------------------------------------------------

function ageValidation(e) {
  const val = e.target.value;
  const len = val.length;
  const key = e.key;
  const keyLen = key.length;
  const index = age.selectionStart;
  console.log(index,val,len,key,keyLen)
  if(!isNum(key) || len >= 2 || (len === 0 && key === "0")){
    e.preventDefault()
  }
  if(len === 1) {
    if(index === 0){
      e.preventDefault()
      const ageVal = parseInt(`${key}${val}`);
      if(ageVal >= 18){
        e.target.value = `${key}${val}`
      }
    }
    const ageVal = parseInt(`${val}${key}`);
    
    if(ageVal < 18) {
      e.preventDefault()
      e.target.value = "";
    }
  }
}

//-------------------------------------------------------------------------------------------------------------------------------------------
function emailValidation(e) {
  const val = e.target.value;
  const len = val.length;
  const key = e.key;
  const keyLen = key.length;
  const index = email.selectionStart;

  
}

function emailValidationStatus(e) {
  const val = e.target.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = emailPattern.test(val);
  const emailStatus = document.getElementById("email-status");
  if(check){
    emailStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    emailStatus.style.color = "green";

  }
  else {
    emailStatus.innerHTML = "* Enter a valid email";
    emailStatus.style.color = "red";
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------
function phoneValidation(e) {
  const val = e.target.value;
  const len = val.length;
  const key = e.key;
  const keyLen = key.length;
  const index = phone.selectionStart;
  if (!isNum(key) || len >= 10) {
    e.preventDefault();
  }
}

function phoneValidationStatus(e) {
  const val = e.target.value;
  const phonePattern = /^[7-9][0-9]{9}$/;
  const check = phonePattern.test(val);
  const phonStatus = document.getElementById("phone-status");
  if(check){
    phonStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    phonStatus.style.color = "green";
  }
  else {
    phonStatus.innerHTML = "* Enter a valid Phone Number";
    phonStatus.style.color = "red";
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------

function genderValidation(e) {
  const val = e.target.value;
  const genderStatus = document.getElementById("gender-status");
  if (val === "male" || val === "female" || val === "other") {
    genderStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    genderStatus.style.color = "green";
  } else {
    genderStatus.innerHTML = "* Please select a valid gender";
    genderStatus.style.color = "red";
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------
function ageValidationstatus(e) {
  const val = e.target.value;
  const ageVal = parseInt(val);
  const ageStatus = document.getElementById("age-status");
  if (ageVal > 17) {
    ageStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    ageStatus.style.color = "green";
  } else {
    ageStatus.innerHTML = "* Please enter above 18";
    ageStatus.style.color = "red";
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------
function firstNameValidationstatus(e) {
  console.log("hello")
  const val = e.target.value;
  const len = val.length;
  const firstNameStatus = document.getElementById("first-name-status");
  if (len >= 3) {
    firstNameStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    firstNameStatus.style.color = "green";
  } else {
    firstNameStatus.innerHTML = "* Enter a valid first name";
    firstNameStatus.style.color = "red";
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------
function lastNameValidationstatus(e) {
  console.log("hello")
  const val = e.target.value;
  const len = val.length;
  const lastNameStatus = document.getElementById("last-name-status");
  if (len >= 1) {
    lastNameStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    lastNameStatus.style.color = "green";
  } else {
    lastNameStatus.innerHTML = "* Enter a valid last name";
    lastNameStatus.style.color = "red";
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------
