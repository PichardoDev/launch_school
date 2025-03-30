function isBalanced(string) {
  let opens = 0;
  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === '(') {
      opens += 1;
    } else if (string[idx] === ')') {
      if (!opens) return false;
      opens -= 1;
    };
  } 
  return !opens;
};


console.log(isBalanced("What (is) this?") === true);  
console.log(isBalanced("What is) this?") === false);  
console.log(isBalanced("What (is this?") === false);  
console.log(isBalanced("((What) (is this))?") === true);  
console.log(isBalanced("((What)) (is this))?") === false);  
console.log(isBalanced("Hey!") === true);  
console.log(isBalanced(")Hey!(") === false);  
console.log(isBalanced("What ((is))) up(") === false);