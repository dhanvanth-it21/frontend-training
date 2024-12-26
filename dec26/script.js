console.log("Hello World!!");


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
//     console.log(this);
// }

// const obj1 = {
//     name : "Dhanvanth"
// }
// const obj2 = {
//     name : "S B"
// }

// obj1.printThis = printThis;
// obj2.printThis = printThis;

// obj1.printThis();
// obj2.printThis();

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

// b.printName = a.printName;

// b.printName();

//---------------------------------------------------------------------------

const person = {
    name : "abc",
    greet : function() {
        console.log(this.name);
    },
    greetArrow : () => console.log(this.name)
}

console.log(person.greet());

perosn


