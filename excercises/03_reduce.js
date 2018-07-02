/*
Description:- The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

Syntax:-
var newArray = arr.reduce(callback(acc, currentElement[, index[, array]])[, thisArg])

Note :-

The first time the callback is called, accumulator and currentValue can be one of two values.
If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array.
If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.
*/

//  Example 1

let numbers = [1,2,3,4,5,6,7,8];

//Question :- Get the sum of all the numbers

let sum = numbers.reduce(function(acc, currentValue, index){
    acc  = acc + currentValue;
    return acc;
}, 0)

// What if we don't return any value in the reduce callback ??
// Ans: sum will be undefined, as acc for next value will be undefined.


//  -----------  More  Examples ---------------

// Example 2 - Get the concatenated string based on the below collection.

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let result = epic.reduce(function (previous, current) {
   return previous + ' ' + current;
});

console.log(result); //Output: "a long time ago in a galaxy far far away"


// Example 3 -- Transform the users collection into below output.

var users = [{ fullName: 'George Washington', email: 'george@us.gov' },
             { fullName: 'John Adams', email: 'john@us.gov' },
             { fullName: 'Thomas Jefferson', email: 'thomas@us.gov' },
             { fullName: 'James Madison', email: 'james@us.gov' }];

let result = users.reduce((previous, current) => {
    let key = current.fullName;
    let value = current.email;
    previous.push({
        key:value
    });
    return previous;
})