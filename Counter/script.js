var count = 0;
var countElement = document.querySelector("#count");

console.log(countElement)

function add1() {
    count++;
    countElement.innerText = "the count is " + count;
    console.log(count);
}

function subtract1(){
    count--;
    countElement.innerText = "the count is " + count;
    console.log(count)
}