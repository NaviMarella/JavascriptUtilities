/*
Description:- The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

Syntax:-
Array.of(element0[, element1[, ...[, elementN]]])

Return Value:-
A new Array instance.

Support:-  Available from ES6

More explanation:-

That method lets you avoid a potential pitfall of the Array constructor function:
If it has several arguments, it behaves like an array literal.
If it has a single argument, it creates an empty array of the given length.
*/

//  Example 1

Array.of(1,3) // [1,3]

// We can also achieve the same using below code

new Array(1,3) // [1,3]

// Array.of also ensures that your arrays don’t accidentally have holes (but I’m not sure that this feature is very imporant).


Array.of("red", "green", "blue")// Output - [ 'red', 'green', 'blue' ]