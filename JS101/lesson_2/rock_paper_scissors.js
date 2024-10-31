const readline = require('readline-sync');
const MESSAGE = require('./rock_paper_scissors_lizard_spock_messages.json');
const PLAYED = { games : 0 };
const CONTENDERS = [
  {
    name : 'player',
    score : 0,
  },
  {
    name : 'computer',
    score : 0
  }
];
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

function convertAliasToName(alias) {
  let convertedAlias = "";
  VALID_CHOICES.forEach(option => {
    if (option.alias === alias) {
      convertedAlias = option.name;
    }
  });
  return convertedAlias;
}

function decideWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (choice === computerChoice) {
    return "tie";
  } else if (
    (choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function formatValidChoices () {
  let formatedArray = VALID_CHOICES.map((element) => `${element.name} (${element.alias})`);
  return formatedArray;
}

function decideBestOfFive() {
  let winner = 'no winner yet';
  CONTENDERS.forEach((contender) => {
    if (contender.score >= 3) {
      winner = contender.name;
    }
  });
  return winner;
}

function resetPlayedGames() {
  PLAYED.games = 0;
}

function incrementPlayedGames() {
  PLAYED.games += 1;
}

function resetScores() {
  CONTENDERS.forEach(contender => {
    contender.score = 0;
  });
}

function updateScore(winner) {
  CONTENDERS.forEach(contender => {
    if (contender.name === winner) {
      contender.score += 1;
    }
  });
}

function validateChoice (choice) {
  let validOption = false;
  VALID_CHOICES.forEach(
    (option) => {
      if (option.name === choice) {
        validOption = choice;
      } else if (option.alias === choice) {
        validOption = convertAliasToName(choice);
      }
    });
  
  return validOption;
}

function playerSelect() {

  prompt(`${MESSAGE.choice} ${formatValidChoices().join(', ')}`);
  let choice = "";
  choice = readline.question();
  let validChoice = validateChoice(choice);
  if (validChoice === false) {
    prompt(`${MESSAGE.invalid}`);
    return playerSelect();
  }
  return validChoice;
}

function computerSelect() {
  let randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  return VALID_CHOICES[randomIndex].name;
}

function playGame () {

  let playerChoice = playerSelect();
  let computerChoice = computerSelect();
  let result = decideWinner(playerChoice, computerChoice);
  displayGameResult(result);
  updateScore(result);
  incrementPlayedGames();
  return result;
}

function displayGameResult(result) {
  if (result === 'tie') {
    prompt(`${MESSAGE.game_tie}`);
  } else {
    prompt(`${result} ${MESSAGE.game_winner}`);
  }
}

function displayMatchWinner(winner) {
  prompt(`${winner} ${MESSAGE.match_winner}`);
}

function validateRepeat(answer) {

  if (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(`${MESSAGE.invalid}`);
    repeat();
  } else if (answer === 'y') {
    return true;
  } else {
    return false;
  }
}

function repeat() {

  prompt(`${MESSAGE.again}`);
  let answer = readline.question().toLowerCase();
  validateRepeat(answer);
  return answer;

}

function playMatch() {

  do {
    resetPlayedGames();
    resetScores();
    let matchWinner = 'no winner yet';
    do {
      playGame();
      if (PLAYED.games >= 3) {
        matchWinner = decideBestOfFive();
      }
    } while (matchWinner === 'no winner yet');
    displayMatchWinner(matchWinner);

  } while (repeat() === 'y');
}

function playSession() {

  playMatch();

}

playSession();