//--------------------------------- Math commonly used functions

//Math.abs()

const num1 = 4;
const num2 = 9;

let ans = num1-num2;
if(ans < 0) {
   ans =  ans * (-1);
}

// const ans = Math.abs(num1-num2);

console.log("Absolute i : " + num1 + " - " + num2 + " = " + ans);

//-------------------------------------------------------

const num3 = Math.random()*1000;
console.log(num3);
console.log(Math.floor(num3) + ' => floor i');
console.log(Math.ceil(num3) + ' => ceil i');
console.log(Math.round(num3) + ' => rounded i');
console.log(Math.trunc(num3))
console.log(Math.PI);
//--------------------------------------------------------
//Math.min

const arr = [4,2,4,6,3,1,8];
let min = arr.length === 0?Number.MAX_i:arr[0];
for(let i = 0;i<arr.length;i++){
   if(arr[i] < min){
      min = arr[i];
   }
}
console.log(`min i the array = ${min}`);


console.log("min from the array using Math.min() : "+Math.min(...arr));
//-------------------------------------------------------------------
//Math.max()
let max = arr.length === 0?Number.MIN_i:arr[0];
for(let i = 0;i<arr.length;i++){
   if(arr[i] > max){
      max = arr[i];
   }
}
console.log(`min i the array = ${max}`);


console.log("min from the array using Math.max() : "+Math.max(...arr));
//---------------------------------------------------------------------------------

// Math.pow
const base = 4;
const power = 4;

let basePower = 1;

for(let i = 1;i<=base;i++){
   basePower *= base;
}

console.log(`Power 4 of 4 => ${basePower}`);

console.log("Power 4 of 4 using Math.pow() => " + Math.pow(4,4));

//------------------------------------------------------------
// Math.sqrt()
 
let data = 16;
 
let sqrtValue = 0;
 
let found = false;
 
for(let i=1; i<(data/2); i++) {
    if((i * i) === data) {
        sqrtValue = i;
        found = true;
        break;
    }
}
 
console.log(found ?"The perfect square: " + sqrtValue : "No perfect square root");
 
console.log(`The sqrt of: ${data} using Math.sqrt(): ` + Math.sqrt(data));

//-------------------------------------------------------------
// decimal point

console.log(num3.toFixed(2));
console.log(num3.toFixed(4));
console.log(num3.toFixed(0));


//-----------------------------------------------------------
//Math.sign()
const num4 = -5;
const num5 = 0;
const num6 = 7;
let sign = 0;

sign = num4 > 0 ? 1 : num4 < 0 ? -1 : 0;
console.log(sign);

console.log(Math.sign(num4));
console.log(Math.sign(num5));
console.log(Math.sign(num5));

//--------------------------------------------------------------
//start with

const str = "Hello world!!";
const startStr = "Hello";


function startsWithStr(str, startStr) {
   if (startStr.length > str.length) return false;
   for (let i = 0; i < startStr.length; i++) {
      if (str[i] !== startStr[i]) return false;
   }
   return true;
}
console.log(startsWithStr(str, startStr));

console.log(str.startsWith(startStr));

//----------------------------------------------------------------
// end with
const endStr = "world!!";

function endsWithStr(str, endStr) {

   if (endStr.length > str.length) return false;
   let j = str.length - endStr.length;

   for (let i = 0; i < endStr.length; i++) {      
      if (str[i+j] !== endStr[i]) return false;
   }
   return true;
}
console.log(endsWithStr(str, endStr));

console.log(str.endsWith(endStr));

//-----------------------------------------------------------------------

// includes
const subStr = "world";

function includesStr(str, subStr) {

   for (let i = 0; i <= str.length - subStr.length; i++) {
      let found = true;

      for (let j = 0; j < subStr.length; j++) {
         if (str[i + j] !== subStr[j]) {
            found = false;
            break;
         }
      }

      if (found) return true;
   }
   return false;

}
console.log(includesStr(str, subStr));

console.log(str.includes(subStr));

//--------------------------------------------------------------------
// String padStart()

const padStr = "87556";
const totalLength = 10;
const char = "x";

function padStartStr(str, totalLength, char) {

   while (str.length < totalLength) {
      str = char + str;
   }
   return str;

}
console.log(padStartStr(padStr, totalLength, char));

console.log(padStr.padStart(totalLength, char));
//----------------------------------------------------------------------
// String padEnd()

function padEndStr(str, totalLength, char) {

   while (str.length < totalLength) {
      str = str + char;
   }
   return str;
}

console.log(padEndStr(padStr, totalLength, char));

console.log(padStr.padEnd(totalLength, char));

//-------------------------------------------------------------------


