function repeater(original) {
  return original.split('').map(char => char.repeat(2)).join('');
}

// Example Usage  
console.log(repeater('Hello'));        // Output: "HHeelllloo"  
console.log(repeater('Good job!'));    // Output: "GGoooodd  jjoobb!!"  
console.log(repeater(''));             // Output: ""