function swapCase(str) {
  return str
    .split(' ')
    .map(word => {
     return word.split('').map(letter => {
      if (letter === letter.toUpperCase()) {
        letter = letter.toLowerCase();
      } else {
        letter = letter.toUpperCase();
      }
      return letter;
    }).join('')})
    .join(' ');
  }

console.log(swapCase('CamelCase'));  
console.log(swapCase('Tonight on XYZ-TV'));  