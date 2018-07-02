/*
Description:-
map() — creates a new array with the results of calling a provided function on every element in the calling array.

Map method will always return an new array.
These methods will always create new arrays, supporting the concept of immutability.

Syntax:-
var newArray = arr.map(callback(currentElement[, index[, array]])[, thisArg])

Note: ---

There is very important thing which you may never forget when using the map.
Use a return statement, otherwise your array will end up with all items as undefined.

*/


// Example 1

let arr = [1, 2, 3, 4, 5];

let doubled = arr.map(num => {
    return num * 2;
});

console.log(doubled); //Output: [2,4,6,8,10]


//  -----------  More  Examples ---------------

// Example 2

const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

function getAnimalName(animal){
    return animal.name;
}
// Get all animals names from the animals collection
let animal_names = animals.map(function(animal, index){
    return getAnimalName(animal);
})

console.log(animal_names); //Output: ["cat", "dog", "lion", "elephant"]



// Example 3

var users = [{ firstName: 'Homer', lastName: 'Simpson' },
             { firstName: 'Marge', lastName: 'Simpson' },
             { firstName: 'Bart', lastName: 'Simpson' },
             { firstName: 'Lisa', lastName: 'Simpson' },
             { firstName: 'Maggie', lastName: 'Simpson' }];

// Write a function to get the getFullNames(firstName + lastName) for each user

let fullNames = users.map((user) =>{
    return (user.firstName + " " + user.lastName);
})

console.log(fullNames);// Output: ["Homer Simpson", "Marge Simpson", "Bart Simpson", "Lisa Simpson", "Maggie Simpson"]
