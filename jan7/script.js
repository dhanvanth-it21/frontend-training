// //Grabage Collection :

// // advantages :
// //     prevent memory leaks
// //     focus on the logic
// //     no need to worry about memory management

// //---------------------------------------------------------------------------

// // Memory cycle : allcate ---> use ---> deallocate

// // Automatic memory management :

// // const n = 123;
// // const s = "string";

// // const o = {
// //   a: 1,
// //   b: null,
// // };

// // const a = [1, null, "str2"];

// // function f(a) {
// //   return a + 2;
// // }

// // window.addEventListener(
// //   "click",
// //   () => {
// //     document.body.style.backgroundColor = "lightblue";
// //   },
// //   false
// // );

// //---------------------------------------------------------------------------
// most common algorithm is "Mark-and-Sweep".

const registry = new FinalizationRegistry((data) => {
    console.log( `The object ${data} has been garbage collected`);
})

function giveObject() {
  const obj = {
    name: "Dhanvanth",
  };
  registry.register(obj, obj.name);
  return obj;
}

giveObject();

// Ways of GC finding unreferenced object //

//Reference-counting garbage collection :

// number of refereces to the Object, when it reaches zero , GC will come in action
//     limitation : circular reference

// eg :

function giveCircularRefObj() {
  const obj1 = {};
  const obj2 = {};

  obj1.ref = obj2;
  obj2.ref = obj1;

  registry.register(obj1,"obj1");
  registry.register(obj2,"obj2");
}

giveCircularRefObj();
console.log("GC will work at any time");

// limitations : of GC :
//      can't explicitly call GC



















//-----------------------------------------------------------------------------------------------------------------
//-------------------------------------------Math.randdom----------------------------------------------------------

// const num1 = Math.random();
// const num2 = Math.random();
// const num3 = Math.random();
// const num4 = Math.random();
// const num5 = Math.random();

// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)
// console.log(num5)

// const arr = [];
// const map = new Map();
// const numMap = new Map();

// for(let i  = 0; i < 1000000; i++) {
//   const num = Math.random();
//   const len = num.toString().length - 2;
//   map.set(len, (map.get(len) || 0) + 1);
//   if(len >= 20 || len <= 12 ){
//     const nums = numMap.get(len) || [];
//     nums.push(num);
//     numMap.set(len, nums);
//   }
// }

// console.log(arr.sort());
// console.log(map);
// console.log(numMap);

// const setVar = new Set();

// for(let i  = 0; i < 10000000; i++) {
//   const num = Math.random();
//   const len = num.toString().length - 2;
//   setVar.add(len);
// }

// console.log(setVar);



















// -----------------------------------------------------------------------------------------------------------------
// ------------------------------------------------Ployfill---------------------------------------------------------
// const arr = [];
// // const arr1 = ["D",'dhanvanth',1,true,false,{name : "sb"},-10];

// if (!Array.prototype.min) {
//   Array.prototype.minmax = function (isMax = false) {
//     const sortedArr = [...this].sort();
//     return isMax ? sortedArr[sortedArr.length - 1] : sortedArr[0];
//     // return isMax ? Math.max(...this) : Math.min(...this);
//   };
// }

// const minVal = arr.minmax();
// const maxVal = arr.minmax(true);

// console.log(minVal);
// console.log(maxVal);

// // returning array with unique elements in an array



// if (!Array.prototype.uniqueElements) {
//   Array.prototype.uniqueElements = function () {

//     const arrAsSet = [];
//     this.forEach(i => {
//       if(!arrAsSet.includes(i)) arrAsSet.push(i);
//     });
//     return arrAsSet;

//     // const set = new Set(this);
//     // return Array.from(set);

//   };
// }

// console.log(arr.uniqueElements());
