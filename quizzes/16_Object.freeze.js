// Task 1

let obj = {
    deatils: {}
}

Object.freeze(obj)

obj.deatils.name = 'Navs'; // Does freeze allow this, to change a property
console.log(obj.deatils.name) // Output ??

// Task 2 - How to check if obj in the above example is frozen or not ??


// Task 3

// In strict mode such attempts will throw TypeErrors
function fail(){
    'use strict';
    let obj = {
        name: 'navs'
    }
    obj.age = 'sparky'; // is this allowed ??
    delete obj.name; // What is the output??
  }

  fail();