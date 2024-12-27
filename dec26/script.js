// console.log("Hello World!!");


//--------------------------------------------------------
// simple use of this keyword inside a fuction of a object

// const person = {
//     name : "Dhanvanth",
//     printName : function() {
//         console.log(this.name);
//     }
// }
// person.printName();


// --------------------------------------------------------------


// function printThis() {
//     console.log(this.name);
// }

// const obj1 = {
//     name : "Dhanvanth"
// }
// const obj2 = {
//     name : "S B"
// }

// console.log(obj1) // {name: 'Dhanvanth'}
// console.log(obj2) // {name: 'S B'}

// obj1.printThis = printThis;
// obj2.printThis = printThis;

// obj1.printThis(); //Dhanvanth
// obj2.printThis(); //S B

// console.log(obj1) // {name: 'Dhanvanth', printThis: ƒ}
// console.log(obj2) // {name: 'S B', printThis: ƒ}

//---------------------------------------------------------------------

// const a = {
//     name : "a",
//     printName : function() {
//         console.log(this.name);
//     }
// }

// const b = {
//     name : "b"
// }

// console.log(a); //{name: 'a', printName: ƒ}
// console.log(b); //{name: 'b'}

// b.printName = a.printName;
// console.log(b); //{name: 'b', printName: ƒ}

// b.printName(); //b  


//---------------------------------------------------------------------------

// const person = {
//     name : "abc",
//     greet : function() {
//         console.log(this.name);
//     },
//     greetArrow : () => console.log(this)
// }

// person.greet() //abc

// person.greetArrow() //window object


//-------------------------------------------------------------

// const person = {
//     name : "Dhanvanth",
//     printName : function(){

//         // const referenceThis = this;
//         // setTimeout(
//         //     function(){
//         //         console.log(referenceThis.name)
//         //     },
//         //     2000
//         // )

//         setTimeout(
//             () => console.log(this.name),
//             2000
//         )


//     }
// }

// person.printName()

//-------------------------------------------------------------



