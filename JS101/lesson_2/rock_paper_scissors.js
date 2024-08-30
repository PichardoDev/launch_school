const readline = require('readline-sync');
const VALID_CHOICES = [
                        { name : "rock",
                          alias : "r"
                        },
                        { name : "paper",
                          alias : "p"
                        },
                        { name : "scissors",
                          alias : "s"
                        },
                        { name : "lizard",
                          alias : "l"
                        },
                        { name : "spock",
                          alias : "k"
                        }
                      ];

function prompt(message) {
  console.log(`=> ${message}`);
}

function validateRepeat(answer) {

  if (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Invalid entry.')
    repeat();
  } else if (answer === 'y') {
    return true;
  } else
    return false;
}

function repeat() {

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  prompt('Please enter "y" or "n".');
  validateRepeat(answer) && playSession();
    
  }
  
function decideWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (choice === computerChoice) {
    return "It's a Tie";
  } else if (
    (choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) || 
    (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
      return 'You win!';
    } else
      return 'Computer wins!';
}



function playSession() {
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

  prompt(decideWinner(choice, computerChoice));


} while (playAgain() === true)
}