// Task 1 - Convert a string into an array of characters

let str = 'JavaScript'; // Only use spread operator

// Output - ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]



// Task 2

function f(...[a, b, c]) {
return a + b + c;
}

f(1)          // what is the output?? Hint undefined + something = undefined
f(1, 2, 3)    // what is the output??
f(1, 2, 3, 4) // what is the output?? (the fourth parameter is not destructured)


// Task 3 - Calculate the multiplcation of numbers using spread
let nums = [10, 20, 30]
function Multiply(x, y, z){
    return x * y * z;
}

Multiply() // Pass nums into multiply to get Output - 6000