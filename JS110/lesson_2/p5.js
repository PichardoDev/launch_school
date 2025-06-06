let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let total = Object.keys(munsters).reduce((ages, member) => {
  return munsters[member].gender === 'male' ? ages + munsters[member].age : ages;
}, 0);

console.log(total);