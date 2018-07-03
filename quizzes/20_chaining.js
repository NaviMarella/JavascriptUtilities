// Task 1 - Get three letter animals with Capiatlize on First character

const animals = ["cat","dog","fish"];
function studlyCaps(words, word) {
  return words + word;
}
function exactlyThree(word) {
  return (word.length === 3);
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


// Output - "CatDog"