const jsonMessage = require('/home/ubuntu/launch_school/JS101/lesson_2/calculator_messages.json');
const readline = require('readline-sync');


function prompt(message) {
  console.log(`=> ${message}`);
}

function continueCalculation () {
  prompt("Would like to perform another calculation 1)Yes! 2)No!");
  return readline.question() == '1' ? true : false;
}

function getNumber(message) {
let number;

do { 
  prompt(message);
  number = readline.question();
  numberNum = Number(number);
  console.log(number, numberNum);
} while(!number || Number.isNaN(numberNum))

return numberNum;
}

function runCalculator (){
prompt(jsonMessage.messages.greeting);


number1 = getNumber(jsonMessage.messages.first_number);
number2 = getNumber(jsonMessage.messages.sencond_number);


prompt(jsonMessage.messages.operation);
let operation = readline.question();

let output;
switch (operation) {
  case '1':
    output = number1 + number2;
    break;
  case '2':
    output = number1 - number2;
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 / number2;
    break;
}

console.log(jsonMessage.messages.result + " " + output);

}


do {
  runCalculator();
}while (continueCalculation());

