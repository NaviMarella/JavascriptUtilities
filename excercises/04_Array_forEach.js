/*
Description:- The forEach() method executes a provided function once for each array element.

Well, the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array.
This callback is allowed to mutate the calling array.

Syntax:-
arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);

forEach() executes the callback function once for each array element;
unlike map() or reduce() it always returns the value undefined and is not chainable.
The typical use case is to execute side effects at the end of a chain.

*/

//  Example 1
var array_of_numbers = [5, 7, 1, 9, 8, 5];

array_of_numbers.forEach(function(current_value, index, initial_array) {
    if (current_value % 2) {
        console.log('odd');
    }
    else {
        console.log('even');
    }
});


//  -----------  More  Examples ---------------

// Example 2 - Get even numbers from the list

var total_cost = 0;

function add_to_total_cost(amount) {
    total_cost += amount.cost;
}

var shopping_cart_1 = [
    {
        item: 'shirt',
        cost: 22
    },
    {
        item: 'shorts',
        cost: 26
    }
];

var shopping_cart_2 = [
    {
        item: 'cereal',
        cost: 4
    },
    {
        item: 'milk',
        cost: 3
    },
    {
        item: 'eggs',
        cost: 2
    }
]

shopping_cart_1.forEach(add_to_total_cost);
shopping_cart_2.forEach(add_to_total_cost);

console.log(total_cost);

// Note:- Use forEach when we want to deal with sideEffects.