// const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// async function fetchData() {
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Response not Ok : ' + response.statusText);
//         }
//         const data = await response.json();
//         displayData(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // fetch(apiUrl).then(
// //     (response) => {
// //         if (!response.ok) {
// //             throw new Error('Response not Ok : ' + response.statusText);
// //         }
// //         const data = response.json();
// //        data.then((data) => displayData(data))
// //     },
// //     (error) => {
// //         console.error('There');
// //     }
// // )
// // // .then((data) => displayData(data))
// // .catch((error) => console.log("error !!!!!", error)
// // )

// function displayData(data) {
//     console.log(data);
//     const container = document.body;
//     for(const item in data){
//         console.log(item)
//         const div = document.createElement('div');
//         div.innerHTML = `<h3>${data[item]}</h3>`;
//         container.appendChild(div);
//     }
// }

// window.onload = fetchData;

// -------------------------------------------------------------------------------------------------------------

// const p1 = Promise.all([1,2,3,4])
// console.log(p1)

// const a = true;
// const p2 = Promise.all([1,delayFun(),3,4,Promise.resolve("resolved")])
// console.log(p2)

// function delayFun() {
//     return new Promise((resolve,reject) => {
//         if(a) resolve("Super");
//         else reject("Not Super");
//     })
// }


