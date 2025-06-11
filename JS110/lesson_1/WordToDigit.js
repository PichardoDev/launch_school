const LETTERS = "abcdefghijklmnopqrstuvwxyz";

const NUMBER_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10
};

function wordToDigit(sentence) {
  words = sentence.split(' ');
  return words.map(word => {
    return Object.entries(NUMBER_WORDS).reduce((newWord, number) => {
     if (word.includes(
      number[0])) {
      newWord = newWord.replace(number[0], number[1]);
     }
     return newWord;
    }, word);
  })
  .join(' ');
}

console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."// "Please call me at 5 5 5 1 2 3 4. Thanks."