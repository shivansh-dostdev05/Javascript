//variables are used to store data values in js
//var: can be redeclared but not recommended
//let: can be reassigned but can't redeclared
//const: cannot be reassigned


/*
Primitve includes string, number, boolena, undefined, null, BigInt, symbol
Non-primitive includes object(key value pairs), array(ordered list), function
*/
console.log("script is running");
console.log("variables");
//operators perform operations on data
//operands are variables on which operations are getting performed
//expressions are logical statements which gives some output
/* Various types of operators are:
1. Arithmetic Operators: +, -, *, /, %(remainder), **(exponent), ++, --
2. Assignment Operators: =
3. Comparison Operators:
4. Bitwise Operators: &, |,^, ~, <<, >>(discard the values), >>>(zero fill right shift, fill zeroes from left for the discarded digits)
5. Logical Operators: &&, ||, ??(for checking NULL and undefined), !
6. NaN: Not a number
7. ternary operator: a > b ? true : false
8. unary operator: delete, typeof, void
9. Relational operator: in, instanceof
10. Grouping operator: ( ) , used for specifying precedence of the operations
*/
let a = 5, b = 6;
console.log(a == b);
console.log(a===b);
console.log(a < b);
console.log(a << 2);
console.log(a ^ b);
console.log(a > b ? "abc" : "efg");

console.log(-2 >> 1);
console.log(null ?? undefined);
console.log(undefined ?? null);

console.log(null << 2);
console.log('abc' << 2);
