//declaring and defining a function
function printThis() {
  console.log("Printing....");
}

//call or invoke a function
printThis();

//function as an expression
let printMe = function () {
  console.log("Printing you...")
}

printMe();


//parameters and arguments
let sum = function (a, b) {
  result = a + b;
  console.log(result);
}

sum(4, 5);


//rest parameters
function calculateThis(x, y, ...rest) {
    console.log(x, y, rest)
}
calculateThis(1, 2, 3, 4, 5, 6)

//nested function
function outer() {
  console.log("This is outer function")
  function inner() {
    console.log("this is inner function")
  }
  inner();
}
outer();

//callback function
function callBack(func) {
  console.log("hello")
  func();
}

callBack(function(){
  console.log(" world")
})

//arrow function
let greetMe = () => console.log("hi")
greetMe();

//IIFE(Immediately Invoke Function Expression)
(function diff() {
  console.log("this is iife")
})()
