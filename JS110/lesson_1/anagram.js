function isMultiple(number, factors) {
  let multiplicity = factors.some(factor => number % factor === 0);
  return multiplicity;
}

function SumOfMultiples(target, factors) {

  let multiples = [];
  let uniqueMultiples = [];
  let sumResult;
// /*  */
  for (let number = 1; number < target; number += 1) {

    let multiplicity = isMultiple(number, factors);
    
    if (!multiplicity) continue;
    multiples.push(number);
  }
  // console.log(multiples);
  multiples.forEach(multiple => {
    if (!uniqueMultiples.includes(multiple)) {
      uniqueMultiples.push(multiple);
    }
  });
    // console.log(uniqueMultiples);
    return uniqueMultiples.reduce((accumulator, multiple) => {
    return accumulator += multiple;
  }, 0);
}


// Example comparisons with expected outputs  
console.log( 
  SumOfMultiples(20, [3, 5, 19]) === 97   
    ? `Example 2 PASSED ✅ (Expected: 97, Got: ${SumOfMultiples(20, [3, 5, 19])})`  
    : `Example 1 FAILED ❌ (Expected: 78, Got: ${SumOfMultiples(20, [3, 5, 19])})`  
);  

console.log(  
  SumOfMultiples(20, [3]) === 63   
    ? `Example 2 PASSED ✅ (Expected: 63, Got: ${SumOfMultiples(20, [3])})`   
    : `Example 2 FAILED ❌ (Expected: 63, Got: ${SumOfMultiples(20, [3])})`  
);  

console.log(  
  SumOfMultiples(20, [5]) === 30   
    ? "Example 3 PASSED ✅"   
    : `Example 3 FAILED ❌ (Expected: 30, Got: ${SumOfMultiples(20, [5])})`  
);  

console.log(  
  SumOfMultiples(20, []) === 0   
    ? "Example 4 PASSED ✅"   
    : `Example 4 FAILED ❌ (Expected: 0, Got: ${SumOfMultiples(20, [])})`  
);  

console.log(  
  SumOfMultiples(1, []) === 0   
    ? "Example 5 PASSED ✅"   
    : `Example 5 FAILED ❌ (Expected: 0, Got: ${SumOfMultiples(1, [])})`  
); 
 

 