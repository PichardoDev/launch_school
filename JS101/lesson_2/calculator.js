const jsonMessage = require('/home/ubuntu/launch_school/JS101/lesson_2/calculator_messages.json');
const readline = require('readline-sync');
let language = 'en';
  
function prompt(message) {
  console.log(`=> ${message}`);
}

function selectLanguage() {

  availableLanguages = ['en', 'pt', 'de', 'jp', 'es'];
  let code = readline.question(prompt(jsonMessage.language));
  while(!availableLanguages.includes(code)) {
    prompt('Sorry not a valid language, try again!\n');
    code = readline.question(prompt(jsonMessage.language));
  }
    return code;
}

function getNumber(ordinalNumber) {

  let numberStr = readline.question(prompt(jsonMessage[language][ordinalNumber]));
  let numberNum = Number(numberStr);
  while(!numberStr || Number.isNaN(numberNum)){
    number = readline.question(prompt('Sorry not a valid number, try again!'));
    numberNum = Number(numberStr);
  }
  return numberNum;
  }

function performOperation() {

  let operations = ['1', '2', '3', '4'];
  let number1 = getNumber('first_number');
  let number2 = getNumber('second_number');
  let operation = readline.question(prompt(jsonMessage[language].operation));
  console.log(operation);
  while (!operations.includes(operation)){
    prompt('Sorry not a valid mathematic operation');
    operation = readline.question(prompt(jsonMessage[language].operation));
  }
  switch (operation) {
    case '1':
      return number1 + number2;
    case '2':
      return number1 - number2;
    case '3':
      return number1 * number2;
    case '4':
      return number1 / number2;
  }
}
  
function continueCalculation () {
  prompt("Would like to perform another calculation? press Y (Yes) or N (No)");
  return readline.question() == 'y' ? true : false;
}

function runCalculator (){

prompt(jsonMessage[language].greeting);
language = selectLanguage();
console.log(`${jsonMessage[language].result} ${performOperation(jsonMessage[language].operation)}`);

}

do {
  runCalculator();
}while (continueCalculation());

