function leadingSubstrings(str) {
  return str.split('').reduce ((array, _, idx) => array.concat([str.slice(0, idx + 1)]), []);
  };


function substrings(str) {
  return str.split('').reduce((array, _, idx) => array.concat(leadingSubstrings(str.slice(idx))), []);
}    

function palindromes(str) {
  return str.split(' ')
    .map(word => substrings(word))
    .flat()
    .filter(substr => substr.length > 1 && (substr.split('').reverse().join('') === substr));
    ;  }

console.log(palindromes('hello-madam-did-madam-goodbye'));