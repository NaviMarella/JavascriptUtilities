/*

 The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

  Syntax:-
    function f(a, b, ...theArgs) { // Add your code here}

    Note:- Difference bettween arguments and rest parameters

    rest parameters are only the ones that haven't been given a separate name (i.e. formally defined in function expression), while the arguments object contains all arguments passed to the function;
    the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
    the arguments object has additional functionality specific to itself (like the callee property).
*/

// Example 1 - rest parameters as parameters

function Multiply(a,...args){
    return args.map(b => a*b)
}

Multiply(2, 20, 30,40,50)


// Example 2

  function f(...[a, b, c]) {
    return a + b + c;
  }

  f(1)          // NaN (b and c are undefined)
  f(1, 2, 3)    // 6
  f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)


