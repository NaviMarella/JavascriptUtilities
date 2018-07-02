/*
Description:- The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Filter will always gives the subset of original array.
These methods will always create new arrays, supporting the concept of immutability.

Syntax:-
var newArray = arr.filter(callback(currentElement[, index[, array]])[, thisArg])
*/

//  Example 1

var users = [{
        name: 'Brad',
        active: true
    },
    {
        name: 'Tom',
        active: false
    },
    {
        name: 'Jim',
        active: true
    },
    {
        name: 'John',
        active: false
    }
];

// Question: Get all active users from users collection.

// We can achive this using for loop

let active_users = [];

// Will give active users from the list of users
for (let i = 0; i < users.length; i++) {
    let user = users[i]; // get each user object
    if(user.active) // If user is active, push into result array
     active_users.push(user);
}

console.log(active_users);
/*
Output: [
    {name: 'Brad', active: true},
    {name: 'Jim', active: true}
]
*/

// We can achive this using .filter()

let active_users = users.filter( user => user.active); // Easy to understand and the iteration is taken care by filter.
console.log(active_users);


//  -----------  More  Examples ---------------

// Example 2 - Get even numbers from the list

let numList = [1,2,3,4,5,6,7,8,9,10];

function isEven(num){
    return ((num % 2) === 0);
}

let EvenList = numList.filter(isEven);
console.log(EvenList);

/*
    Output: [2, 4, 6, 8, 10]
*/

// Example 3 -- Filter the list without empty values (null, undefined)

let inputArray = ["hello", undefined, 0, 1, null, 100, " "];

let result = inputArray.filter(e => e);

// if we also wanted '0' value, use this

result = inputArray.filter(function(e){ return (e === 0 || e) });

console.log(result);

/*
    Output: ["hello", 0, 1, 100, " "]
*/


