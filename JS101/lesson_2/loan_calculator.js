const readline = require('readline-sync');
const MESSAGE = require('./loan_calculator_messages.json')
const UP_APR = 2;
const UP_DURATION = 3;
const UP_AMOUNT = 2;
const MAX_AMOUNT = 999999999;
const MIN_AMOUNT = 1;
const MAX_DURATION = 2400;
const MIN_DURATION = 1;
const MONTH_DURATION = /^\d{1,4}(?=m)/gi;
const YEAR_DURATION = /^[0-9]{1,3}(?=y)/gi;
const PERCENTAGE_APR = /^(\d{1,3})(\.\d+)?%/g;
const DECIMAL_APR = /^([01](\.\d+)?)/g;
const AMOUNT = /\b\d{1,9}(\.\d+)?\b/g;
let repeat = false;

function clearInputLine() {
  console.log('\x1b[2K \x1b[0G \x1b\r[1A');
}

function promptOnLine(message = undefined, line) {
  if (message !== undefined)
    console.log(`\x1b\r[${line}A=> ${message}`);
}

function prompt(message, upward = -1) {
  if (repeat) {
    console.log(`\x1b\r[${upward + 1}A\x1b[2K \x1b[0G=> ${message}`);
    clearInputLine();
   } else {
    console.log(`\x1b\r[${upward}A\x1b[2K \x1b[0G=> ${message}`);
    clearInputLine();
  }
}

function validateLoanAmount(str) {

  let loanAmountFormat = AMOUNT.exec(str);
  
  if (loanAmountFormat !== null) {
    let loanAmount = parseFloat(loanAmountFormat[0]);
    if (loanAmount >= MIN_AMOUNT && loanAmount <= MAX_AMOUNT) {
      return loanAmount;
    }
  } 

  prompt(`${MESSAGE.invalid}${MESSAGE.loan_amount}\n`, UP_AMOUNT);
  repeat = true;
  return false;
  }


function getLoanAmount() {
  do {
  let loanAmount = readline.question(prompt(`${MESSAGE.input} ${MESSAGE.loan_amount}`));
  amount = validateLoanAmount(loanAmount);
  } while (!amount); 
  return amount;

}

function validateApr(str) {
  
    let percentageFormat = PERCENTAGE_APR.exec(str);
    if (percentageFormat !== null) {
      let apr = parseFloat(percentageFormat[0]) / 100;
      if (apr > 0 && apr <= 100) {
          return apr;
      }
    } else {
        let decimalFormat = DECIMAL_APR.exec(str);
        if (decimalFormat !== null) {
          let apr = parseFloat(decimalFormat[0]);
          if (apr > 0 && apr <= 1) {
            return apr;
          } 
        }
    }
        prompt(`${MESSAGE.invalid} ${MESSAGE.apr.id}\n`, UP_APR);
        
        repeat = true;
        return false;
      
}

function getApr() {
  let apr;
  do {
  apr = readline.question(prompt(`${MESSAGE.input} ${MESSAGE.apr.id}`));
  apr = validateApr(apr);
  } while (!apr);
  return apr / 12; 
 

}

function validateDuration(str) {
  let duration;
  let monthlyDuration = MONTH_DURATION.exec(str);
  if (monthlyDuration !==  null) {
    duration = parseInt(monthlyDuration[0]);
    
  } else {
    let yearlyDuration = YEAR_DURATION.exec(str);
    if (yearlyDuration !== null) {
      duration = parseInt(yearlyDuration[0]) * 12;
    } else {
      prompt(`${MESSAGE.invalid} ${MESSAGE.duration.id}\n`, UP_DURATION);
      repeat = true;
      getDuration();
    }
  }
  if (duration > MIN_DURATION && duration <= MAX_DURATION) {
    return duration;
  } else {
    prompt(`${MESSAGE.invalid} ${MESSAGE.duration.id}\n`, UP_DURATION);
    repeat = true;
    getDuration();
  }
}
    
function getDuration() {
  
  let duration;
  do {
  duration = readline.question(prompt(`${MESSAGE.input} ${MESSAGE.duration.id}\n   ${MESSAGE.duration.example}`));
  duration = validateDuration(duration);
  } while (!duration)
  return duration;
  
}

function runLoanCalculator() {
  
}

function calculateMonthlyPayment() {

  let amount = getLoanAmount();
  let duration = getDuration();
  let apr = getApr();
  let payment = (amount * (apr / (1 - Math.pow((1 + apr), (-duration))))).toFixed(2);
  
  prompt(`${MESSAGE.monthly}${payment}`);
}

calculateMonthlyPayment();