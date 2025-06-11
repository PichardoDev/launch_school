function rotateRightmostDigits(number, count) {
 let strNumber = number.toString();
 let firstPart = strNumber.slice(0, strNumber.length - count);
 let secondPart = strNumber.slice((strNumber.length - count) + 1) + strNumber[strNumber.length - count];
 strNumber = firstPart + secondPart;
 return strNumber;
}
  
function maxRotation(number) {  
  let strNumber = number.toString();
  for (let position = 0; position <= strNumber.length - 1; position += 1) {
    let firstPart = strNumber.slice(0, position);
    let secondPart = rotateRightmostDigits(strNumber.slice(position), strNumber.slice(position).length);
    strNumber = firstPart + secondPart;
  }
  return Number(strNumber);
}
console.log(maxRotation(0) === 0);
console.log(maxRotation(10) === 1);
console.log(maxRotation(907) === 79);
console.log(maxRotation(120503) === 25031);
console.log(maxRotation(101010) === 111);
console.log(maxRotation(500) === 5);
console.log(maxRotation(1111) === 1111);
console.log(maxRotation(90000) === 9);
console.log(maxRotation(987654321) === 876521439);
console.log(maxRotation(1001) === 11);

/*

.105
0.51
01.5

500
.500
0.05

.8703529146
7.035291468
73.52914680
732.9146805
7321.468059
73216.80594
732160.5948
7321609.485
73216098.54
732160984.5

987654321
8.76543219
86.5432197
864.321975
8642.19753
86429.7531
864295.317
8642951.73
86429513.7

*/
/* 
.987654321 
8.76543219
86.5432197  
864.321975  
8642.19753
86429.7531
864295.317
8642951.73
864295137
 */

/* 
.7321609845
3.216098457
32.160984572
326.09845721
326.098457210
*/

/* 
.120503
2.05031
25.0310
253.100
2530.01
25301.0
*/

/* 
.90000
0.0009
00.090
009.00
0090.0

*/
.10011
0.0111


/* 

.1001
0.011
01.10
010.1

 */


.105
0.51
01.5

*/