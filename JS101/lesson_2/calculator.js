const jsonMessage = require('/home/ubuntu/launch_school/JS101/lesson_2/calculator_messages.json');
const readline = require('readline-sync');
let language = 'en';

function prompt(message) {
  console.log(`=> ${message}`);
}

function selectLanguage() {

  const AVAILABLE_LANGUAGES = ['en', 'pt', 'de', 'jp', 'es'];
  let code = readline.question(prompt(jsonMessage.language));
  while (!AVAILABLE_LANGUAGES.includes(code)) {
    console.log("\x1b[3A=> Sorry not a valid language, try again!\x1b[K");
    code = readline.question(prompt(jsonMessage.language));
  }
  return code;
}

function getNumber(ordiNumber) {

  let numberStr = readline.question(prompt(jsonMessage[language][ordiNumber]));
  let numberNum = Number(numberStr);
  while (!numberStr || Number.isNaN(numberNum)) {
    numberStr = readline.question(prompt('Sorry not a valid number, try again!\r'));
    numberNum = Number(numberStr);
  }
  return numberNum;
}

function performOperation(operation, number1, number2) {

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
  return output;
}

function selectOperation() {

  let OPERATIONS = ['1', '2', '3', '4'];
  let operation = readline.question(prompt(jsonMessage[language].operation));
  while (!OPERATIONS.includes(operation)) {
    prompt('Sorry not a valid mathematic operation\r');
    operation = readline.question(prompt(jsonMessage[language].operation));
  }
  return operation;
}

function continueCalculation() {

  let continuation = readline.question(prompt("Would like to perform another calculation? press Y (Yes) or N (No)\r"));
  return continuation.toLowerCase() == 'y';

}

function runCalculator() {

  prompt(jsonMessage[language].greeting);
  language = selectLanguage();
  console.log(`${jsonMessage[language].result} ${performOperation(selectOperation(), getNumber('first_number'), getNumber('second_number'))}`);

}

do {
  console.log('\033[2J\033[0f'); 
  runCalculator();
} while (continueCalculation());

