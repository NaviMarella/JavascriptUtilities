/*
The Object.freeze() method freezes an object: that is, prevents new properties from being added to it;
prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed, it also prevents the prototype from being changed.
The method returns the passed object.

Syntax:-
Object.freeze(obj)

Support:- ES5

Return value:
The object that was passed to the function.

Note :- Object.freeze(…) is shallow, this means that object values in a frozen object are still mutable.
*/

// Example 1
var artist = {
    name: "Johnny Cash",
    latestAlbum: "American V"
};

Object.freeze(artist);

// TypeError: Can't add property firstAlbum, object is not extensible
artist.firstAlbum = "A Hard Days Night";



// Example 2 --- Immutable objects with freeze()
var artist = {
    name: "Johnny Cash",
    latestAlbum: "American V"
};
Object.freeze(artist);

function announce (artist) {
    // Whoops! Assigning the name rather than testing equality!
    if (artist.name = "Elvis Presley") {
        console.log("The King");
    } else {
        console.log(artist.name);
    }
}

// Outputs: "The King"
announce(artist);

// Outputs: {
//     name: "Johnny Cash",
//     latestAlbum: "American V"
// }
console.log(artist);
// The Object.freeze method takes an object and renders it effectively immutable.Its existing properties may not be modified and new properties may not be added.



// Example 3 - Check if an object is frozen using isFrozen()

var artist = {
    name: "Johnny Cash",
    latestAlbum: "American V"
};

Object.freeze(artist);

// Outputs: "Frozen Artist!"
if (Object.isFrozen(artist)) { // here the condition comes as true as the object is frozen
    console.log("Frozen artist!");
}

/*
   Import take away -- freeze() vs const

   const and Object.freeze are two completely different things.
   const applies to bindings ("variables"). It creates an immutable binding, i.e. you cannot assign a new value to the binding.
   Object.freeze works on values, and more specifically, object values. It makes an object immutable, i.e. you cannot change its properties.
 */