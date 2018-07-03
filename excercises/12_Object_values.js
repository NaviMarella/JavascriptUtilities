/*
The Object.values() method returns an array of a given object's own enumerable property values.

Syntax:-
Object.values(obj)

Return Value:-
An array containing the given object's own enumerable property values.

Support:-  ES2017
*/

// Example 1
// array like object
let colors = {0: 'Green', 1: 'Yellow', 2: 'Red'}

Object.values(colors) // Output - ['Green', 'Yellow', 'Red']

// Exmaple 2

// array like object with random key ordering
var obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(obj)); // ['b', 'c', 'a']


// Example 3

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getName: { value: function() { return this.name; } } });
my_obj.name = 'Navs';
console.log(Object.values(my_obj)); // ['Navs']



// Note Array has a values method which converts the array into iterator

let itr = ["a", "b", "c"].values();
itr.next() // Output - {value: "a", done: false}