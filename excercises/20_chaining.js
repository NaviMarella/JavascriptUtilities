/*
    Method chaining is a technique that can be used to simplify code in scenarios that involve calling multiple functions on the same object consecutively.
*/

// Example 1

data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    }
  ];

/*
    Select only the dogs
    Translate their ages into dog years (multiply them by seven)
    Sum the results
*/

let ages = data
  .filter((animal) => {
    return animal.type === 'dog';
}).map((animal) => {
    return animal.age * 7
}).reduce((sum, animal) => {
    return sum + animal.age;
}); // Output - 84

// Refactoring of the above logic

let isDog = (animal) => {
    return animal.type === 'dog';
}

let dogYears = (animal) => {
    return animal.age * 7;
}

let sum = (sum, animal) => {
    return sum + animal;
}

let ages = data
  .filter(isDog)
  .map(dogYears)
  .reduce(sum);
// ages = 84
