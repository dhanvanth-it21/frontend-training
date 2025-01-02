const a = 97;
const z = 122;
const A = 65;
const Z = 90;
const num0 = 48;
const num1 = 57;
const space = 32;

const task1MaxLimit = 20;

const task1 = document.getElementById("task1");
task1.addEventListener("keypress", task1fun);
task1.addEventListener("keydown", preventSpace);
task1.addEventListener("keyup", pTagLength);
task1.addEventListener("blur", timeString);
const pTag = document.querySelector(".task1 p");

function preventSpace(e) {
  const val = e.target.value;
  const len = val.length;
  const ascciNum = asciiValue(e.key);
  if (ascciNum === space && len === 0) {
    e.preventDefault();
  }
}

function task1fun(e) {
  const ascciNum = asciiValue(e.key);
  if (
    !(
      (ascciNum >= a && ascciNum <= z) ||
      (ascciNum >= A && ascciNum <= Z) ||
      ascciNum === space
    )
  ) {
    e.preventDefault();
  }
  const val = e.target.value;
  const len = val.length;
  if(len === 0 || (len >= 2 && val.charAt(len-1) === ' ')){
    e.preventDefault();
    e.target.value = val + e.key.toUpperCase();
  }
  if (len >= task1MaxLimit) {
    e.preventDefault();
  }

}

function pTagLength(e) {
  const val = e.target.value;
  const len = val.length;
  pTag.textContent = `Num of Count allowed : ${20 - len}`;
}

function timeString(e){
    e.target.value = e.target.value.trim();
    pTagLength(e)
}

function asciiValue(str) {
  return str.charCodeAt(0);
}


//------------------------------------------------------------------
const task2 = document.getElementById("task2");
task2.addEventListener("keydown", task2fun);
function task2fun(e) {
  const ascciNum = asciiValue(e.key);
  if (!((ascciNum >= a && ascciNum <= z) || (ascciNum >= A && ascciNum <= Z))) {
    e.preventDefault();
  }
  const val = e.target.value;
  const len = val.length;
  if(len === 0) {
    e.preventDefault();
    if(e.key.length === 1 && ((ascciNum >= a && ascciNum <= z) || (ascciNum >= A && ascciNum <= Z))){
        e.target.value = e.key.toUpperCase()
    }
  }
  else{
    e.preventDefault();
    if(e.key.length === 1 && ((ascciNum >= a && ascciNum <= z) || (ascciNum >= A && ascciNum <= Z))){
        e.target.value = val + e.key.toLowerCase();
    }
  }
//   e.target.value = `${val.charAt(0).toUpperCase()}${val
//     .substring(1)
//     .toLowerCase()}`;
}


//--------------------------------------------------------------------------
const task4 = document.getElementById("task4");
task4.addEventListener("keypress", task4fun);
function task4fun(e) {
  const ascciNum = asciiValue(e.key);
  if (
    !(
      (ascciNum >= a && ascciNum <= z) ||
      (ascciNum >= A && ascciNum <= Z) ||
      (ascciNum >= num0 && ascciNum <= num1)
    )
  ) {
    e.preventDefault();
  }
  const val = e.target.value;
  e.target.value = val.toUpperCase();
}

//----------------------------------------------------------------------------------

const task5 = document.getElementById("task5");
task5.addEventListener("keypress", task5fun);
function task5fun(e) {
  const ascciNum = asciiValue(e.key);
  if (!(ascciNum >= num0 && ascciNum <= num1)) {
    e.preventDefault();
  }
}

const task3 = document.getElementById("task3");
task3.addEventListener("keypress", task3fun);
function task3fun(e) {
  const ascciNum = asciiValue(e.key);
  const dot = ".";
  const val = e.target.value;

  if (
    !(
      (ascciNum >= num0 && ascciNum <= num1) ||
      (e.key === dot && !val.includes(dot))
    )
  ) {
    e.preventDefault();
  }
  if (val.includes(dot)) {
    const arr = val.split(".");
    if (arr.length > 1 && arr[1].length >= 2) {
      e.preventDefault();
    }
  }
}


