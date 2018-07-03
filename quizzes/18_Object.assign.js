// Task 1

const obj1 = { foo: true, bar: false };
const obj2 = { baz: 1, bar: true };
console.log(extend(obj1, obj2)); // copy object using assign


// Task 2

let movie1 = {
    name: 'Star Wars',
    episode: {
        number : 10
    }
  };

  Object.assign({}, movie1, { episode: 8 }); // What is the Output ??

  let copy = Object.assign({}, movie1)
  copy.episode.number = 20 // What is the output for copy and movie1 ??