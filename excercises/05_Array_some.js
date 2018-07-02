/*
Description:- The some() method tests whether at least one element in the array passes the test implemented by the provided function.

Syntax:-
arr.some(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);

Return Value:-
true if the callback function returns a truthy value for any array element; otherwise, false.

some() does not mutate the array on which it is called.

*/

//  Example 1
var numberArray = [1,2,3,4,5,6,7,8,9,10];
let hasFive = numberArray.some(number => number === 5);
console.log(hasFive); // Output:- true

let hasEleven = numberArray.some(number => number === 11);
console.log(hasEleven); // Output:- false


//  -----------  More  Examples ---------------

// Example 2 - Check for someone with java.

let persons = [
  {id : 1, name : "John", tags : "javascript"},
  {id : 2, name : "Alice", tags : "javascript"},
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];
var hasJava = persons.some(personObj => personObj.tags.indexOf("java") > -1);

console.log(hasJava); // Output:- true


// Example 3

function isNegative(x) {
    return x < 0;
}

let numbers = [-10, 0, 10];

let result = numbers.some(isNegative);
console.log(result) // Output - true