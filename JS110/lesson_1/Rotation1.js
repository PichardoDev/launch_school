function rotateRightmostDigits(number, count) {
 let strNumber = number.toString();
 let firstPart = strNumber.slice(0, strNumber.length - count);
 let secondPart = strNumber.slice((strNumber.length - count) + 1) + strNumber[strNumber.length - count];
 strNumber = firstPart + secondPart;
 return Number(strNumber);
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);