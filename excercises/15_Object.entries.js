/*
The Object.entries() method creates an array which contains arrays of key/value pairs of an object.

Syntax:-
Object.entries(obj)

Support:-  ES2017
*/

// Example 1
// array like object
let colors = {0: 'Green', 1: 'Yellow', 2: 'Red'}

Object.entries(colors) // Output - [[0, 'Green'], [1, 'Yellow'], [2, 'Red']]

// Exmaple 2

// array like object with random key ordering
const object3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(object3)[0]);
// expected output: Array ["2", "b"]


// Example 3

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Example 4 -- Converting an Object to Map
const obj = { name: 'Navs', age: 20 };
const map = new Map(Object.entries(obj));
console.log(map); // Map { name: "Navs", age: 20 }