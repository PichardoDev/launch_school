function wordCap(str) {
  return str.split(' ').reduce((formattedSentenceString, word) => { 
    let capitalizedWordword = word.split('').reduce((capitalizedWord, letter, index) => {
      if (index === 0) {
        letter = letter.toUpperCase();
      } else {
        letter = letter.toLowerCase();
      }
      return capitalizedWord.concat(letter);
    }, '');

    return formattedSentenceString.concat(capitalizedWord, ' ');
  }, '');
}

console.log(wordCap('four score and seven'));  
console.log(wordCap('the javaScript language'));  
console.log(wordCap('this is a "quoted" word'));  