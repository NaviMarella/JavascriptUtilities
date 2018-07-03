/*
The Object.keys() method returns an array of a given object's property names, in the same order as we get with a normal loop.

Syntax:-
Object.keys(obj)

Return Value:-
An array of strings that represent all the enumerable properties of the given object.
*/

// Example 1
// array like object
let colors = {0: 'Green', 1: 'Yellow', 2: 'Red'}

Object.keys(colors) // Output - [0, 1, 2]

// Exmaple 2

// array like object with random key ordering
var obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(obj)); // [2, 7, 100]


// Example 3

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getName: { value: function() { return this.name; } } });
my_obj.name = 'Navs';
console.log(Object.keys(my_obj)); // ['name']
