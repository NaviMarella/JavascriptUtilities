/*
The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
Syntax:-
Object.assign(target, ...sources)

Return value:
The target object.
The Object.assign() method only copies enumerable and own properties from a source object to a target object.

Note:- Object.assign() does not throw on null or undefined source values.
*/

// Example 1 -- Cloning an object

const user = {
    name: 'Navs',
    email: 'abc@gmail.com',
    age: 20
}
var copy = Object.assign(user, {age: 30}); // 2nd object will be copied to the first and overrides first object properties, if any properties match
console.log(copy); // Output - {name: "Navs", email: "abc@gmail.com", age: 30}
console.log(user); // Output - {name: "Navs", email: "abc@gmail.com", age: 30}


var copy = Object.assign({}, user, {age: 30}); //both objects will be copied to first object
console.log(copy); // Output - {name: "Navs", email: "abc@gmail.com", age: 30}
console.log(user); // Output - {name: "Navs", email: "abc@gmail.com", age: 20}


// Example 2 -- Deep cloning an object

let obj1 = {a: 10, b: {c: 20}}

let obj2 = Object.assign({}, obj1);

obj2.a = 20;// Output = { a: 20, b: { c: 20}} ---- Obj1 = { a: 10, b: { c: 20}}

obj2.b.c = 30 // Output - { a: 20, b: { c: 30}} ---- Obj1 = { a: 10, b: { c: 30}}

// Note:- assign() doesn't allow you to do a deep clone


// Example 3 - Merging objects

let obj1 = { a: 20, b: 30}
let obj2 = { c: 40, d: 50}

let result = { ...obj1, ...obj2} // Output - {a: 20, b: 30, c: 40, d: 50}


// Example 4 -- Deep cloning an object

 let obj = {
    a: 1,
    b: {
      c: 2,
    },
  }
  let newObj = JSON.parse(JSON.stringify(obj));
  obj.b.c = 20;
  console.log(obj); // { a: 1, b: { c: 20 } }
  console.log(newObj); // { a: 1, b: { c: 2 } } (New Object Intact!)

  // We can achive the same using this

  function cloneObject(obj) {
    var clone = {};
    for(var i in obj) {
        if(obj[i] != null &&  typeof(obj[i])=="object")
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
 }