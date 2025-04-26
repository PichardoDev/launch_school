const readline = require('readline-sync');
//const MESSAGE = require('./rock_paper_scissors.json');
const VALID_CHOICES = [
                        ['r', 'rock'],
                        ['p', 'paper'],
                        ['s', 'scissors'],
                        ['l', 'lizard'], 
                        ['k', 'spock']
                      ]
const CHOICE = {  
  player : undefined,
  computer : undefined
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function validateChose() {

}

function getPlayerChose() {

}

function getComputerChose() {

}

function displayWinner(winner) {

  prompt(`You chose ${CHOICE.player}, computer chose ${CHOICE.computer}`);

}

function continueGame() {

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] == 'y')
    return true;
  else
    return false;
  }

function determineWinner(choice, computerChoice) {

  if (choice === computerChoice) {
    return 't';
  } else if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) || 
             (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) || 
             (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
             (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
             (choice === 'spock' && (computerChoice === 'rock' ||  computerChoice === 'scissors'))) {
    return 'p';
  } else {
    return 'c';
  } 
}

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  //let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
  let randomIndex = Math.round(Math.random() * VALID_CHOICES.length - 1);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(displayWinner(choice, computerChoice));


} while (repeat());

