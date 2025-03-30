function leadingSubstrings(str) {
  return str.split('').reduce ((array, _, idx) => array.concat([str.slice(0, idx + 1)]), []);
  };


function substrings(str) {
  return [...str].reduce((array, _, idx) => array.concat(leadingSubstrings(str.slice(idx))), []);
}     

function palindromes(str) {
  return str.split(' ').map(word => {
    return substrings(word);    
  }, )
}

console.log(substrings('knitting cassettes'));