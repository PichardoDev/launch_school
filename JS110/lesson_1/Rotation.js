function rotateRightmostDigits(number, count = 1) {
  let arrNumber = number.toString().split('');
  // console.log(`Insidearr ${arrNumber}`);
  countSet = arrNumber.splice(-count, count);
  countSet.push(countSet.shift());
  console.log(`2 Insidearr ${arrNumber}`);
  return Number(arrNumber.concat(countSet).join(''));
}


function maxRotation(number) {

  let arrNumber = number.toString().split('');
  let numberLength = arrNumber.length;

  for (let currentRotatingPosition = 0; currentRotatingPosition <= numberLength - 1; currentRotatingPosition += 1) {
    console.log(`arr ${arrNumber}`);
    let secondPart = arrNumber.splice(currentRotatingPosition);
    let firstPart = arrNumber;
    console.log(`first ${firstPart}`);
    console.log(`second ${secondPart}`);
    let rotatedSecondPart = rotateRightmostDigits(Number(secondPart.join('')))
      .toString()
      .split('');
    arrNumber = firstPart.concat((secondPart.toString().split('')));
    console.log(arrNumber);
  }
  return arrNumber;
}
    console.log(maxRotation(735291));      // 321579

    /* console.log(maxRotation(3));           // 3
    console.log(maxRotation(35));          // 53
    console.log(maxRotation(105));         // 15 -- the leading zero gets dropped
    console.log(maxRotation(8703529146));  // 7321609845
 */