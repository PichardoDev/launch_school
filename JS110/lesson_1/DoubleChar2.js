function isConstant(char) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char);
}

function doubleConsonants(original) {
  return original.split('').map(char => isConstant(char) ? char.repeat(2) : char).join('');
}

console.log(doubleConsonants('String')); // "SSttrrinngg"  
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"  
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"  
console.log(doubleConsonants('')); // ""

