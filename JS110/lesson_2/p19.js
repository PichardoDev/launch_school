let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

/* let newMunsters = {};

Object.entries(munsters).forEach(member => {
  newMunsters[member[0]] = Object.freeze({...member[1]});
}) 
 */

const munstersIndestructible = JSON.parse(
  JSON.stringify(munsters),
  (munster, info) => {
    Object.freeze(info)
    console.log(munster.concat('hola'));
  }
);