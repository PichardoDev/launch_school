const CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const isConsonant = (letter) => {
  return CONSONANTS.includes(letter) 
}

function cleanWord(word) {
  return word.split("").filter(char => char !== " ").join("");
}

function sortStringsByConsonants(strings) {
   return strings.sort((word, nextWord) => countMaxAdjacentConsonants(cleanWord(nextWord)) - countMaxAdjacentConsonants(cleanWord(word)));
}

function countMaxAdjacentConsonants(word) {

  let MaxAdjacentConsonants = 0;

  let getSequenceOfConsonants = (positionCurrentLetter) => {
    let positionNextLetter = positionCurrentLetter + 1;
     return CONSONANTS.includes(word[positionCurrentLetter]) ? 1 + getSequenceOfConsonants(positionNextLetter) : 0; 
    }

  let positionCurrentLetter = 0; 

  while (positionCurrentLetter < word.length - 1) {
      if (CONSONANTS.includes(word[positionCurrentLetter])) {
        let currentSequence = getSequenceOfConsonants(positionCurrentLetter + 1);
        currentSequence = (currentSequence === 0 ? 0 : (currentSequence + 1));
        positionCurrentLetter = currentSequence === 0 ? positionCurrentLetter + 1 : positionCurrentLetter + currentSequence;
        if (currentSequence > MaxAdjacentConsonants) {
          MaxAdjacentConsonants = currentSequence;
        } else {
          positionCurrentLetter += 1;
        }
      } else {
        positionCurrentLetter += 1;
      }
  } 
  return MaxAdjacentConsonants;
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// Expected: ['dddaa', 'ccaa', 'aa', 'baa']
// Actual:   ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// Expected: ['salt pan', 'can can', 'batman', 'toucan']
// Actual:   ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// Expected: ['bar', 'car', 'far', 'jar']
// Actual:   ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// Expected: ['month', 'day', 'week', 'year']
// Actual:   ['day', 'week', 'month', 'year']