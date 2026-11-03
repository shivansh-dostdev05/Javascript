/* Types of error
1. parsing error - grammar is broken
2. runtime error - error occured while running the code
*/

// Exceptions are runtime errors that disrupts program execution
// console.log(x); //ReferenceError: x is not defined
// let obj = null;
// console.log(obj.name); //TypeError: cannot read the properties of null
// console.log("hi";     //SyntaxError
//let arr = newArray(-1) //RangeError
// decodeURIComponent("%"); //URIError //uniform resource identifier
// eval("var a = ;");  //EvalError

//Real-World Use Cases
function divideNumber(a, b) {
  try {
    if (b == 0) {
      const err = new Error("Division by 0 is not possible");
      throw err;
    }
    const result = a / b;
    console.log(result);
  } catch (err) {
    console.error("Arithmetic Error:", err.message);
  } finally {
    console.log("Program Execution Completed");
  }
}
divideNumber(15, 3);
divideNumber(4, 0);

//Rethrow: again throwing the error via catch block so that some other function can handle it in a better way.
//Error contains name, message and stack.
// Self assignment operator ?=, not available in js right now
