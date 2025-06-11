function triangle(a, b, c) {
  
  if (a > 0 && b > 0 && c > 0 && (a + b + c) === 180) {

    if (a < 90 && b < 90 && c < 90) {
      return 'acute';  
    } else if (a === 90 || b === 90 || c === 90) {
      return 'right';
    } else {
      return 'obtuse';
    }
  } else {
     return 'invalid';
  }
}
console.log(triangle(60, 70, 50));       // "acute"  x 
console.log(triangle(30, 90, 60));       // "right"  x
console.log(triangle(120, 50, 10));      // "obtuse" x
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"