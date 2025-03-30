let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   transformedNumbers.push(Math.pow(numbers[i], 2));
// }

transformedNumbers = numbers.map((element => Math.pow(element, 2)));


console.log(transformedNumbers);