var count = 9;
var countElement = document.querySelector("#count");

var count1 = 12;
var countElement1 = document.querySelector("#count1");

var count2 = 9;
var countElement2 = document.querySelector("#count2");

console.log(countElement)

function add1() {
    count++;
    countElement.innerText = count + " like(s)";
}

function add2() {
    count1++;
    countElement1.innerText = count1 + " like(s)";
}

function add3() {
    count2++;
    countElement2.innerText = count2 + " like(s)";
}
