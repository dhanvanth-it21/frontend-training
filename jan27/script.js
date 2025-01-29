const value = "Dhanvanth";

const pTag = document.querySelector(".p-tag");
pTag.textContent = value;
const registry = new FinalizationRegistry((data) => {
  console.log( `The object ${data} has been garbage collected`);
})
const inputTag = document.querySelector(".input-tag");
inputTag.addEventListener("input", () => {
  value = inputTag.textContent;
  pTag.textContent = value;
});
console.log("check");
const arr = [];
const i = 0;
for(let i = 0; i<100; i++){
  const obj = {
    name : "Dhanavnth",
    arr : new Array(100000),
  }
  registry.register(obj,i);
  registry.register(obj.arr,`${i}-arr`);
}