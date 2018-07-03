/*
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments.

Syntax:-
For function calls:
myFunction(...iterableObj);

For array literals or strings:
[...iterableObj, '4', 'five', 6];

For object literals (new in ECMAScript 2018):
let objClone = { ...obj };

Support:-  Available from ES6
*/

// Example 1 - concatenating arrays

let a = [1,2,3,4,5];
let newA = [...a]; // Copying array a into new array using spread
let b= [7,8,9,10];
let result = [...a, ...b] // Output - [1,2,3,4,5,7,8,9,10]

// Example 2 - Spread in function calls

function Sum(x, y, z){
    return x+y+z;
}
let args = [20, 40, 80]
Sum(...args)// Use spread syntax in passing the parameters


// Example 3 - Spread in arrays

let data = [0.5, 0.9, 0.4]
let result = [0.1, 0.2, 0.3, ...data, 0.7, 0.8]

// Example 4 - Convert iterabes into array

let s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(4);

let a = Array.from(s); // = [ 1, 2, 3, 4 ]

let b = [...s];        // = [ 1, 2, 3, 4 ] // Using spread operator

