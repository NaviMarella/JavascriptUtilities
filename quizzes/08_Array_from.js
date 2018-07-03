// Task1 - What is the output for resultArr??
let resultArr = Array.from({ 0: 1, 2: 2, length: 3 });


// Task 2 - What is the output??

const items = Array.from({
    "0": "a",
    "1": "b",
    "2": "c",
    "length": 3
}, c => c.toUpperCase());

// Task 3 - Convert the string into an array of characters by adding '_' to each character

let str = 'Hello'; // Hint - use from() with map


// Output: - ['_H', '_e', '_l', '_l', '_o']