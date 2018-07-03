/*
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments.

Syntax:-
For function calls:
myFunction(...iterableObj);

For array literals or strings:
[...iterableObj, '4', 'five', 6];

For object literals (new in ECMAScript 2018):
let objClone = { ...obj };

Support:-  Rest/Spread Properties for ECMAScript proposal (stage 4)
*/

// Example 1 - Shallow clone objects using spread in object literal

let user = {name: 'Navs', email: 'navi@xyz.com'}

let copyUser = {...user}// Better way of handling Object.assign()

//Exmaple 2 - Modifying properties by creating an immutable copy - Pattern in Redux

function reducer(state, action){ // assume state = { name: 'NAVS', isVisible: false}
    switch(action.type){
        case 'Test_action' :
            return {...state, isVisible: true}
        default: return state
    }
}

// Example 3 -- Merge objects

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

var mergedObj = merge ( obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

var mergedObj = merge ( {}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
