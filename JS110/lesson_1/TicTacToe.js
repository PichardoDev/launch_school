const readline = require("readline-sync");
const PLAYERS = ['player', 'computer'];
const DEFAULT_FIRST_TURN = /* "player" "computer";*/ "choose";
const PRIORITY_SQUARE = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const GAMES_TO_MATCH = 5;
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
function isOpportunity(board) {
  return !!detectOffensive(board);
}
function isThreat(board) {
  return Object.values(detectThreats(board)).length !== 0;
}
function detectThreats(board) {
  let WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];
  let squares = WINNING_LINES.reduce((squares, line) => {
    let [sqr1, sqr2, sqr3] = line;
    if (board[sqr1] === HUMAN_MARKER && board[sqr2] === HUMAN_MARKER && board[sqr3] === INITIAL_MARKER) squares[sqr3] = (squares[sqr3] && (squares[sqr3] + 1)) || 1;
    if (board[sqr1] === HUMAN_MARKER && board[sqr2] === INITIAL_MARKER && board[sqr3] === HUMAN_MARKER) squares[sqr2] = (squares[sqr2] && (squares[sqr2] + 1)) || 1;
    if (board[sqr1] === INITIAL_MARKER && board[sqr2] === HUMAN_MARKER && board[sqr3] === HUMAN_MARKER) squares[sqr1] = (squares[sqr1] && (squares[sqr1] + 1)) || 1;
    return squares
  }, {});
  return squares;
}
function detectOffensive(board) {
  return WINNING_LINES.reduce((squares, line) => {
    let [sq1, sq2, sq3] = line;
    if (board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER && board[sq3] === INITIAL_MARKER) return sq3;
    if (board[sq1] === COMPUTER_MARKER && board[sq2] === INITIAL_MARKER && board[sq3] === COMPUTER_MARKER) return sq2;
    if (board[sq1] === INITIAL_MARKER && board[sq2] === COMPUTER_MARKER && board[sq3] === COMPUTER_MARKER) return sq1;
    return squares;
  }, null);
}
function deployAIDefense(board) {
  let threats = detectThreats(board);
  return Object.entries(threats).reduce((biggestThreat, threat) => {
    let [threatSquare , threatLevel] = threat;
    return threatLevel >= biggestThreat && threatSquare || biggestThreat;
  }, 0);
}
function deployAIOffensive(board) {
  return detectOffensive(board);
}
function joinOr(arr, delimiter = ', ', lastDelimiter = 'or') {
  switch (arr.length) {
    case 0: return '';
    case 1: return `${arr[0]}`;
    case 2: return arr.join(` ${lastDelimiter} `);
    default:
      return arr.slice(0, -1).join(delimiter) +
             `${delimiter}${lastDelimiter} ${arr[arr.length - 1]}`;
  }
}
function prompt(msg) {
  console.log(`=> ${msg}`);
}
function displayScoreboard(scoreboard) {
  console.log(`Player : ${scoreboard.Player} - Computer : ${scoreboard.Computer}`);
}
function updateScoreboard(scoreboard, gameWinner) {
  scoreboard[gameWinner] += 1;
}
function displayBoard(board, scoreboard) {
  console.clear();
  displayScoreboard(scoreboard);
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}
function initializeScoreboard() {
  return {'Player' : 0, 'Computer' : 0};
}
function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}
function playerChoosesSquare(board) {
  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:` );
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}
function isPrioritySquareAvailable(board) {
  return (board[PRIORITY_SQUARE] === INITIAL_MARKER);
}
function computerChoosesSquare(board) {
  let square;
  if (isOpportunity(board)) {
    square = deployAIOffensive(board);
  } else if (isThreat(board)) {
    square = deployAIDefense(board);
  } else if (isPrioritySquareAvailable(board)) {
    square = PRIORITY_SQUARE;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}
function boardFull(board) {
  return emptySquares(board).length === 0;
}
function someoneWonMatch(scoreboard) {
  return !!detectMatchWinner(scoreboard);
}
function detectMatchWinner(scoreboard) {
  for (let participant in scoreboard) {
   if (scoreboard[participant] >= 5) return participant;
  }
}
function someoneWonGame(board) {
  return !!detectGameWinner(board);
}
function detectGameWinner(board) {
  let winner = '';
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      winner = 'Player';
      break;
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      winner ='Computer';
      break;
    }
  }
  return winner || null;
}
function alternatePlayer(currentPlayer) {
  return PLAYERS.find(player => player !== currentPlayer);
}
function chooseSquare(board, scoreboard, currentPlayer) {
  switch (currentPlayer) {
    case 'player':
      playerChoosesSquare(board);
      break;
    case 'computer':
      computerChoosesSquare(board);
      break;
    }
}
function chooseFirstTurn() {
  prompt(`Choose the first to play : ${joinOr(PLAYERS)}`);
  while (true) {
    let chosenFirstPlayer = readline.question().toLocaleLowerCase();
    if (chosenFirstPlayer !== "player" && chosenFirstPlayer !== "computer") {
      console.log(chosenFirstPlayer);
      console.log('It\'s not a valid option!');
    } else return chosenFirstPlayer;
  }
}
function playGame(scoreboard) {
  let board = initializeBoard();
  let gameWinner = '';
  let currentPlayer;
  currentPlayer = DEFAULT_FIRST_TURN !== 'choose' && DEFAULT_FIRST_TURN || chooseFirstTurn();
  displayBoard(board, scoreboard);
  while (true) {
    chooseSquare(board, scoreboard, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    displayBoard(board, scoreboard);
    if (someoneWonGame(board) || boardFull(board)) break;
  }
  if (someoneWonGame(board)) {
    gameWinner = detectGameWinner(board);
    updateScoreboard(scoreboard, gameWinner);
    displayBoard(board, scoreboard);
    prompt(`${gameWinner} won!`);
    if(someoneWonMatch(scoreboard)) prompt(`${detectMatchWinner(scoreboard)} is the Match Winner!`);
    } else {
    //displayBoard(board, scoreboard);
    prompt("It's a tie!");
   }
}
function playMatch() {
  let scoreboard = initializeScoreboard();
  while (true) {
   playGame(scoreboard);
   if (someoneWonMatch(scoreboard)) break;
   prompt('Play a new game?');
   let answer = readline.question().toLowerCase()[0];
   if (answer !== 'y') break;
  }
}
while (true) {
  playMatch();
  prompt('Play a new match?');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}
prompt('Thanks for playing Tic Tac Toe!');