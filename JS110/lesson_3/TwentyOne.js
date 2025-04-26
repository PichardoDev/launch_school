const readline = require('readline-sync');

const ROUNDS_FOR_MATCH = 5;

const NO_WINNER_YET = false;

const CARDS = [
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'], ['H', 'A'],// Hearts
  ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'], ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'], ['S', 'Q'], ['S', 'K'], ['S', 'A'],// Spades
  ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'], ['D', 'A'],// Diamonds
  ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'], ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'], ['C', 'Q'], ['C', 'K'], ['C', 'A'],// Clubs
];

function displayTable(playerHand, playerTotal, dealerHand, dealerTotal) {
  console.clear();
  console.log(playerHand, playerTotal.value);
  console.log(dealerHand, dealerTotal.value);
  console.log('\n');
}

function prompt(str) {
  console.log(`=> ${str}`);
}

function shuffleCards() {
  let shuffledDeck = CARDS.slice();
  for (let index = shuffledDeck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [shuffledDeck[index], shuffledDeck[otherIndex]] = [shuffledDeck[otherIndex], shuffledDeck[index]];
  }
  return shuffledDeck;
}

function setDeck() {
  return shuffleCards();
}

function playerHits(deck) {
  return deck.shift();
}

function handleHand(deck) {
  return [playerHits(deck), playerHits(deck)];
}

function isDealerCapped(dealerTotal) {
  return dealerTotal >= 17;
}

function isBusted(playerTotal) {
  return playerTotal > 21;
}

function higherHand(playerTotal, dealerTotal) {
  if (playerTotal.value === dealerTotal.value) return 'Tie';
  return playerTotal.value > dealerTotal.value ? 'Player' : 'Dealer';
}

// function isMatchWinner 

function handTotal(playerHand) {
  let hand = playerHand;
  let values = hand.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function announceWinner(result) {
  if (result === 'Tie') {
    console.log(`It's a ${result}`);
  } else {
    console.log(`${result} is the Winner!`);
  }
}

function playerTurn(deck, state, playerHand, playerTotal, dealerHand, dealerTotal) {

  let answer;
  while (true) {
    prompt('For hitting press: "H" For hitting passing: "P"');
    let answer = readline.question();
    if (answer === "P") return 'pass';
    if (answer === "H") {
      playerHand.push(playerHits(deck));
      playerTotal.value = handTotal(playerHand);
      displayTable(playerHand, playerTotal, dealerHand, dealerTotal);
      state.winner = (isBusted(playerTotal.value) && 'Dealer') || NO_WINNER_YET;
      if (state.winner) return 'end';
    }
  }
}


function dealerTurn(deck, state, playerHand, playerTotal, dealerHand, dealerTotal) {
  
  while (true) {
    if (isDealerCapped(dealerTotal.value))break;
    dealerHand.push(playerHits(deck));
    dealerTotal.value = handTotal(dealerHand);
    state.winner = (isBusted(dealerTotal.value) && 'Player') || NO_WINNER_YET;
    displayTable(playerHand, playerTotal, dealerHand, dealerTotal);
    if (state.winner) break;
  }
}

function runGame() {
  playMatch();
}

function playMatch() {
  
  let playerGames = 0;
  let dealerGames = 0;
  let answer;
  
  while(true) {

    switch (playRound()) {
      case 'Player' :
        playerGames += 1;
        break;
      case 'Dealer' :
        dealerGames += 1;
        break;
    }
    console.log(`Player won Rounds : ${playerGames}`);
    console.log(`Dealer won Rounds : ${dealerGames}`);
    prompt('Play another Game? (Y) Yes or (N) No');
    answer = readline.question();
    if (answer !== 'Y') break;
  }
}

function playRound() {
  let state = {winner : NO_WINNER_YET};
  let deck = setDeck();
  let playerTotal = {value : 0};
  let dealerTotal = {value : 0};
  let playerHand;
  let dealerHand;

  [playerHand, dealerHand] = [handleHand(deck), handleHand(deck)];
  [playerTotal.value, dealerTotal.value] = [handTotal(playerHand), handTotal(dealerHand)];
  displayTable(playerHand, playerTotal, dealerHand, dealerTotal);
  playerTurn(deck, state, playerHand, playerTotal, dealerHand, dealerTotal);
  if (state.winner === NO_WINNER_YET) {
    dealerTurn(deck, state, playerHand, playerTotal, dealerHand, dealerTotal);
  }
  if (state.winner === NO_WINNER_YET) {
    state.winner = higherHand(playerTotal, dealerTotal);
  }
  displayTable(playerHand, playerTotal, dealerHand, dealerTotal);
  announceWinner(state.winner);
  return state.winner;
}

runGame();