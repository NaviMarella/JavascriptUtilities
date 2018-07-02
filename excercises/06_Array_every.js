/*
Description:- The every() method tests whether all elements in the array pass the test implemented by the provided function.

Syntax:-
arr.every(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);

Return Value:-
true if the callback function returns a truthy value for every array element; otherwise, false.

every() does not mutate the array on which it is called.

*/

//  Example 1
var numberArray = [2,4,6,8,10,12];
let allEven = numberArray.every(number => ((number % 2) === 0));
console.log(allEven); // Output:- true


//  -----------  More  Examples ---------------

// Example 2 - Check for someone with java.

function isNegative(x) {
    return x < 0;
}

let numbers = [-10, 0, 10];

let result = numbers.every(isNegative);
console.log(result) // Output - false


// Example 3

var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

let result = ages.every(checkAdult);
console.log(result) // Output - true