function isNonAlphabetic(str) {
  return !('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(str));
}

function staggeredCase(str) {
  let lastCase = 'lower';
  return str
    .split('')
    .map((char) => {
      if (isNonAlphabetic(char)) return char;
      if (lastCase ===  'lower') {
        char = char.toUpperCase();
        lastCase = 'upper'; 
      } else {
        char = char.toLowerCase();
        lastCase = 'lower'; 
      }
      return char;
    })
    .join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

/* console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");  
console.log(staggeredCase("ALL CAPS") === "AlL cApS");  
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");   */