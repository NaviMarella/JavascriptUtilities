/*
Array.includes()

The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
It uses the sameValueZero algorithm to determine whether the given element is found.

Syntax :-
arr.includes(searchElement[, fromIndex])

Support:- this function supports from ES7

Return:-
true if exists, else false
*/

// Example 1

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Apple"); // Output - true

// Example 2

var numbers = [8, 10, 20, 30, 69];
numbers.includes(16); // Output - false


// Example 3

const  array = [NaN];

if (array.includes(NaN)){
console.log("true. NAN was found in the array");// true. NAN was found in the array
}

if (array.indexOf(NaN) == -1){
    console.log("NaN not found in the array");//NaN not found in the array
}

// Example 5

// Checking for undefined with the includes() method.

const array = [, , , ,];

if(array.includes(undefined)){
console.log("true array elements are undefined");// true array elements are undefined
}

// Let's see how indexOf() method will handle this operation.

const array = [, , , ,];

if(!array.indexOf(undefined) == -1 ){
console.log("true. array elements are undefined");
}else {
console.log("Sorry can't find undefined");// Sorry can't find undefined
}

/*
includes() vs indexOf()

The includes method finds NaN and undefined whereas the indexOf method doesn't.
The includes() method  does not distinguish between -0 and +0(This is not a bug, but clearly how javascript works. Check javascript Number type)

*/

/*
String.includes()

The includes() method determines whether one string may be found within another string, returning true or false as appropriate.

Syntax :-
str.includes(searchElement[, fromIndex])

Support:- this function supports from ES6

Return:-
true if the search string is found anywhere within the given string; otherwise, false if not.

inludes() does a string sensitive search.
*/


// Example 1

const str = 'Javascript is awesome';

str.includes('awesome'); // Output - true
str.includes('Awesome'); // Output - false