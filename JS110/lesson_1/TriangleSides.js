function triangle(a, b, c) {
  
  let sortedSides = [a, b, c].sort((a, b) => a - b);
  console.log(sortedSides);
  return determineTriangleClass(sortedSides);
  
}

function determineTriangleClass(sides) {
  
  if ((sides[0] === 0 || sides[1] === 0 || sides[2] === 0) 
    || (sides[0] + sides[1] <= sides[2])) return 'invalid';
  
  if (sides[0] === sides[1] 
    && sides[1] === sides[2]) return 'equilateral';
    
  if (sides[0] !== sides[1] 
    && sides[1] !== sides[2] 
    && sides[1] !== sides[2]) return 'scalene';
    
      console.log();
  if ((sides[0] === sides[1] && sides[1] !== sides[2])
    || (sides[0] === sides[2] && sides[2] !== sides[1])
    || (sides[1] === sides[2] && sides[0] !== sides[1])) return 'isosceles';
  }

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"xx
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"