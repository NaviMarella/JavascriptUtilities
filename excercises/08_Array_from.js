/*
Description:- The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

Syntax:-
Array.from(arrayLike[, mapFn[, thisArg]])

Return Value:-
A new Array instance.

Support:-  Available from ES6

More explanation:-

Array-like objects: Some objects in JavaScript are array-like, they have indexed access and a length property like arrays, but none of the array methods.
Array-like objects include the special variable arguments (giving indexed access to all arguments that were passed to a function) and most DOM results.
Not having the standard array methods is especially unfortunate under ECMAScript 5, which has goodies such as Array.prototype.forEach.
The canonical way of converting an array-like object to an array can be seen above. Array.from() simply makes this functionality available as a built-in method.

*/

//  Example 1 from Wes Bos ES6

// Let's assume we are working with DOM elements
<div class="people">
    <p>Wes</p>
    <p>Kait</p>
    <p>Snickers</p>
</div>

const people = document.querySelector('.people p');
const peopleArray = Array.from(people); // Converst nodelist to array
console.log(peopleArray);


//  -----------  More  Examples ---------------

// Example 2 - Convert a String into an array of characters

let str = 'Javascript';
let result = Array.from(str);
console.log(result) // Output -['J', 'a', 'v', 'a', 's', 'r', 'i', 'p', 't']

// We can also do the above using split() --- str.split('')

// Example 3

// Convert all the arguments of a function into an array

function f() {
    return Array.from(arguments);
}

f(1, 2, 3); // Output - [1,2,3]  --- We can achive the same using spread operator


// Example 4

// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]