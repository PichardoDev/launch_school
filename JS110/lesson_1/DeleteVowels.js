const VOWELS = 'aeiouAEIOU';

function removeVowels(array) {
  return array.map((str, idx) => {
    return str.split('').filter(char => !VOWELS.includes(char)).join('');
  });
};

[].filter()

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]  
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]  
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
