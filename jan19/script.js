const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const span = document.querySelector('span');




page1.addEventListener('click', () => {
    history.pushState(
        {},
        "page1",
        "page1"
    )
    span.innerText = "1"
})
page2.addEventListener('click', () => {
    history.pushState(
        {},
        "page2",
        "page2"
    )
    span.innerText = "2"
})