
function sequence(count, startingNumber) {
  let array = [];
 
  if (count > 0) {
    let sign = Math.sign(startingNumber);
    let pace = Math.abs(startingNumber);
    let currenValue = 0;
    do {
      currenValue += pace;
      array.push(sign * currenValue); 
    } while (array.length < count);

    return array;
  } else {
   return array;
  }
}
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]  
console.log(sequence(4, -7));         // [-7, -14, -21, -28]  
console.log(sequence(3, 0));          // [0, 0, 0]  
console.log(sequence(0, 1000000));    // []