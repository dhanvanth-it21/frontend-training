console.log("console -> checked");

//this is a generator function
function* logging() {
  console.log("inside the logging()");
 yield "paused";
  console.log("after the yield");
  return "stopping";
}

//creates the generator object
const loggingObj = logging();
loggingObj.next();
loggingObj.next();
//---------------------------------------------
console.log('----------------iterable-----------------------')

function* abcs() {
    yield 'a';
    yield 'b';
    yield 'c';
}

console.log(`using spread operator --> ${[...abcs()]}`)

console.log('iterating using the for loop')
for(let log of abcs()) {
    console.log(log)
} 

//---------------------------------------------
console.log('---------------understanding generator work flow-----------------------')

let i = 1;

function* genFun() {
    console.log("Just entered genFun()");
    console.log(`--------`)
    while(true) {
        console.log(`entered loop i -> ${i}`)
        console.log(`pausing loop i -> ${i}`)
        const msg = yield `${i}`;
        console.log(`resuming loop i -> ${i} with message of ${msg}`)
        console.log(`exiting loop i -> ${i++}`)
        console.log(`--------`)
    }
}

const genFunObj = genFun();
genFunObj.next(100);
genFunObj.next(200);


//---------------------------------------------
console.log('---------------Count Down-----------------')

function* countDown(start) {
    while(start > 0){
        // console.log(start);
        yield start;
        start--;
    }
    return 0;
}

const start = 5;
const countDownObj = countDown(start);

const countDownStart = setInterval(() => {
    const result = countDownObj.next();
    console.log(result.value, result);
    if(result.done === true) {
        clearInterval(countDownStart);
    }
},1000)

