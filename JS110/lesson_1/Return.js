function rotateRightmostDigits(number, count = 0) {
  let arrNumber = number.toString().split('');
  countSet = arrNumber.splice(-count, count);
  countSet.push(countSet.shift());
  return Number(arrNumber.concat(countSet).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917