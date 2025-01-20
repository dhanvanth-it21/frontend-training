// import { data } from "./module1.js"

const clickMe = document.getElementById('click-me');


// clickMe.addEventListener('click', () => {
//     console.log(import("./module1.js"))
//     import("./module1.js").then(
//         (module) => {
//             console.log(module)
//             console.log(module.data);
//         }
//     ).catch((e) => {
//         console.log( `Error occured : ${e}` );
//     })
// })


clickMe.addEventListener('click', async() => {
    const module =  await import("./module1.js");
    console.log(module);
    console.log(module.data);
    
})


