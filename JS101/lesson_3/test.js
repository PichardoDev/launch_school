const readline = require('readline-sync');
const INDEX_OFFSET = 1;  
const POSITION_OFFSET = 1;  
const INDEX_FIRST = "st";   
const INDEX_SECOND = "nd";   
const INDEX_THIRD = "rd";   
const INDEX_OTHERS = "th";   
const INDEX_LAST = "last";  
const STATUS_APPEARS = "appears";  
const STATUS_DO_NOT_APPEAR = "do not appear";  
const NUMBERS_LENGTH = 6;
const NUMBERS = [];


function getOrdinalIndex(index) {
  let position = index + POSITION_OFFSET;
  position = position.toString();
  switch (position) {
    case '1':
      return position + INDEX_FIRST;
    case '2':
      return position + INDEX_SECOND;
    case '3':
      return position + INDEX_THIRD;
    case '4':
    case '5':
      return position + INDEX_OTHERS;
    default:
      return INDEX_LAST;
    }

}

function buildArrayOfNumbers () {
  for (let i = 0; i <= NUMBERS_LENGTH - INDEX_OFFSET; i += 1) {
    NUMBERS.push(askNumber());
  }
}

function askNumber() {
  return readline.question(`Enter the ${getOrdinalIndex(NUMBERS.length)} number: `);
}

function checkIfAppears(last) {
  return NUMBERS.toSpliced(-POSITION_OFFSET).includes(last);
}

function getSetOfNumbers() {
  return NUMBERS.toSpliced(-POSITION_OFFSET).join(",");
}

function displayIfAppears(appears) {
  let message = appears ? STATUS_APPEARS : STATUS_DO_NOT_APPEAR;
  console.log(`The number ${NUMBERS[NUMBERS_LENGTH - POSITION_OFFSET]} ${message} in ${getSetOfNumbers()}`);
} 

function lastAppearsInNumbers() {
  buildArrayOfNumbers();
  let appears = checkIfAppears(NUMBERS[NUMBERS_LENGTH - POSITION_OFFSET]);
  displayIfAppears(appears);
}

lastAppearsInNumbers();