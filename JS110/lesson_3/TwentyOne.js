const readline = require('readline-sync');

const FIRST_HAND_SIZE = 2;

const NO_WINNER_YET = false;

const CARDS = [
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'], ['H', 'A'], // Hearts  
  ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'], ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'], ['S', 'Q'], ['S', 'K'], ['S', 'A'], // Spades  
  ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'], ['D', 'A'], // Diamonds  
  ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'], ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'], ['C', 'Q'], ['C', 'K'], ['C', 'A'], // Clubs  
];


function displayTable(deck, playerHand, dealerHand) {
  console.log(playerHand, handTotal(playerHand));
  console.log(dealerHand, handTotal(dealerHand));
  console.log('\n');
}

function prompt(str) {
  console.log(`=> ${str}`);
}

function shuffleCards(deck) {
  let shuffledDeck = CARDS.slice();
  for (let index = shuffledDeck.length - 1; index > 0; index--) {  
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [shuffledDeck[index], shuffledDeck[otherIndex]] = [shuffledDeck[otherIndex], shuffledDeck[index]];  
  }  
  return shuffledDeck;
}

function setDeck() {
  return shuffleCards(CARDS);
}

function playerHits(deck, hand) { 
 return deck.shift();
}

function handleHand(deck) {
  return [playerHits(deck), playerHits(deck)];
}

function isDealerCapped(dealerHand) {
  return dealerHand >= 17;
}

function isBusted(hand) {
  return handTotal(hand) > 21;
}



function higherHand(playerHand, dealerHand) {
  if (handTotal(playerHand) === handTotal(dealerHand)) return 'Tie';
  return handTotal(playerHand) > handTotal(dealerHand) ? 'Player' : 'Dealer';
}

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

function playerTurn(deck, state, playerHand, dealerHand) {

  let answer;
  while (true) {
    prompt('For hitting press: "H" For hitting passing: "P"');
    answer = readline.question();
    if (answer === "P") return 'pass'; 
    if (answer === "H") {
      playerHand.push(playerHits(deck));
      displayTable(deck, playerHand, dealerHand);
      state.winner = (isBusted(playerHand) && 'Dealer') || NO_WINNER_YET;
      if (state.winner) return 'end';
    }
  }
}
  
  function dealerTurn(deck, state, playerHand, dealerHand) {
    
    while (true) {
      if (isDealerCapped(dealerHand)) return 'capped';
      dealerHand.push(playerHits(deck));
      state.winner = (isBusted(dealerHand) && 'Player') || NO_WINNER_YET;
      displayTable(deck, playerHand, dealerHand);
      if (state.winner) return 'end';
    }
  }
  
  
  function playGame() {
    let state = {winner : NO_WINNER_YET};
    let deck = setDeck();
    let playerHand;
    let dealerHand;
    
    [playerHand, dealerHand] = [handleHand(deck), handleHand(deck)];
    displayTable(deck, playerHand, dealerHand);
    playerTurn(deck, state, playerHand, dealerHand);
    if (state.winner === NO_WINNER_YET) {
      dealerTurn(deck, state, playerHand, dealerHand);
    } 
    if (state.winner === NO_WINNER_YET) {
      state.winner = higherHand(playerHand, dealerHand);
    }
    displayTable(deck, playerHand, dealerHand);
    announceWinner(state.winner);
  }

playGame();